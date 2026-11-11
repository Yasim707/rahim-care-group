import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface TextLinkProps {
  to: string
  children: ReactNode
  className?: string
}

export default function TextLink({ to, children, className = '' }: TextLinkProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 text-[0.95rem] font-semibold text-secondary ${className}`}
    >
      <span className="border-b border-secondary/30 pb-0.5 transition-colors group-hover:border-secondary">
        {children}
      </span>
      <ArrowRight
        size={16}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  )
}
