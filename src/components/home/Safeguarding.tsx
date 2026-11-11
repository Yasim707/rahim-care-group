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
            Everyone deserves to feel safe. Safe, supportive environments allow people to be
            themselves, speak openly and be treated with dignity every day. Safeguarding is a
            responsibility we take seriously.
          </p>
          <Button to={ROUTES.safeguarding.path} className="mt-9">
            Learn About Safeguarding
          </Button>
        </div>
      </Container>
    </section>
  )
}
