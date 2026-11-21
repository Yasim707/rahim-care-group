import { COLLABORATION, COLLAB_EMPHASIS, COLLAB_OUTCOMES, PARTNERS } from '../../data/whatWeDo'
import { Layers } from 'lucide-react'
import Container from '../ui/Container'
import Emphasis from '../ui/Emphasis'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Collaboration() {
  return (
    <section aria-labelledby="collab-title" className="bg-white py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="collab-title"
            align="center"
            eyebrow="Collaboration"
            title="Working Together"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-[1.9] text-muted sm:text-xl sm:leading-[1.9]">
            <Emphasis text={COLLABORATION} phrases={COLLAB_EMPHASIS} />
          </p>
        </Reveal>

        {/* Flow composition: four groups converge into one shared outcome */}
        <div className="relative mt-16">
          <span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[calc(100%-7.5rem)] hidden h-px bg-secondary/30 lg:block"
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNERS.map(({ title, icon: Icon }, i) => (
              <Reveal as="li" key={title} delay={150 + i * 110}>
                <div className="group relative flex h-full flex-col items-center rounded-xl border border-primary/30 bg-background p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_26px_40px_-26px_rgba(108,44,145,0.4)]">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-lilac text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                    <Icon size={28} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-6 left-1/2 hidden h-6 w-px bg-secondary/30 lg:block"
                  />
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={450} className="mt-6 lg:mt-12">
            <div className="relative overflow-hidden rounded-2xl bg-secondary px-6 py-10 text-center sm:px-12">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-44 w-44 rounded-full border-[26px] border-white/10"
              />
              <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                <Layers size={22} aria-hidden="true" />
              </span>
              <h3 className="relative mt-4 text-xl font-bold text-white sm:text-2xl">
                Consistent, holistic support
              </h3>
              <ul className="relative mt-6 flex flex-wrap justify-center gap-3">
                {COLLAB_OUTCOMES.map((o) => (
                  <li
                    key={o}
                    className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
