import { EVERYDAY } from '../../data/whatWeDo'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function EverydayLife() {
  return (
    <section aria-labelledby="everyday-title" className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="everyday-title"
          eyebrow="Everyday Life and Support"
          title="Creating Positive Everyday Experiences"
          description="A positive residential environment shapes how children feel every day. The areas below describe what matters in general terms, and will be updated with confirmed details."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {EVERYDAY.map(({ title, description, icon: Icon, image, alt }) => (
            <article
              key={title}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-primary/30 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_44px_-26px_rgba(108,44,145,0.4)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image}
                  alt={alt}
                  width={900}
                  height={675}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-secondary shadow-md">
                  <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                </span>
              </div>
              <div className="flex-1 p-6">
                <h3 className="text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
