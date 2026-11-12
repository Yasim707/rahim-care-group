import { ShieldCheck } from 'lucide-react'
import { ROUTES } from '../../data/routes'
import Button from '../ui/Button'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function Safeguarding() {
  return (
    <section aria-labelledby="safeguarding-title" className="relative overflow-hidden bg-lilac py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-primary/30"
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
        <div
          aria-hidden="true"
          className="flex h-40 w-40 items-center justify-center rounded-full bg-white text-secondary shadow-[0_24px_44px_-24px_rgba(108,44,145,0.45)] lg:h-60 lg:w-60"
        >
          <ShieldCheck className="h-16 w-16 lg:h-24 lg:w-24" strokeWidth={1.25} />
        </div>
        <div>
          <SectionHeading
            id="safeguarding-title"
            eyebrow="Safeguarding"
            title="Safety, Dignity and Wellbeing"
          />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            Every child and young person has the right to feel safe. Protecting their welfare and
            wellbeing is at the heart of children&rsquo;s residential care, and it shapes how we
            think about our homes, our people and the support we offer every day.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {['Children\u2019s safety', 'Protection and welfare', 'Wellbeing'].map((item) => (
              <li
                key={item}
                className="rounded-full border border-secondary/20 bg-white px-5 py-2 text-sm font-semibold text-secondary"
              >
                {item}
              </li>
            ))}
          </ul>
          <Button to={ROUTES.safeguarding.path} className="mt-9">
            Learn About Safeguarding
          </Button>
        </div>
      </Container>
    </section>
  )
}
