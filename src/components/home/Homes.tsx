import { HOME_GALLERY, HOME_INTRO } from '../../data/home'
import { ROUTES } from '../../data/routes'
import Button from '../ui/Button'
import Container from '../ui/Container'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function Homes() {
  // Photos are the client images from the Our Homes page; the first is `rahim home pic (2)`.
  const [main, ...rest] = HOME_GALLERY
  return (
    <section aria-labelledby="homes-title" className="overflow-hidden bg-background py-24 lg:py-32">
      <Container className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading id="homes-title" eyebrow="Our Homes" title="A Place to Feel at Home" align="center" />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-16">
            <img
              src={main.src}
              alt={main.alt}
              loading="lazy"
              decoding="async"
              className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover shadow-[0_24px_50px_-28px_rgba(41,35,45,0.4)]"
            />
            {rest.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 max-w-2xl text-center lg:mt-16">
            <p className="text-lg leading-[1.85] text-muted">{HOME_INTRO}</p>
            <div className="mt-9 flex justify-center">
              <Button to={ROUTES.ourHomes.path}>Explore Our Homes</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
