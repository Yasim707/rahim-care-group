import type { Leader } from '../../data/team'
import Container from '../ui/Container'
import Parallax from '../ui/Parallax'
import Reveal from '../ui/Reveal'

interface LeaderProfileProps {
  leader: Leader
  /** Image on the right (default) or left. */
  reversed?: boolean
  /** Alternate background for visual rhythm. */
  tinted?: boolean
  index: number
}

export default function LeaderProfile({ leader, reversed = false, tinted = false, index }: LeaderProfileProps) {
  const titleId = `leader-${index}`
  return (
    <section
      aria-labelledby={titleId}
      className={`relative overflow-hidden py-16 lg:py-24 ${tinted ? 'bg-lilac' : 'bg-white'}`}
    >
      <Parallax
        speed={0.05}
        className={`absolute top-10 hidden h-64 w-64 rounded-full ${
          tinted ? 'bg-white/50' : 'bg-lilac'
        } lg:block ${reversed ? '-right-24' : '-left-24'}`}
      />
      <Container
        className={`relative grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 ${
          reversed ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <Reveal direction={reversed ? 'left' : 'right'}>
          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className={`absolute h-3/4 w-3/4 rounded-2xl bg-primary/40 ${
                reversed ? '-bottom-5 -right-5' : '-bottom-5 -left-5'
              }`}
            />
            <img
              src={leader.image}
              alt={leader.alt}
              loading="lazy"
              decoding="async"
              style={{ objectPosition: leader.objectPosition }}
              className="relative aspect-[4/5] w-full rounded-2xl border border-primary/30 object-cover shadow-[0_28px_56px_-30px_rgba(41,35,45,0.45)]"
            />
          </div>
        </Reveal>

        <div>
          <Reveal delay={100}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              {leader.role}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <h2
              id={titleId}
              className="mt-4 text-2xl font-bold leading-tight tracking-tight text-secondary sm:text-3xl lg:text-[2.1rem]"
            >
              {leader.heading}
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-lg leading-[1.85] text-muted">{leader.content}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
