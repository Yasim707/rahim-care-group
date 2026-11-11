import { Link } from 'react-router-dom'
import logo from '../assets/rahim logo.png'
import { FOOTER_LEGAL_LINKS, FOOTER_QUICK_LINKS } from '../data/navigation'
import { ROUTES } from '../data/routes'
import Container from './ui/Container'

const linkClass = 'text-[0.95rem] text-muted transition-colors hover:text-secondary'

export default function Footer() {
  return (
    <footer className="border-t border-primary/40 bg-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:py-20">
        <div className="max-w-sm">
          <Link to={ROUTES.home.path} aria-label="Rahim Care Group, home">
            <img
              src={logo}
              alt="Rahim Care Group logo"
              width={405}
              height={405}
              loading="lazy"
              className="h-28 w-auto"
            />
          </Link>
          <p className="mt-5 leading-relaxed text-muted">
            Rahim Care Group is focused on thoughtful, person-centred support, creating welcoming
            environments where people feel valued and empowered.
          </p>
        </div>

        <nav aria-label="Footer quick links">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Legal</h2>
          <ul className="mt-5 space-y-3">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <div className="border-t border-primary/30 bg-lilac">
        <Container className="py-5 text-sm text-muted">
          © {new Date().getFullYear()} Rahim Care Group. All rights reserved.
        </Container>
      </div>
    </footer>
  )
}
