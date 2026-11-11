import { ROUTES } from './routes'

/** Primary navigation links (Contact Us is rendered as a button). */
export const NAV_LINKS = [
  ROUTES.home,
  ROUTES.whatWeDo,
  ROUTES.ourHomes,
  ROUTES.safeguarding,
  ROUTES.careers,
  ROUTES.ourStaff,
] as const

export const FOOTER_QUICK_LINKS = [
  ROUTES.home,
  ROUTES.whatWeDo,
  ROUTES.ourHomes,
  ROUTES.careers,
  ROUTES.safeguarding,
  ROUTES.contact,
] as const

export const FOOTER_LEGAL_LINKS = [ROUTES.privacy, ROUTES.cookies, ROUTES.terms] as const
