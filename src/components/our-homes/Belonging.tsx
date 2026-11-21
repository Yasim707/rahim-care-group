import { Heart, Home, Users } from 'lucide-react'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const POINTS = [
  {
    title: 'A welcoming home',
    description: 'Comfortable, homely surroundings that help children feel settled and secure.',
    icon: Home,
  },
  {
    title: 'Space to be themselves',
    description: 'Environments that respect each young person\u2019s individuality and personal space.',
    icon: Heart,
  },
  {
    title: 'A sense of belonging',
    description: 'Supportive surroundings where children can feel valued and part of something.',
    icon: Users,
  },
]

export default function Belonging() {
  return (
    <section aria-labelledby="belonging-title" className="bg-lilac py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="belonging-title"
            align="center"
            eyebrow="A Sense of Belonging"
            title="More Than a Place to Stay"
            description={
              'A welcoming, supportive environment matters in children\u2019s residential care. The way a home feels can help a young person feel safe, respected and at ease.'
            }
          />
        </Reveal>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {POINTS.map(({ title, description, icon: Icon }, i) => (
            <Reveal as="li" key={title} delay={i * 120} direction="up">
              <div className="group h-full rounded-xl border border-primary/30 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_24px_40px_-24px_rgba(108,44,145,0.35)]">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-lilac text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                  <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
