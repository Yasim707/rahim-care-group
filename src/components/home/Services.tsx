import { SERVICES } from '../../data/home'
import Container from '../ui/Container'
import ImageCard from '../ui/ImageCard'
import SectionHeading from '../ui/SectionHeading'

export default function Services() {
  return (
    <section aria-labelledby="services-title" className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow="What We Do"
          title="How We Support Children and Young People"
          description="Children's residential care centred on safety, stability and personal development. Support area details below are placeholders and will be updated once confirmed."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ImageCard key={`${service.title}-${i}`} {...service} />
          ))}
        </div>
      </Container>
    </section>
  )
}
