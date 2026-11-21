import { ROUTES } from '../../data/routes'
import { homeImages } from '../../data/ourHomes'
import Breadcrumb from '../ui/Breadcrumb'
import Container from '../ui/Container'
import Parallax from '../ui/Parallax'
import Reveal from '../ui/Reveal'

export default function PageHero() {
  return (
    <section aria-labelledby="homes-title" className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="absolute -right-32 top-0 hidden h-full w-[48%] bg-lilac lg:block"
      />
      <Container className="relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          <Reveal>
            <Breadcrumb items={[{ label: 'Home', to: ROUTES.home.path }, { label: 'Our Homes' }]} />
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              Our Homes
            </p>
          </Reveal>
          <Reveal delay={160}>
            <h1
              id="homes-title"
              className="mt-5 text-[2.3rem] font-extrabold leading-[1.12] tracking-tight text-secondary sm:text-5xl lg:text-[3.25rem]"
            >
              A Place to Feel Safe, Supported and at Home.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted sm:text-xl">
              We care about how our homes feel. Comfortable, welcoming spaces help children and
              young people settle in and feel that they belong.
            </p>
          </Reveal>
        </div>

        <Reveal direction="left" delay={150}>
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <Parallax speed={0.07} className="absolute -left-4 -top-4 h-2/3 w-2/3 sm:-left-6 sm:-top-6">
              <div className="h-full w-full rounded-2xl bg-primary/50" />
            </Parallax>
            <Parallax speed={0.05} className="absolute -bottom-5 -right-3 sm:-bottom-7 sm:-right-5">
              <div className="h-24 w-24 rounded-full border-[12px] border-primary/60 sm:h-32 sm:w-32" />
            </Parallax>
            <img
              src={homeImages.lounge.src}
              alt={homeImages.lounge.alt}
              width={1330}
              height={591}
              fetchPriority="high"
              decoding="async"
              className="relative aspect-[16/10] w-full rounded-2xl object-cover shadow-[0_30px_60px_-30px_rgba(41,35,45,0.45)]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
