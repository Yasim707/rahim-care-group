import { APPROACH } from '../../data/whatWeDo'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function Approach() {
  return (
    <section aria-labelledby="approach-title" className="bg-lilac py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="approach-title"
          align="center"
          eyebrow="Our Approach to Care"
          title="A Supportive Approach to Every Child"
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {APPROACH.map(({ title, description, icon: Icon }, i) => (
            <li
              key={title}
              className="group flex gap-6 rounded-xl border border-primary/30 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_24px_40px_-24px_rgba(108,44,145,0.35)] sm:p-10"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-lilac text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-primary">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1 text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
