import { images } from '../../data/home'
import { ROUTES } from '../../data/routes'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import TextLink from '../ui/TextLink'

export default function Introduction() {
  return (
    <section aria-labelledby="intro-title" className="bg-white py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -left-5 h-3/4 w-3/4 rounded-2xl bg-lilac sm:-bottom-6 sm:-left-6"
          />
          <img
            src={images.intro.src}
            alt={images.intro.alt}
            width={1100}
            height={825}
            loading="lazy"
            decoding="async"
            className="relative aspect-[4/3.4] w-full rounded-2xl object-cover shadow-[0_24px_50px_-28px_rgba(41,35,45,0.4)]"
          />
        </div>

        <div className="order-1 lg:order-2 lg:pl-4">
          <SectionHeading
            id="intro-title"
            eyebrow="Who We Are"
            title="Supporting People. Enriching Lives."
          />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Rahim Care Group is an organisation focused on providing thoughtful, person-centred
              support. We believe that everyone deserves to be listened to, respected and
              encouraged to live life in the way that matters most to them.
            </p>
            <p>
              Our approach is built on warmth, understanding and genuine partnership, helping
              people feel at home and confident about the future.
            </p>
          </div>
          <TextLink to={ROUTES.whatWeDo.path} className="mt-8">
            Learn More
          </TextLink>
        </div>
      </Container>
    </section>
  )
}
