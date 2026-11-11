import { ROUTES } from '../../data/routes'
import Button from '../ui/Button'
import Container from '../ui/Container'

export default function FinalCta() {
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
          Let&rsquo;s Start a Conversation
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
          Get in touch with Rahim Care Group to find out more.
        </p>
        <Button to={ROUTES.contact.path} variant="light" className="mt-9">
          Contact Us
        </Button>
      </Container>
    </section>
  )
}
