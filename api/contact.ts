import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

/*
 * Serverless contact endpoint for Rahim Care Group.
 * Validates and sanitises the enquiry on the server, then sends it to the
 * admin address via Resend. The browser never sees the API key.
 *
 * Required environment variables (set in Vercel, never in the repo):
 *   RESEND_API_KEY     - Resend API key
 *   CONTACT_TO_EMAIL   - recipient (admin@rahimcaregroup.com)
 *   CONTACT_FROM_EMAIL - sender on a Resend-verified domain
 */

const ENQUIRY_TYPES = [
  'General Enquiry',
  'Residential Care Enquiry',
  'Information About Our Homes',
  'Partnership or Professional Enquiry',
  'Other',
]

const LIMITS = { name: 100, email: 254, phone: 30, subject: 150, message: 4000 }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Very small in-memory rate limiter. Serverless instances are short-lived, so
// this throttles bursts from a single IP within a warm instance rather than
// acting as a hard global limit. Enough to blunt basic abuse without a database.
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 500) {
    // Prevent unbounded growth on a long-lived instance.
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key)
    }
  }
  return recent.length > MAX_PER_WINDOW
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function str(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const fwd = req.headers['x-forwarded-for']
  const ip = (Array.isArray(fwd) ? fwd[0] : fwd || '').split(',')[0].trim() || 'unknown'
  if (rateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again shortly.' })
  }

  const body = (typeof req.body === 'string' ? safeParse(req.body) : req.body) ?? {}

  // Honeypot: real users leave this empty. Pretend success to bots.
  if (str(body.company)) {
    return res.status(200).json({ ok: true })
  }

  const name = str(body.name)
  const email = str(body.email)
  const phone = str(body.phone)
  const enquiryType = str(body.enquiryType)
  const subject = str(body.subject)
  const message = str(body.message)

  const errors: Record<string, string> = {}
  if (!name) errors.name = 'Please enter your name.'
  else if (name.length > LIMITS.name) errors.name = 'Name is too long.'
  if (!email) errors.email = 'Please enter your email address.'
  else if (email.length > LIMITS.email || !EMAIL_RE.test(email))
    errors.email = 'Please enter a valid email address.'
  if (phone.length > LIMITS.phone) errors.phone = 'Phone number is too long.'
  if (!enquiryType) errors.enquiryType = 'Please select the nature of your enquiry.'
  else if (!ENQUIRY_TYPES.includes(enquiryType))
    errors.enquiryType = 'Please select a valid enquiry type.'
  if (!subject) errors.subject = 'Please enter a subject.'
  else if (subject.length > LIMITS.subject) errors.subject = 'Subject is too long.'
  if (!message) errors.message = 'Please enter your message.'
  else if (message.length > LIMITS.message) errors.message = 'Message is too long.'

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ error: 'Validation failed', errors })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !to || !from) {
    console.error('Contact endpoint is missing required environment variables.')
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  const timestamp = new Date().toISOString()
  const rows: Array<[string, string]> = [
    ['Full Name', name],
    ['Email Address', email],
    ...(phone ? ([['Phone Number', phone]] as Array<[string, string]>) : []),
    ['Nature of Enquiry', enquiryType],
    ['Subject', subject],
    ['Submitted', timestamp],
  ]

  const html = `
    <div style="font-family: Arial, sans-serif; color: #29232D; line-height: 1.6;">
      <h2 style="color: #6C2C91; margin: 0 0 16px;">New website enquiry</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 8px 12px; background: #F1E8F4; font-weight: bold; width: 180px; vertical-align: top;">${escapeHtml(
              label,
            )}</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #F1E8F4;">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join('')}
      </table>
      <h3 style="color: #6C2C91; margin: 24px 0 8px;">Message</h3>
      <p style="white-space: pre-wrap; padding: 12px; background: #FAF8FC; border-radius: 8px;">${escapeHtml(
        message,
      )}</p>
    </div>`

  const text =
    rows.map(([label, value]) => `${label}: ${value}`).join('\n') + `\n\nMessage:\n${message}`

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Website Enquiry: ${subject}`,
      html,
      text,
    })

    if (error) {
      console.error('Resend rejected the enquiry:', error.name)
      return res.status(502).json({ error: 'Email could not be sent.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Unexpected error sending enquiry:', err instanceof Error ? err.message : err)
    return res.status(500).json({ error: 'Email could not be sent.' })
  }
}

function safeParse(raw: string): Record<string, unknown> | null {
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}
