import { BookOpenCheck, Home, ShieldCheck, Sprout, type LucideIcon } from 'lucide-react'
import heroImage from '../assets/images/hero-home.jpg'
import introImage from '../assets/images/intro-communal.jpg'
import serviceLearning from '../assets/images/service-learning.jpg'
import serviceHomeLife from '../assets/images/service-home-life.jpg'
import serviceOutdoors from '../assets/images/service-outdoors.jpg'
import homeExterior from '../assets/images/home-exterior.jpg'
import homeInterior from '../assets/images/home-interior.jpg'
import homeGarden from '../assets/images/home-garden.jpg'
import careersImage from '../assets/images/careers-team.jpg'
import type { AccordionItem } from '../components/ui/Accordion'
import { ROUTES } from './routes'

/*
 * Homepage content for Rahim Care Group, a children's residential care provider.
 * Everything marked "placeholder" is intentionally generic and should be
 * replaced once real information has been confirmed.
 *
 * Photography is non-identifying stock imagery and does NOT depict actual
 * Rahim Care Group homes or children.
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
  careers: {
    src: careersImage,
    alt: 'A diverse group of colleagues in a friendly team discussion',
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

export interface ImageCardData {
  title: string
  description: string
  image: string
  alt: string
  to: string
  tag?: string
}

/** PLACEHOLDER support areas: edit titles and descriptions once confirmed. */
export const SERVICES: ImageCardData[] = [
  {
    title: 'Support Area One',
    description:
      'A short, neutral description of the support offered to children and young people. Replace with confirmed details.',
    image: serviceLearning,
    alt: 'An open book and notes on a desk, suggesting a quiet space for learning',
    to: ROUTES.whatWeDo.path,
  },
  {
    title: 'Support Area Two',
    description:
      'A short, neutral description of the support offered to children and young people. Replace with confirmed details.',
    image: serviceHomeLife,
    alt: 'A bright, comfortable dining and living area in a family-style home',
    to: ROUTES.whatWeDo.path,
  },
  {
    title: 'Support Area Three',
    description:
      'A short, neutral description of the support offered to children and young people. Replace with confirmed details.',
    image: serviceOutdoors,
    alt: 'A house with a large green lawn, representing outdoor space',
    to: ROUTES.whatWeDo.path,
  },
]

/** PLACEHOLDER homes: do not publish until real home names are confirmed. */
export const HOMES: ImageCardData[] = [
  {
    title: 'Home Name Placeholder',
    description:
      'A short introduction to this children\u2019s residential care home will appear here.',
    image: homeExterior,
    alt: 'A comfortable family-style house with warmly lit windows and a front garden',
    to: ROUTES.ourHomes.path,
    tag: 'Placeholder',
  },
  {
    title: 'Home Name Placeholder',
    description:
      'A short introduction to this children\u2019s residential care home will appear here.',
    image: homeInterior,
    alt: 'A bright dining room with a wooden table and chairs by a large window',
    to: ROUTES.ourHomes.path,
    tag: 'Placeholder',
  },
  {
    title: 'Home Name Placeholder',
    description:
      'A short introduction to this children\u2019s residential care home will appear here.',
    image: homeGarden,
    alt: 'A pale blue house with a neat hedge and garden',
    to: ROUTES.ourHomes.path,
    tag: 'Placeholder',
  },
]

/** PLACEHOLDER testimonials: replace with real, permission-approved quotes only. */
export const TESTIMONIALS = [
  { label: 'Development placeholder', role: 'Role or relationship to be confirmed' },
  { label: 'Development placeholder', role: 'Role or relationship to be confirmed' },
  { label: 'Development placeholder', role: 'Role or relationship to be confirmed' },
]

/** PLACEHOLDER FAQs: neutral wording until confirmed. */
export const FAQS: AccordionItem[] = [
  {
    question: 'What does Rahim Care Group provide?',
    answer:
      'This is a placeholder answer. Rahim Care Group provides children\u2019s residential care, and full details will be added once confirmed.',
  },
  {
    question: 'How are placements arranged?',
    answer:
      'This is a placeholder answer. Information about referrals and placements for local authorities and social workers will be added here.',
  },
  {
    question: 'Can I find out more about your homes?',
    answer:
      'This is a placeholder answer. Details about our children\u2019s residential care homes will be shared on the Our Homes page.',
  },
  {
    question: 'How can I make an enquiry?',
    answer:
      'This is a placeholder answer. You can reach us through the Contact Us page, and enquiry details will be added soon.',
  },
]
