import { wwdImages } from '../../data/whatWeDo'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function IndividualIntro() {
  return (
    <section aria-labelledby="individual-title" className="bg-white py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            id="individual-title"
            eyebrow="Our Philosophy"
            title="Care That Starts With the Individual"
          />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Every child arrives with their own experiences, needs, personality and hopes for the
              future. Understanding who a child is, and listening to what matters to them, is where
              good care begins.
            </p>
            <p>
              A supportive, child-centred approach recognises children as individuals rather than
              labels. It values their voice, respects their feelings and helps them feel
              understood, so that they can grow in confidence.
            </p>
          </div>
        </div>
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 h-3/4 w-3/4 rounded-2xl bg-lilac sm:-bottom-6 sm:-right-6"
          />
          <img
            src={wwdImages.intro.src}
            alt={wwdImages.intro.alt}
            width={1100}
            height={733}
            loading="lazy"
            decoding="async"
            className="relative aspect-[4/3.2] w-full rounded-2xl object-cover shadow-[0_24px_50px_-28px_rgba(41,35,45,0.4)]"
          />
        </div>
      </Container>
    </section>
  )
}
