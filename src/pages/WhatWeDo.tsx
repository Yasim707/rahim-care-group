import FinalCta from '../components/home/FinalCta'
import Approach from '../components/what-we-do/Approach'
import EverydayLife from '../components/what-we-do/EverydayLife'
import IndividualIntro from '../components/what-we-do/IndividualIntro'
import PageHero from '../components/what-we-do/PageHero'
import PlaceToBelong from '../components/what-we-do/PlaceToBelong'
import SafetyMatters from '../components/what-we-do/SafetyMatters'
import { ROUTES } from '../data/routes'
import { usePageMeta } from '../hooks/usePageMeta'

export default function WhatWeDo() {
  usePageMeta(
    'What We Do | Rahim Care Group',
    'Learn about Rahim Care Group\u2019s child-centred approach to children\u2019s residential care: individual support, safety and wellbeing, positive relationships, and growth and development.',
  )

  return (
    <>
      <PageHero />
      <IndividualIntro />
      <Approach />
      <EverydayLife />
      <PlaceToBelong />
      <SafetyMatters />
      <FinalCta
        title={'Let\u2019s Talk About How We Can Help'}
        description={
          'Get in touch with Rahim Care Group to learn more about our approach to children\u2019s residential care.'
        }
        secondaryAction={{ label: 'Explore Our Homes', to: ROUTES.ourHomes.path }}
      />
    </>
  )
}
