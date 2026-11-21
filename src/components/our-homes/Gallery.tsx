import { GALLERY } from '../../data/ourHomes'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

// An editorial grid: the first image is wider, the rest fill the row beneath.
const spanClasses = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-6', 'lg:col-span-6']
const aspectClasses = ['aspect-[16/11]', 'aspect-[16/11]', 'aspect-[16/10]', 'aspect-[16/10]']

export default function Gallery() {
  return (
    <section aria-labelledby="gallery-title" className="bg-background py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="gallery-title"
            eyebrow="Explore Our Homes"
            title="A Look Inside"
            description="A few photographs of our homes. We let the spaces speak for themselves."
          />
        </Reveal>
        <ul className="mt-14 grid gap-6 lg:grid-cols-12">
          {GALLERY.map((item, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 120}
              direction="up"
              className={`${spanClasses[i]} group`}
            >
              <figure className="overflow-hidden rounded-2xl border border-primary/30 bg-white">
                <div className={`${aspectClasses[i]} overflow-hidden`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-6 py-5 text-[0.95rem] font-medium text-muted">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
