import {
  BookOpenCheck,
  HeartPulse,
  Home,
  KeyRound,
  ShieldCheck,
  Sprout,
  type LucideIcon,
} from 'lucide-react'
import heroImage from '../assets/images/hero-home.jpg'
import introImage from '../assets/images/intro-communal.jpg'
import type { AccordionItem } from '../components/ui/Accordion'
import { homeImages } from './ourHomes'

/*
 * Homepage content for Rahim Care Group, a children's residential care provider.
 *
 * The hero and introduction use non-identifying stock imagery. The Our Homes
 * section reuses the actual client-supplied photographs from the Our Homes page
 * (see ./ourHomes.ts). The support areas use an icon-based composition that
 * matches the What We Do page rather than photographs.
 */

export const images = {
  hero: {
    src: heroImage,
    alt: 'A welcoming stone house with a garden fence and flowering shrubs',
  },
  intro: {
    src: introImage,
    alt: 'A bright, homely communal dining and living space with a large wooden table',
  },
}

export interface Value {
  title: string
  description: string
  icon: LucideIcon
}

export const VALUES: Value[] = [
  {
    title: 'Safety and Wellbeing',
    description:
      'Every child and young person should feel safe, protected and cared for in their home.',
    icon: ShieldCheck,
  },
  {
    title: 'Respect and Dignity',
    description:
      'Children and young people are listened to, treated with respect and helped to have a voice.',
    icon: Home,
  },
  {
    title: 'Individuality',
    description:
      'Support is shaped around each child: their personality, their needs and their aspirations.',
    icon: Sprout,
  },
  {
    title: 'Growth and Development',
    description:
      'We encourage learning, confidence and personal development at every stage of the journey.',
    icon: BookOpenCheck,
  },
]

export interface SupportArea {
  title: string
  description: string
  icon: LucideIcon
}

/** The three support areas, mirroring the What We Do page. Icon-based, no photos. */
export const SUPPORT_AREAS: SupportArea[] = [
  {
    title: 'Trauma-Informed, Child-Centred Care',
    description:
      'We take a trauma-informed, child-centred approach, recognising each young person\u2019s individual experiences, needs and abilities. Our aim is to create a supportive environment where every young person feels understood, valued and supported.',
    icon: HeartPulse,
  },
  {
    title: 'Emotional Wellbeing and Positive Development',
    description:
      'We support young people in developing emotional resilience, building positive relationships and managing challenging behaviours, while promoting their mental health, confidence and personal development.',
    icon: Sprout,
  },
  {
    title: 'Independence and Life Skills',
    description:
      'We encourage young people to strengthen their independence and life skills, helping them build confidence and work towards their individual aspirations and future goals.',
    icon: KeyRound,
  },
]

/** Our Homes section: reuses the real client photographs from the Our Homes page. */
export const HOME_INTRO =
  'Nestled within the beautiful countryside of Buckinghamshire, Rahim Care Group offers a peaceful, semi-rural setting surrounded by picturesque landscapes, green spaces and charming market towns. Our location provides a welcoming environment where children and young people can enjoy a sense of calm, privacy and belonging.'

export const HOME_GALLERY = [homeImages.location, homeImages.lounge, homeImages.bedroom]

/** FAQs: concise, client-approved answers. */
export const FAQS: AccordionItem[] = [
  {
    question: 'What type of care does Rahim Care Group provide?',
    answer:
      'We provide person-centred residential care for children and young people with complex emotional, behavioural and developmental needs.',
  },
  {
    question: 'Who do you support?',
    answer:
      'We support young people experiencing emotional and behavioural difficulties, mental health challenges, learning disabilities and the effects of trauma, abuse or neglect.',
  },
  {
    question: 'What approach do you take to care?',
    answer:
      'Our team uses a trauma-informed, therapeutic and child-centred approach tailored to each young person\u2019s individual needs, abilities and aspirations.',
  },
  {
    question: 'Where is Rahim Care Group located?',
    answer:
      'We are based in the beautiful countryside of Buckinghamshire, in a peaceful semi-rural setting with access to local amenities and community resources.',
  },
  {
    question: 'How can I make an enquiry?',
    answer:
      'You can contact our team through the Contact Us page or email admin@rahimcaregroup.com.',
  },
]
