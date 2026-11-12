import { ROUTES } from '../../data/routes'
import Button from '../ui/Button'
import Container from '../ui/Container'

interface FinalCtaProps {
  title?: string
  description?: string
  /** Defaults to a single "Contact Us" button. */
  secondaryAction?: { label: string; to: string }
}

export default function FinalCta({
  title = 'Let\u2019s Start a Conversation',
  description = 'Get in touch with Rahim Care Group to find out more.',
  secondaryAction,
}: FinalCtaProps) {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-secondary py-20 text-center lg:py-28">
      <div
        aria-hidden="true"
        className="absolute -left-20 -top-20 h-64 w-64 rounded-full border-[36px] border-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-16 h-72 w-72 rounded-2xl rotate-12 bg-white/5"
      />
      <Container className="relative">
        <h2
          id="cta-title"
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">{description}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button to={ROUTES.contact.path} variant="light">
            Contact Us
          </Button>
          {secondaryAction && (
            <Button to={secondaryAction.to} variant="outlineLight">
              {secondaryAction.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  )
}
