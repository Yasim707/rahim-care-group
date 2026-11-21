import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import logo from '../assets/rahim logo.png'
import { FOOTER_QUICK_LINKS } from '../data/navigation'
import { CONTACT_EMAIL } from '../data/contact'
import { ROUTES } from '../data/routes'
import Container from './ui/Container'

const linkClass = 'text-[0.95rem] text-muted transition-colors hover:text-secondary'

export default function Footer() {
  return (
    <footer className="border-t border-primary/40 bg-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr] lg:py-20">
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
            Rahim Care Group provides children&rsquo;s residential care, creating welcoming,
            supportive homes where children and young people can feel safe, valued and supported.
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

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Contact</h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-5 inline-flex items-center gap-3 text-[0.95rem] text-muted transition-colors hover:text-secondary"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lilac text-secondary">
              <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="break-all">{CONTACT_EMAIL}</span>
          </a>
        </div>
      </Container>

      <div className="border-t border-primary/30 bg-lilac">
        <Container className="py-5 text-sm text-muted">
          © {new Date().getFullYear()} Rahim Care Group. All rights reserved.
        </Container>
      </div>
    </footer>
  )
}
