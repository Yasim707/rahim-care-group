import { ROUTES } from '../../data/routes'
import { wwdImages } from '../../data/whatWeDo'
import Breadcrumb from '../ui/Breadcrumb'
import Container from '../ui/Container'

export default function PageHero() {
  return (
    <section aria-labelledby="wwd-title" className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="absolute -right-32 top-0 hidden h-full w-[48%] bg-lilac lg:block"
      />
      <Container className="relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
        <div className="max-w-xl">
          <Breadcrumb items={[{ label: 'Home', to: ROUTES.home.path }, { label: 'What We Do' }]} />
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
            What We Do
          </p>
          <h1
            id="wwd-title"
            className="mt-5 text-[2.3rem] font-extrabold leading-[1.1] tracking-tight text-secondary sm:text-5xl lg:text-[3.25rem]"
          >
            Supporting Children to Build Brighter Futures.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted sm:text-xl">
            At Rahim Care Group, we believe every child deserves a safe, welcoming environment
            where they feel valued, listened to and supported to develop.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-2/3 w-2/3 rounded-2xl bg-primary/50 sm:-left-6 sm:-top-6"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-3 h-24 w-24 rounded-full border-[12px] border-primary/60 sm:-bottom-7 sm:-right-5 sm:h-32 sm:w-32"
          />
          <img
            src={wwdImages.hero.src}
            alt={wwdImages.hero.alt}
            width={1100}
            height={733}
            fetchPriority="high"
            decoding="async"
            className="relative aspect-[4/3.2] w-full rounded-2xl object-cover shadow-[0_30px_60px_-30px_rgba(41,35,45,0.45)]"
          />
        </div>
      </Container>
    </section>
  )
}
