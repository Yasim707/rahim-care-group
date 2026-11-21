import { APPROACH, APPROACH_EMPHASIS, APPROACH_HIGHLIGHTS } from '../../data/whatWeDo'
import Container from '../ui/Container'
import Emphasis from '../ui/Emphasis'
import Parallax from '../ui/Parallax'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Approach() {
  return (
    <section aria-labelledby="approach-title" className="relative overflow-hidden bg-lilac py-20 lg:py-28">
      <Parallax speed={0.06} className="absolute -right-28 top-10">
        <div className="h-80 w-80 rounded-full border-[44px] border-primary/25" />
      </Parallax>
      <Container className="relative">
        <Reveal>
          <SectionHeading id="approach-title" eyebrow="How We Care" title="Our Approach" />
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          {/* Main panel */}
          <Reveal direction="right" delay={100}>
            <div className="relative rounded-2xl bg-white p-8 shadow-[0_30px_60px_-36px_rgba(108,44,145,0.45)] sm:p-12">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 -z-10 h-2/3 w-2/3 rounded-2xl bg-primary/40"
              />
              <span
                aria-hidden="true"
                className="absolute left-0 top-10 h-16 w-1.5 rounded-r-full bg-secondary"
              />
              <p className="text-lg leading-[1.9] text-foreground/85 sm:text-xl sm:leading-[1.95]">
                <Emphasis text={APPROACH} phrases={APPROACH_EMPHASIS} />
              </p>
            </div>
          </Reveal>

          {/* Layered highlight cards with a connecting line */}
          <ol className="relative space-y-4">
            <span
              aria-hidden="true"
              className="absolute bottom-6 left-[1.75rem] top-6 w-px bg-gradient-to-b from-secondary/50 via-primary to-transparent"
            />
            {APPROACH_HIGHLIGHTS.map(({ title, icon: Icon }, i) => (
              <Reveal as="li" key={title} delay={150 + i * 100} direction="left">
                <div
                  className="group relative flex items-center gap-5 rounded-xl border border-primary/30 bg-white p-4 pr-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_22px_36px_-24px_rgba(108,44,145,0.4)]"
                  style={{ marginLeft: `${(i % 2) * 14}px` }}
                >
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lilac text-secondary ring-4 ring-white transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="font-semibold text-foreground">{title}</span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
