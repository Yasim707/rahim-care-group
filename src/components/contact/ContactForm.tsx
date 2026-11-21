import { useState, type FormEvent } from 'react'
import { Loader2, Send } from 'lucide-react'
import { ENQUIRY_TYPES, FIELD_LIMITS, type ContactPayload } from '../../data/contact'

type Errors = Partial<Record<keyof ContactPayload, string>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const EMPTY: ContactPayload = {
  name: '',
  email: '',
  phone: '',
  enquiryType: '',
  subject: '',
  message: '',
  company: '',
}

function validate(values: ContactPayload): Errors {
  const errors: Errors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const subject = values.subject.trim()
  const message = values.message.trim()

  if (!name) errors.name = 'Please enter your name.'
  else if (name.length > FIELD_LIMITS.name) errors.name = 'Name is too long.'
  if (!email) errors.email = 'Please enter your email address.'
  else if (email.length > FIELD_LIMITS.email || !EMAIL_RE.test(email))
    errors.email = 'Please enter a valid email address.'
  if (values.phone && values.phone.trim().length > FIELD_LIMITS.phone)
    errors.phone = 'Phone number is too long.'
  if (!values.enquiryType) errors.enquiryType = 'Please select the nature of your enquiry.'
  if (!subject) errors.subject = 'Please enter a subject.'
  else if (subject.length > FIELD_LIMITS.subject) errors.subject = 'Subject is too long.'
  if (!message) errors.message = 'Please enter your message.'
  else if (message.length > FIELD_LIMITS.message) errors.message = 'Message is too long.'
  return errors
}

const fieldBase =
  'w-full rounded-xl border bg-white px-4 py-3 text-foreground transition-colors placeholder:text-muted/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30'

export default function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const update =
    (field: keyof ContactPayload) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }))
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
    }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (status === 'submitting') return

    const found = validate(values)
    if (Object.keys(found).length > 0) {
      setErrors(found)
      return
    }
    setErrors({})
    setStatus('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone?.trim() || undefined,
          enquiryType: values.enquiryType,
          subject: values.subject.trim(),
          message: values.message.trim(),
          company: values.company, // honeypot
        }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { errors?: Errors } | null
        if (res.status === 400 && data?.errors) setErrors(data.errors)
        setStatus('error')
        return
      }

      setStatus('success')
      setValues(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        className="rounded-2xl border border-primary/30 bg-lilac p-8 text-center sm:p-10"
      >
        <h3 className="text-2xl font-bold text-secondary">
          Thank you for contacting Rahim Care Group.
        </h3>
        <p className="mt-4 leading-relaxed text-foreground/80">
          Your enquiry has been submitted successfully. We appreciate you getting in touch.
        </p>
      </div>
    )
  }

  const submitting = status === 'submitting'

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot: hidden from users and assistive tech. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={update('company')}
        />
      </div>

      <Field id="name" label="Full Name" required error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={FIELD_LIMITS.name}
          required
          value={values.name}
          onChange={update('name')}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`${fieldBase} ${errors.name ? 'border-red-400' : 'border-primary/40'}`}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email Address" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={FIELD_LIMITS.email}
            required
            value={values.email}
            onChange={update('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`${fieldBase} ${errors.email ? 'border-red-400' : 'border-primary/40'}`}
          />
        </Field>

        <Field id="phone" label="Phone Number" error={errors.phone} optional>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={FIELD_LIMITS.phone}
            value={values.phone}
            onChange={update('phone')}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`${fieldBase} ${errors.phone ? 'border-red-400' : 'border-primary/40'}`}
          />
        </Field>
      </div>

      <Field id="enquiryType" label="Nature of Enquiry" required error={errors.enquiryType}>
        <select
          id="enquiryType"
          name="enquiryType"
          required
          value={values.enquiryType}
          onChange={update('enquiryType')}
          aria-invalid={!!errors.enquiryType}
          aria-describedby={errors.enquiryType ? 'enquiryType-error' : undefined}
          className={`${fieldBase} ${errors.enquiryType ? 'border-red-400' : 'border-primary/40'} ${
            values.enquiryType ? 'text-foreground' : 'text-muted/60'
          }`}
        >
          <option value="" disabled>
            Select the nature of your enquiry
          </option>
          {ENQUIRY_TYPES.map((type) => (
            <option key={type} value={type} className="text-foreground">
              {type}
            </option>
          ))}
        </select>
      </Field>

      <Field id="subject" label="Subject" required error={errors.subject}>
        <input
          id="subject"
          name="subject"
          type="text"
          maxLength={FIELD_LIMITS.subject}
          required
          value={values.subject}
          onChange={update('subject')}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          className={`${fieldBase} ${errors.subject ? 'border-red-400' : 'border-primary/40'}`}
        />
      </Field>

      <Field id="message" label="Your Message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={FIELD_LIMITS.message}
          required
          value={values.message}
          onChange={update('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${fieldBase} resize-y ${errors.message ? 'border-red-400' : 'border-primary/40'}`}
        />
      </Field>

      <p className="text-sm leading-relaxed text-muted">
        Please do not include confidential or sensitive personal information in your message.
      </p>

      {status === 'error' && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          We&rsquo;re sorry, but your enquiry could not be submitted right now. Please try again or
          contact us directly by email.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-[0.95rem] font-semibold text-white shadow-[0_8px_24px_-10px_rgba(108,44,145,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5a2279] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send size={18} aria-hidden="true" />
            Send Enquiry
          </>
        )}
      </button>

      <p className="text-sm leading-relaxed text-muted">
        By submitting this form, you agree that Rahim Care Group may use the information provided to
        respond to your enquiry.
      </p>
    </form>
  )
}

interface FieldProps {
  id: string
  label: string
  required?: boolean
  optional?: boolean
  error?: string
  children: React.ReactNode
}

function Field({ id, label, required, optional, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-foreground">
        {label}
        {required && <span className="text-secondary"> *</span>}
        {optional && <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
