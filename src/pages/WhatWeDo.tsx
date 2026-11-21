import FinalCta from '../components/home/FinalCta'
import Approach from '../components/what-we-do/Approach'
import Belief from '../components/what-we-do/Belief'
import Collaboration from '../components/what-we-do/Collaboration'
import PageHero from '../components/what-we-do/PageHero'
import Purpose from '../components/what-we-do/Purpose'
import { ROUTES } from '../data/routes'
import { usePageMeta } from '../hooks/usePageMeta'

export default function WhatWeDo() {
  usePageMeta(
    'What We Do | Rahim Care Group',
    'Rahim Care Group provides trauma-informed, therapeutic and child-centred residential care for children and young people with complex emotional, behavioural and developmental needs.',
  )

  return (
    <>
      <PageHero />
      <Purpose />
      <Approach />
      <Collaboration />
      <Belief />
      <FinalCta
        title={'Let\u2019s Start a Conversation'}
        description={
          'Get in touch with Rahim Care Group to learn more about our approach to children\u2019s residential care.'
        }
        secondaryAction={{ label: 'Explore Our Homes', to: ROUTES.ourHomes.path }}
      />
    </>
  )
}
