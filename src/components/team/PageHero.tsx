import { HeartHandshake, ShieldCheck, Users } from 'lucide-react'
import { ROUTES } from '../../data/routes'
import Breadcrumb from '../ui/Breadcrumb'
import Container from '../ui/Container'
import Parallax from '../ui/Parallax'
import Reveal from '../ui/Reveal'

const PILLARS = [
  { label: 'Leadership', icon: Users },
  { label: 'Responsibility', icon: ShieldCheck },
  { label: 'Compassion', icon: HeartHandshake },
]

export default function PageHero() {
  return (
    <section aria-labelledby="team-title" className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="absolute -right-32 top-0 hidden h-full w-[46%] bg-lilac lg:block"
      />
      <Container className="relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          <Reveal>
            <Breadcrumb items={[{ label: 'Home', to: ROUTES.home.path }, { label: 'Meet the Team' }]} />
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              Meet the Team
            </p>
          </Reveal>
          <Reveal delay={160}>
            <h1
              id="team-title"
              className="mt-5 text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-secondary sm:text-6xl lg:text-[3.75rem]"
            >
              The People Behind the Care.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted sm:text-xl">
              Meet the dedicated leadership and care team committed to providing safe, supportive
              and person-centred care for children and young people.
            </p>
          </Reveal>
        </div>

        <Reveal direction="left" delay={150}>
          <div className="relative mx-auto aspect-square w-full max-w-sm lg:max-w-md">
            <Parallax speed={0.07} className="absolute -left-3 -top-3 h-3/5 w-3/5">
              <div className="h-full w-full rounded-2xl bg-primary/50" />
            </Parallax>
            <div className="absolute inset-4 overflow-hidden rounded-full bg-gradient-to-br from-secondary to-[#4a1d66] shadow-[0_30px_60px_-30px_rgba(41,35,45,0.5)] sm:inset-6">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border-[30px] border-white/10" />
              <div className="absolute -bottom-14 -left-8 h-56 w-56 rounded-full bg-white/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Users className="h-20 w-20 text-white sm:h-24 sm:w-24" strokeWidth={1.1} aria-hidden="true" />
              </div>
            </div>
            {PILLARS.map(({ label, icon: Icon }, i) => (
              <Parallax
                key={label}
                speed={0.05 + i * 0.02}
                className={`absolute ${['top-2 -right-1 sm:-right-4', 'bottom-16 -left-2 sm:-left-6', '-bottom-2 right-10'][i]}`}
              >
                <div
                  className="float-soft flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-secondary shadow-lg"
                  style={{ animationDelay: `${-i * 2.5}s` }}
                >
                  <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                  {label}
                </div>
              </Parallax>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
