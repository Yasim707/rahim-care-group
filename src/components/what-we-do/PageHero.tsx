import { Heart, Home, ShieldCheck, Sparkles } from 'lucide-react'
import { ROUTES } from '../../data/routes'
import { HERO_WORDS } from '../../data/whatWeDo'
import Breadcrumb from '../ui/Breadcrumb'
import Container from '../ui/Container'
import Parallax from '../ui/Parallax'
import Reveal from '../ui/Reveal'

export default function PageHero() {
  return (
    <section aria-labelledby="wwd-title" className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="absolute -right-32 top-0 hidden h-full w-[48%] bg-lilac lg:block"
      />
      <Container className="relative grid items-center gap-14 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          <Reveal>
            <Breadcrumb
              items={[{ label: 'Home', to: ROUTES.home.path }, { label: 'What We Do' }]}
            />
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              What We Do
            </p>
          </Reveal>
          <Reveal delay={160}>
            <h1
              id="wwd-title"
              className="mt-5 text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-secondary sm:text-6xl lg:text-[3.75rem]"
            >
              Every Child Deserves a Place to Belong.
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <ul className="mt-9 flex flex-wrap gap-3">
              {HERO_WORDS.map((word) => (
                <li
                  key={word}
                  className="rounded-full border border-secondary/20 bg-white px-5 py-2 text-sm font-semibold text-secondary"
                >
                  {word}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/*
          Decorative composition. Intentionally contains no photography so that
          approved client imagery can be added here later.
        */}
        <Reveal direction="left" delay={150}>
          <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
            <Parallax speed={0.08} className="absolute -left-3 -top-3 h-3/5 w-3/5">
              <div className="h-full w-full rounded-2xl bg-primary/50" />
            </Parallax>
            <div className="absolute inset-4 overflow-hidden rounded-2xl bg-gradient-to-br from-secondary to-[#4a1d66] shadow-[0_30px_60px_-30px_rgba(41,35,45,0.5)] sm:inset-6">
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[36px] border-white/10" />
              <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-white/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25 sm:h-44 sm:w-44">
                  <Home className="h-16 w-16 text-white sm:h-20 sm:w-20" strokeWidth={1.25} aria-hidden="true" />
                </div>
              </div>
            </div>
            <Parallax speed={0.05} className="absolute -right-2 top-[14%] sm:-right-5">
              <div className="float-soft flex h-14 w-14 items-center justify-center rounded-full bg-white text-secondary shadow-lg sm:h-16 sm:w-16">
                <Heart size={26} strokeWidth={1.75} aria-hidden="true" />
              </div>
            </Parallax>
            <Parallax speed={0.1} className="absolute -left-2 bottom-[18%] sm:-left-5">
              <div className="float-soft flex h-14 w-14 items-center justify-center rounded-full bg-white text-secondary shadow-lg [animation-delay:-3s] sm:h-16 sm:w-16">
                <ShieldCheck size={26} strokeWidth={1.75} aria-hidden="true" />
              </div>
            </Parallax>
            <Parallax speed={0.06} className="absolute -bottom-3 right-[12%]">
              <div className="float-soft flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg [animation-delay:-5s]">
                <Sparkles size={22} strokeWidth={1.75} aria-hidden="true" />
              </div>
            </Parallax>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
