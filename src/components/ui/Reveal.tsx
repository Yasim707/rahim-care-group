import type { ElementType, ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface RevealProps {
  children: ReactNode
  /** Stagger delay in milliseconds, applied on entry only. */
  delay?: number
  direction?: Direction
  as?: ElementType
  className?: string
}

/**
 * Fades and slides content into view, and back out again when it leaves
 * the viewport, so the effect repeats in both scroll directions.
 * Motion is disabled by the prefers-reduced-motion rule in index.css.
 */
export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  as: Tag = 'div',
  className = '',
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <Tag
      ref={ref}
      data-reveal={direction}
      data-visible={inView}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  )
}
