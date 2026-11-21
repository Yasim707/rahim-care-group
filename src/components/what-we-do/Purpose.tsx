import { PURPOSE, PURPOSE_AREAS, PURPOSE_EMPHASIS } from '../../data/whatWeDo'
import Container from '../ui/Container'
import Emphasis from '../ui/Emphasis'
import Parallax from '../ui/Parallax'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Purpose() {
  return (
    <section aria-labelledby="purpose-title" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <Parallax speed={0.07} className="absolute -left-24 top-24 hidden lg:block">
        <div className="h-72 w-72 rounded-full bg-lilac" />
      </Parallax>
      <Container className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal direction="right" className="lg:sticky lg:top-36 lg:self-start">
          <SectionHeading id="purpose-title" eyebrow="At Rahim Care Group" title="Our Purpose" />
          <div
            aria-hidden="true"
            className="mt-8 h-1.5 w-24 rounded-full bg-gradient-to-r from-secondary to-primary"
          />
        </Reveal>

        <div>
          <Reveal delay={100}>
            <p className="rounded-2xl border border-primary/30 bg-background p-8 text-lg leading-[1.85] text-foreground/85 shadow-[0_24px_50px_-34px_rgba(108,44,145,0.35)] sm:p-10 sm:text-xl sm:leading-[1.9]">
              <Emphasis text={PURPOSE} phrases={PURPOSE_EMPHASIS} />
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              Areas of support named above
            </p>
          </Reveal>
          <ul className="mt-4 flex flex-wrap gap-3">
            {PURPOSE_AREAS.map((area, i) => (
              <Reveal as="li" key={area} delay={260 + i * 60} direction="up">
                <span className="inline-block rounded-full border border-secondary/20 bg-lilac px-5 py-2.5 text-sm font-semibold text-secondary transition-colors duration-300 hover:bg-secondary hover:text-white">
                  {area}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
