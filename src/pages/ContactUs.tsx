import { Mail } from 'lucide-react'
import ContactForm from '../components/contact/ContactForm'
import Breadcrumb from '../components/ui/Breadcrumb'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import { CONTACT_EMAIL } from '../data/contact'
import { ROUTES } from '../data/routes'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ContactUs() {
  usePageMeta(
    'Contact Us | Rahim Care Group',
    'Get in touch with Rahim Care Group. Send an enquiry through our contact form or email us directly.',
  )

  return (
    <>
      <section aria-labelledby="contact-title" className="relative overflow-hidden bg-background">
        <div
          aria-hidden="true"
          className="absolute -right-32 top-0 hidden h-full w-[42%] bg-lilac lg:block"
        />
        <Container className="relative py-12 sm:py-16 lg:py-20">
          <Reveal>
            <Breadcrumb items={[{ label: 'Home', to: ROUTES.home.path }, { label: 'Contact Us' }]} />
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              Contact Us
            </p>
          </Reveal>
          <Reveal delay={160}>
            <h1
              id="contact-title"
              className="mt-5 max-w-3xl text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-secondary sm:text-6xl lg:text-[3.75rem]"
            >
              Let&rsquo;s Start a Conversation.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Whether you would like to learn more about Rahim Care Group or have an enquiry,
              we&rsquo;d be happy to hear from you. Get in touch with our team using the details
              below or send us a message through our contact form.
            </p>
          </Reveal>
        </Container>
      </section>

      <section aria-label="Contact details and enquiry form" className="bg-white py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Contact information */}
          <Reveal direction="right">
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-10 top-6 -z-10 hidden h-48 w-48 rounded-full bg-lilac/70 lg:block"
              />
              <div className="relative">
                <h2 className="text-2xl font-bold text-secondary">Get in Touch</h2>
                <p className="mt-4 leading-relaxed text-muted">
                  We&rsquo;re happy to answer your questions. You can email us directly or use the
                  enquiry form, and a member of our team will receive your message.
                </p>

                <div className="mt-8 flex items-start gap-4 rounded-2xl border border-primary/30 bg-background p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lilac text-secondary">
                    <Mail size={22} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="mt-1 inline-block break-all text-lg font-medium text-foreground transition-colors hover:text-secondary"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Enquiry form */}
          <Reveal direction="left" delay={120}>
            <div className="rounded-2xl border border-primary/30 bg-background p-6 shadow-[0_24px_50px_-34px_rgba(108,44,145,0.35)] sm:p-9">
              <h2 className="text-2xl font-bold text-secondary">Send Us an Enquiry</h2>
              <p className="mt-3 leading-relaxed text-muted">
                Please complete the form below and our team will receive your enquiry.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
