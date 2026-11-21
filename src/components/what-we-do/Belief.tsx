import { BELIEF_CLOSE, BELIEF_EMPHASIS, BELIEF_LEAD, BELIEF_THEMES } from '../../data/whatWeDo'
import Container from '../ui/Container'
import Emphasis from '../ui/Emphasis'
import Parallax from '../ui/Parallax'
import Reveal from '../ui/Reveal'

export default function Belief() {
  return (
    <section
      aria-labelledby="belief-title"
      className="relative overflow-hidden bg-gradient-to-br from-[#4a1d66] via-[#3d1754] to-[#2f1042] py-24 text-white lg:py-32"
    >
      <Parallax speed={0.09} className="absolute -left-32 -top-32">
        <div className="h-96 w-96 rounded-full border-[56px] border-white/[0.07]" />
      </Parallax>
      <Parallax speed={0.05} className="absolute -bottom-40 -right-24">
        <div className="h-[28rem] w-[28rem] rotate-12 rounded-3xl bg-white/[0.05]" />
      </Parallax>
      <Parallax speed={0.12} className="absolute right-[14%] top-24 hidden lg:block">
        <div className="h-28 w-28 rounded-full bg-primary/30" />
      </Parallax>

      <Container className="relative">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Our Belief
          </p>
          <h2 id="belief-title" className="sr-only">
            What we believe
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-8 max-w-5xl">
            <span
              aria-hidden="true"
              className="absolute -left-2 -top-16 select-none font-heading text-[9rem] font-extrabold leading-none text-primary/30 sm:-left-8 sm:text-[12rem]"
            >
              &ldquo;
            </span>
            <p className="relative font-heading text-[1.75rem] font-bold leading-[1.3] tracking-tight sm:text-4xl lg:text-[2.9rem] lg:leading-[1.25]">
              {BELIEF_LEAD}
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 max-w-3xl border-l-2 border-primary/60 pl-6 sm:pl-8">
            <p className="text-lg leading-[1.9] text-white/85 sm:text-xl sm:leading-[1.9]">
              <Emphasis text={BELIEF_CLOSE} phrases={BELIEF_EMPHASIS} className="font-semibold text-white" />
            </p>
          </div>
        </Reveal>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BELIEF_THEMES.map((theme, i) => (
            <Reveal as="li" key={theme} delay={250 + i * 110}>
              <div className="group rounded-xl border border-white/20 bg-white/[0.07] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/15">
                <span className="font-heading text-sm font-bold tracking-[0.2em] text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 font-heading text-2xl font-bold">{theme}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
