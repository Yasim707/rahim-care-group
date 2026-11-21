import { useEffect, useRef, type ReactNode } from 'react'

interface ParallaxProps {
  children?: ReactNode
  /** Positioning classes for the outer, static wrapper. */
  className?: string
  /** Fraction of the scroll distance to drift. Keep small (0.03 to 0.12). */
  speed?: number
}

/**
 * Gives decorative elements a slight drift as they move through the viewport.
 * Purely decorative: hidden from assistive technology and disabled for users
 * who prefer reduced motion.
 */
export default function Parallax({ children, className = '', speed = 0.06 }: ParallaxProps) {
  const outer = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = outer.current
    const target = inner.current
    if (!el || !target) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2
      const y = Math.max(-48, Math.min(48, -offset * speed))
      target.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [speed])

  return (
    <div ref={outer} aria-hidden="true" className={`pointer-events-none ${className}`}>
      <div ref={inner} className="will-change-transform">
        {children}
      </div>
    </div>
  )
}
