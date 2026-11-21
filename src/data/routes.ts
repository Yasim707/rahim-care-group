export interface AppRoute {
  path: string
  label: string
}

export const ROUTES = {
  home: { path: '/', label: 'Home' },
  whatWeDo: { path: '/what-we-do', label: 'What We Do' },
  ourHomes: { path: '/our-homes', label: 'Our Homes' },
  meetTheTeam: { path: '/meet-the-team', label: 'Meet the Team' },
  contact: { path: '/contact-us', label: 'Contact Us' },
  privacy: { path: '/privacy-policy', label: 'Privacy Policy' },
  cookies: { path: '/cookie-policy', label: 'Cookie Policy' },
  terms: { path: '/terms-and-conditions', label: 'Terms and Conditions' },
} as const satisfies Record<string, AppRoute>
