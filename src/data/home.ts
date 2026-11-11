import { Handshake, HeartHandshake, Smile, Sprout, type LucideIcon } from 'lucide-react'
import heroImage from '../assets/images/hero-care.jpg'
import introImage from '../assets/images/intro-comfort.jpg'
import serviceSupport from '../assets/images/service-support.jpg'
import serviceConnection from '../assets/images/service-connection.jpg'
import serviceCommunity from '../assets/images/service-community.jpg'
import homeExterior from '../assets/images/home-exterior.jpg'
import homeWarm from '../assets/images/home-warm.jpg'
import homeLounge from '../assets/images/home-lounge.jpg'
import careersImage from '../assets/images/careers-team.jpg'
import type { AccordionItem } from '../components/ui/Accordion'
import { ROUTES } from './routes'

/*
 * Homepage content. Everything marked "placeholder" is intentionally generic
 * and should be replaced once real information has been confirmed.
 */

export const images = {
  hero: { src: heroImage, alt: 'A carer sharing a warm moment with an older man beside a bright window' },
  intro: { src: introImage, alt: 'Two people sitting close together on a sofa in a comfortable living room' },
  careers: { src: careersImage, alt: 'A group of colleagues celebrating together outdoors' },
}

export interface Value {
  title: string
  description: string
  icon: LucideIcon
}

export const VALUES: Value[] = [
  {
    title: 'Compassion',
    description: 'Kindness and understanding guide every interaction and every decision we make.',
    icon: HeartHandshake,
  },
  {
    title: 'Dignity and Respect',
    description: 'Everyone is treated with respect, and their privacy, choices and voice are protected.',
    icon: Handshake,
  },
  {
    title: 'Individuality',
    description: 'Support is shaped around each person: their story, their preferences and their goals.',
    icon: Sprout,
  },
  {
    title: 'Wellbeing',
    description: 'We care about the whole person, nurturing comfort, connection and a sense of purpose.',
    icon: Smile,
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

/** PLACEHOLDER services: edit titles and descriptions once services are confirmed. */
export const SERVICES: ImageCardData[] = [
  {
    title: 'Service Title One',
    description: 'A short, neutral description of this area of support. Replace with confirmed details.',
    image: serviceSupport,
    alt: 'People sharing a table and supporting one another at home',
    to: ROUTES.whatWeDo.path,
  },
  {
    title: 'Service Title Two',
    description: 'A short, neutral description of this area of support. Replace with confirmed details.',
    image: serviceConnection,
    alt: 'Two people gently holding hands in a moment of reassurance',
    to: ROUTES.whatWeDo.path,
  },
  {
    title: 'Service Title Three',
    description: 'A short, neutral description of this area of support. Replace with confirmed details.',
    image: serviceCommunity,
    alt: 'Two people tending a garden together',
    to: ROUTES.whatWeDo.path,
  },
]

/** PLACEHOLDER homes: do not publish until real home names are confirmed. */
export const HOMES: ImageCardData[] = [
  {
    title: 'Home Name Placeholder',
    description: 'A short introduction to this home will appear here.',
    image: homeExterior,
    alt: 'A traditional house with a landscaped garden',
    to: ROUTES.ourHomes.path,
    tag: 'Placeholder',
  },
  {
    title: 'Home Name Placeholder',
    description: 'A short introduction to this home will appear here.',
    image: homeWarm,
    alt: 'A sunlit armchair with a soft blanket in a warm room',
    to: ROUTES.ourHomes.path,
    tag: 'Placeholder',
  },
  {
    title: 'Home Name Placeholder',
    description: 'A short introduction to this home will appear here.',
    image: homeLounge,
    alt: 'A calm living room with a sofa, plants and soft lighting',
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
    question: 'What kind of care and support does Rahim Care Group provide?',
    answer:
      'This is a placeholder answer. Full details of our care and support will be added once they have been confirmed.',
  },
  {
    question: 'How is support tailored to each person?',
    answer:
      'This is a placeholder answer. We aim to provide person-centred support, and further detail will be added here.',
  },
  {
    question: 'Can I find out more about your homes?',
    answer:
      'This is a placeholder answer. Information about our homes will be shared on the Our Homes page.',
  },
  {
    question: 'How can I make an enquiry?',
    answer:
      'This is a placeholder answer. You can reach us through the Contact Us page, and enquiry details will be added soon.',
  },
]
