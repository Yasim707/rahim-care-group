import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../../data/home'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-background py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="testimonials-title"
          align="center"
          eyebrow="Kind Words"
          title="Voices From Our Community"
          description="Placeholder content for development only. Genuine testimonials will be added with permission."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-xl border border-dashed border-primary bg-white p-8"
            >
              <Quote size={32} strokeWidth={1.5} aria-hidden="true" className="text-primary" />
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-muted">
                <p>Testimonial placeholder. A genuine quotation will appear here once approved.</p>
              </blockquote>
              <figcaption className="mt-6 border-t border-primary/30 pt-4">
                <span className="block text-sm font-bold text-foreground">{t.label}</span>
                <span className="block text-sm text-muted">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
