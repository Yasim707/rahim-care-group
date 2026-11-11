import { images } from '../../data/home'
import { ROUTES } from '../../data/routes'
import Button from '../ui/Button'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function Careers() {
  return (
    <section aria-labelledby="careers-title" className="bg-white py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            id="careers-title"
            eyebrow="Careers"
            title="Make a Difference With Us"
          />
          <p className="mt-6 text-lg leading-relaxed text-muted">
            We are always interested in hearing from kind, thoughtful people who want to make a real
            difference in someone&rsquo;s life. Join a welcoming team and become part of Rahim Care
            Group.
          </p>
          <Button to={ROUTES.careers.path} className="mt-9">
            Explore Careers
          </Button>
        </div>
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 h-3/4 w-3/4 rounded-2xl bg-lilac sm:-bottom-6 sm:-right-6"
          />
          <img
            src={images.careers.src}
            alt={images.careers.alt}
            width={1100}
            height={825}
            loading="lazy"
            decoding="async"
            className="relative aspect-[4/3.2] w-full rounded-2xl object-cover shadow-[0_24px_50px_-28px_rgba(41,35,45,0.4)]"
          />
        </div>
      </Container>
    </section>
  )
}
