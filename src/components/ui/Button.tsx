import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'light' | 'outlineLight'

interface ButtonProps {
  to: string
  children: ReactNode
  variant?: Variant
  className?: string
  onClick?: () => void
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.95rem] font-semibold transition-all duration-300 focus-visible:outline-offset-4'

const variants: Record<Variant, string> = {
  primary:
    'bg-secondary text-white shadow-[0_8px_24px_-10px_rgba(108,44,145,0.6)] hover:-translate-y-0.5 hover:bg-[#5a2279]',
  secondary:
    'border border-secondary/30 bg-white text-secondary hover:border-secondary hover:bg-lilac',
  light: 'bg-white text-secondary hover:-translate-y-0.5 hover:bg-lilac',
  outlineLight: 'border border-white/40 text-white hover:border-white hover:bg-white/10',
}

export default function Button({
  to,
  children,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  return (
    <Link to={to} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}
