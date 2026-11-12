import { Ear, Scale, ShieldCheck, Smile } from 'lucide-react'
import { ROUTES } from '../../data/routes'
import Button from '../ui/Button'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const POINTS = [
  { label: 'Safeguarding', icon: ShieldCheck },
  { label: 'Listening to children', icon: Ear },
  { label: 'Respecting their rights', icon: Scale },
  { label: 'Promoting wellbeing', icon: Smile },
]

export default function SafetyMatters() {
  return (
    <section
      aria-labelledby="safety-title"
      className="relative overflow-hidden bg-lilac py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-primary/30"
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            id="safety-title"
            eyebrow="Safeguarding and Wellbeing"
            title="Every Child's Safety Matters"
          />
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Safeguarding is central to children&rsquo;s residential care. Children need to feel
            protected, to know that they will be listened to, and to be confident that their rights
            are respected. Promoting each child&rsquo;s wellbeing is part of everything we do.
          </p>
          <Button to={ROUTES.safeguarding.path} className="mt-9">
            Learn About Safeguarding
          </Button>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {POINTS.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="flex items-center gap-4 rounded-xl border border-primary/30 bg-white p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lilac text-secondary">
                <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="font-semibold text-foreground">{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
