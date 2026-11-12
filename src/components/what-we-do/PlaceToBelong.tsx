import { Check } from 'lucide-react'
import { BELONG_POINTS, wwdImages } from '../../data/whatWeDo'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function PlaceToBelong() {
  return (
    <section aria-labelledby="belong-title" className="bg-background py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          <img
            src={wwdImages.belongMain.src}
            alt={wwdImages.belongMain.alt}
            width={1100}
            height={733}
            loading="lazy"
            decoding="async"
            className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover shadow-[0_24px_50px_-28px_rgba(41,35,45,0.4)]"
          />
          <img
            src={wwdImages.belongLounge.src}
            alt={wwdImages.belongLounge.alt}
            width={900}
            height={600}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
          <img
            src={wwdImages.belongDining.src}
            alt={wwdImages.belongDining.alt}
            width={900}
            height={600}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </div>

        <div>
          <SectionHeading
            id="belong-title"
            eyebrow="A Place to Belong"
            title="A Home That Feels Like Home"
          />
          <p className="mt-6 text-lg leading-relaxed text-muted">
            A welcoming, homely environment helps children feel settled and secure. We believe the
            spaces children live in should feel comfortable, warm and respectful of who they are.
          </p>
          <ul className="mt-8 space-y-4">
            {BELONG_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lilac text-secondary">
                  <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <span className="text-lg font-medium text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
