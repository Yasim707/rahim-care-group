import FinalCta from '../components/home/FinalCta'
import Belonging from '../components/our-homes/Belonging'
import Gallery from '../components/our-homes/Gallery'
import Location from '../components/our-homes/Location'
import PageHero from '../components/our-homes/PageHero'
import { ROUTES } from '../data/routes'
import { usePageMeta } from '../hooks/usePageMeta'

export default function OurHomes() {
  usePageMeta(
    'Our Homes | Rahim Care Group',
    'Rahim Care Group\u2019s children\u2019s residential homes offer welcoming, supportive surroundings in a peaceful, semi-rural setting in Buckinghamshire.',
  )

  return (
    <>
      <PageHero />
      <Location />
      <Gallery />
      <Belonging />
      <FinalCta
        title="Find Out More About Our Homes"
        description={
          'We\u2019re happy to answer your questions and tell you more about Rahim Care Group.'
        }
        secondaryAction={{ label: 'What We Do', to: ROUTES.whatWeDo.path }}
      />
    </>
  )
}
