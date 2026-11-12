import {
  BookOpen,
  Compass,
  HeartHandshake,
  MessagesSquare,
  Shield,
  Sprout,
  Trees,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react'
import heroImage from '../assets/images/home-exterior.jpg'
import introImage from '../assets/images/intro-communal.jpg'
import learningImage from '../assets/images/service-learning.jpg'
import developmentImage from '../assets/images/living-cosy.jpg'
import activitiesImage from '../assets/images/service-outdoors.jpg'
import independenceImage from '../assets/images/service-home-life.jpg'
import belongMain from '../assets/images/living-family.jpg'
import belongLounge from '../assets/images/living-lounge.jpg'
import belongDining from '../assets/images/home-interior.jpg'

/*
 * Content for the What We Do page. Wording is intentionally general and
 * editable. It does not claim any specific programmes, facilities, age ranges
 * or accreditations. Photography is non-identifying stock imagery.
 */

export const wwdImages = {
  hero: {
    src: heroImage,
    alt: 'A comfortable family-style house with warmly lit windows and a front garden',
  },
  intro: {
    src: introImage,
    alt: 'A bright, homely communal dining and living space with a large wooden table',
  },
  belongMain: {
    src: belongMain,
    alt: 'A bright living room with comfortable sofas, a fireplace and a wooden staircase',
  },
  belongLounge: {
    src: belongLounge,
    alt: 'A light, uncluttered lounge with a large corner sofa',
  },
  belongDining: {
    src: belongDining,
    alt: 'A dining room with a wooden table and chairs beside a large window',
  },
}

export interface ContentBlock {
  title: string
  description: string
  icon: LucideIcon
}

export const APPROACH: ContentBlock[] = [
  {
    title: 'Individualised Support',
    description:
      'Every child has different experiences, needs and aspirations. We aim to recognise and respond to each child as an individual.',
    icon: Compass,
  },
  {
    title: 'Safety and Wellbeing',
    description:
      'We want to create environments where children feel safe, respected and supported, and where their wellbeing comes first.',
    icon: Shield,
  },
  {
    title: 'Positive Relationships',
    description:
      'Trust, communication and meaningful relationships help children feel secure, understood and valued.',
    icon: MessagesSquare,
  },
  {
    title: 'Growth and Development',
    description:
      'We want to support children to build confidence, independence and the life skills that prepare them for the future.',
    icon: Sprout,
  },
]

export interface EverydayCard {
  title: string
  description: string
  icon: LucideIcon
  image: string
  alt: string
}

/** General, editable descriptions. Do not state specific programmes until confirmed. */
export const EVERYDAY: EverydayCard[] = [
  {
    title: 'Education and Learning',
    description:
      'A positive home environment can help children feel settled and encouraged to engage with learning. Details will be added once confirmed.',
    icon: BookOpen,
    image: learningImage,
    alt: 'An open book and notes on a desk, suggesting a quiet space for learning',
  },
  {
    title: 'Personal Development',
    description:
      'Children benefit from encouragement to build confidence, self-belief and a positive sense of identity at their own pace.',
    icon: HeartHandshake,
    image: developmentImage,
    alt: 'A calm, cosy sofa corner with plants and soft lighting',
  },
  {
    title: 'Activities and Interests',
    description:
      'Time to relax, explore interests and enjoy being outdoors is an important part of everyday life. Specific activities will be added once confirmed.',
    icon: Trees,
    image: activitiesImage,
    alt: 'A house with a large green lawn, representing outdoor space',
  },
  {
    title: 'Independence and Life Skills',
    description:
      'Everyday routines at home can help children gradually build the practical skills and independence they will need as they grow.',
    icon: UtensilsCrossed,
    image: independenceImage,
    alt: 'A bright dining and living area in a family-style home',
  },
]

export const BELONG_POINTS = [
  'Comfortable living spaces',
  'Opportunities for recreation',
  'Welcoming communal areas',
  'Respect for individuality and personal space',
]
