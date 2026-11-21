import { ROUTES } from './routes'

/** Primary navigation links (Contact Us is rendered as a button). */
export const NAV_LINKS = [
  ROUTES.home,
  ROUTES.whatWeDo,
  ROUTES.ourHomes,
  ROUTES.meetTheTeam,
] as const

export const FOOTER_QUICK_LINKS = [
  ROUTES.home,
  ROUTES.whatWeDo,
  ROUTES.ourHomes,
  ROUTES.meetTheTeam,
  ROUTES.contact,
] as const

export const FOOTER_LEGAL_LINKS = [ROUTES.privacy, ROUTES.cookies, ROUTES.terms] as const
