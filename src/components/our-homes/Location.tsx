import { MapPin } from 'lucide-react'
import { LOCATION_TEXT, homeImages } from '../../data/ourHomes'
import Container from '../ui/Container'
import Parallax from '../ui/Parallax'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Location() {
  return (
    <section aria-labelledby="location-title" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <Parallax speed={0.06} className="absolute -left-24 top-16 hidden lg:block">
        <div className="h-72 w-72 rounded-full bg-lilac" />
      </Parallax>
      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="right">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -left-5 h-3/4 w-3/4 rounded-2xl bg-lilac sm:-bottom-6 sm:-left-6"
            />
            <img
              src={homeImages.location.src}
              alt={homeImages.location.alt}
              width={986}
              height={729}
              loading="lazy"
              decoding="async"
              className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_24px_50px_-28px_rgba(41,35,45,0.4)]"
            />
            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-secondary shadow-sm backdrop-blur-sm">
              <MapPin size={16} aria-hidden="true" />
              Buckinghamshire, UK
            </span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading id="location-title" eyebrow="Our Location" title="Set in the Buckinghamshire Countryside" />
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-lg leading-[1.85] text-muted">{LOCATION_TEXT}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
