import { ROUTES } from '../../data/routes'
import { images } from '../../data/home'
import Button from '../ui/Button'
import Container from '../ui/Container'

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-background">
      {/* Decorative background shape */}
      <div
        aria-hidden="true"
        className="absolute -right-32 top-0 hidden h-full w-[48%] bg-lilac lg:block"
      />
      <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-28">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
            Rahim Care Group
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-secondary sm:text-6xl lg:text-[4.25rem]"
          >
            Care That Makes a Difference.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted sm:text-xl">
            Creating welcoming environments where people feel valued, supported and empowered to
            live fulfilling lives.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button to={ROUTES.contact.path}>Get in Touch</Button>
            <Button to={ROUTES.whatWeDo.path} variant="secondary">
              Discover What We Do
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-2/3 w-2/3 rounded-2xl bg-primary/50 sm:-left-6 sm:-top-6"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-3 h-28 w-28 rounded-full border-[14px] border-primary/60 sm:-bottom-7 sm:-right-5 sm:h-36 sm:w-36"
          />
          <img
            src={images.hero.src}
            alt={images.hero.alt}
            width={1400}
            height={1750}
            fetchPriority="high"
            decoding="async"
            className="relative aspect-[4/4.4] w-full rounded-2xl object-cover object-bottom shadow-[0_30px_60px_-30px_rgba(41,35,45,0.45)]"
          />
        </div>
      </Container>
    </section>
  )
}
