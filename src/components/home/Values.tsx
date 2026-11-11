import { VALUES } from '../../data/home'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function Values() {
  return (
    <section aria-labelledby="values-title" className="bg-lilac py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="values-title"
          align="center"
          eyebrow="Our Values"
          title="What Matters to Us"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="group rounded-xl border border-primary/30 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_24px_40px_-24px_rgba(108,44,145,0.35)]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lilac text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
