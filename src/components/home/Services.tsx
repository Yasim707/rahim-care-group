import { SUPPORT_AREAS } from '../../data/home'
import Container from '../ui/Container'
import Parallax from '../ui/Parallax'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Services() {
  return (
    <section aria-labelledby="services-title" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <Parallax speed={0.05} className="absolute -right-28 top-24 hidden lg:block">
        <div className="h-80 w-80 rounded-full border-[44px] border-primary/20" />
      </Parallax>
      <Container className="relative">
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow="What We Do"
            title="How We Support Children and Young People"
            description="A trauma-informed, child-centred approach that supports each young person\u2019s safety, wellbeing and development."
          />
        </Reveal>
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SUPPORT_AREAS.map(({ title, description, icon: Icon }, i) => (
            <Reveal as="li" key={title} delay={i * 120} direction="up" className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary/30 bg-background p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_26px_44px_-26px_rgba(108,44,145,0.4)] sm:p-9">
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-lilac/60 transition-transform duration-500 group-hover:scale-125"
                />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-lilac text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                  <Icon size={28} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span
                  aria-hidden="true"
                  className="relative mt-6 font-heading text-sm font-bold tracking-[0.2em] text-primary"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="relative mt-2 text-xl font-bold text-foreground">{title}</h3>
                <p className="relative mt-3 flex-1 leading-relaxed text-muted">{description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
