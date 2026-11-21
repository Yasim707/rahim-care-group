import Faq from '../components/home/Faq'
import FinalCta from '../components/home/FinalCta'
import Hero from '../components/home/Hero'
import Homes from '../components/home/Homes'
import Introduction from '../components/home/Introduction'
import Services from '../components/home/Services'
import Testimonials from '../components/home/Testimonials'
import Values from '../components/home/Values'

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Values />
      <Services />
      <Homes />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  )
}
