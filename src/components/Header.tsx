import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '../assets/rahim logo.png'
import { NAV_LINKS } from '../data/navigation'
import { ROUTES } from '../data/routes'
import Button from './ui/Button'
import Container from './ui/Container'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `relative py-2 text-[0.92rem] font-medium transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-secondary after:transition-transform after:duration-300 hover:text-secondary ${
    isActive
      ? 'text-secondary after:scale-x-100'
      : 'text-foreground after:scale-x-0 hover:after:scale-x-100'
  }`

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu on navigation and scroll to top
  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  // Lock body scroll and close on Escape while the menu is open
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-primary/30 bg-white shadow-[0_4px_20px_-12px_rgba(41,35,45,0.18)]">
      <Container className="flex h-[5.25rem] items-center justify-between lg:h-28">
        <Link to={ROUTES.home.path} aria-label="Rahim Care Group, home" className="shrink-0">
          <img
            src={logo}
            alt="Rahim Care Group logo"
            width={405}
            height={405}
            className="h-[4.5rem] w-auto lg:h-[6.25rem]"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex xl:gap-9">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.path === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <Button to={ROUTES.contact.path} className="ml-2 !px-6 !py-3">
            Contact Us
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-secondary transition-colors hover:bg-lilac lg:hidden"
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-5.25rem)] overflow-y-auto border-t border-primary/30 bg-white shadow-xl lg:hidden"
      >
        <nav aria-label="Mobile navigation" className="px-5 pb-8 pt-4 sm:px-8">
          <ul className="divide-y divide-primary/30">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `block py-4 text-lg font-semibold ${isActive ? 'text-secondary' : 'text-foreground'}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to={ROUTES.contact.path} className="mt-6 w-full">
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  )
}
