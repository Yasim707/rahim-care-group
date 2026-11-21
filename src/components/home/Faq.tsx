import { FAQS } from '../../data/home'
import Accordion from '../ui/Accordion'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function Faq() {
  return (
    <section aria-labelledby="faq-title" className="bg-white py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQs"
          title="Questions You May Have"
          description="A few common questions about Rahim Care Group and how to reach us."
        />
        <Accordion items={FAQS} />
      </Container>
    </section>
  )
}
