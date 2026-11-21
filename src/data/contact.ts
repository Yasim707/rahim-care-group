/** Shared contact-form constants used by the UI and the serverless endpoint. */

export const CONTACT_EMAIL = 'admin@rahimcaregroup.com'

export const ENQUIRY_TYPES = [
  'General Enquiry',
  'Residential Care Enquiry',
  'Information About Our Homes',
  'Partnership or Professional Enquiry',
  'Other',
] as const

export type EnquiryType = (typeof ENQUIRY_TYPES)[number]

/** Maximum accepted lengths, enforced on both the client and the server. */
export const FIELD_LIMITS = {
  name: 100,
  email: 254,
  phone: 30,
  subject: 150,
  message: 4000,
} as const

export interface ContactPayload {
  name: string
  email: string
  phone?: string
  enquiryType: string
  subject: string
  message: string
  /** Honeypot: must be empty for a genuine submission. */
  company?: string
}
