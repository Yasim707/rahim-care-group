import { HOMES } from '../../data/home'
import { ROUTES } from '../../data/routes'
import Button from '../ui/Button'
import Container from '../ui/Container'
import ImageCard from '../ui/ImageCard'
import SectionHeading from '../ui/SectionHeading'

export default function Homes() {
  return (
    <section aria-labelledby="homes-title" className="bg-background py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="homes-title"
            eyebrow="Our Homes"
            title="A Place to Feel at Home"
            description="Comfortable, welcoming spaces designed around the people who live in them. Home names and details below are placeholders."
          />
          <Button to={ROUTES.ourHomes.path} className="self-start lg:self-auto">
            Explore Our Homes
          </Button>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {HOMES.map((home, i) => (
            <ImageCard key={i} {...home} />
          ))}
        </div>
      </Container>
    </section>
  )
}
