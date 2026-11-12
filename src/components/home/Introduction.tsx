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
            title="Supporting Children. Building Brighter Futures."
          />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Rahim Care Group is a provider of children&rsquo;s residential care, focused on
              creating supportive environments where children and young people are treated with
              dignity and supported as individuals.
            </p>
            <p>
              We want every child to feel listened to, encouraged to develop and confident about
              what lies ahead, with child-centred support that respects individual needs.
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
