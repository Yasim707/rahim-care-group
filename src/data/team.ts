import directorImg from '../assets/team/director and responsible individual.jpeg'
import homeManagerImg from '../assets/team/home manager.jpeg'
import deputyImg from '../assets/team/deputy manager.jpeg'

/*
 * Meet the Team content for Rahim Care Group.
 *
 * All four paragraphs below are client-approved and must be used verbatim.
 * Do not paraphrase, shorten or edit them. No qualifications, dates, awards
 * or achievements beyond what the client supplied may be added.
 *
 * Photographs are matched to each person strictly by the supplied filename.
 */

export interface Leader {
  role: string
  heading: string
  content: string
  image: string
  alt: string
  /** object-position for the portrait, to keep the face framed. */
  objectPosition?: string
}

export const DIRECTOR: Leader = {
  role: 'Director & Responsible Individual',
  heading: 'Meet Our Director & Responsible Individual - Rashid Khan',
  content:
    'Our Director and Responsible Individual brings extensive experience across both healthcare and children\u2019s social care, combining frontline clinical expertise with senior operational and strategic leadership. With a professional background as a paramedic and experience across emergency departments, urgent care and primary care services, he has developed strong skills in safeguarding, risk management and crisis intervention. Having held senior positions as Operations Director, Responsible Individual and Director within children\u2019s residential care, he brings significant expertise in Ofsted compliance, quality assurance, service development and managing complex, high-risk placements. He is committed to delivering exceptional standards of care, supporting professional teams and ensuring every young person receives safe, effective and person-centred support.',
  image: directorImg,
  alt: 'Portrait of Rashid Khan, Director and Responsible Individual at Rahim Care Group',
  objectPosition: 'center top',
}

export const HOME_MANAGER: Leader = {
  role: 'Home Manager',
  heading: 'Our Home Manager \u2013 Subia Khan',
  content:
    'Subia Khan brings extensive experience working with children across early years, nursery and residential care settings. She has worked within Ofsted-regulated environments and previously held roles as a Special Educational Needs (SEN) Lead and Safeguarding Lead. As Home Manager at Rahim Care Group, Subia is committed to delivering high-quality, child-centred care, promoting safeguarding, emotional wellbeing and positive outcomes for every young person.',
  image: homeManagerImg,
  alt: 'Portrait of Subia Khan, Home Manager at Rahim Care Group',
  objectPosition: 'center top',
}

export const DEPUTY_MANAGER: Leader = {
  role: 'Deputy Manager',
  heading: 'Meet Our Deputy Manager - Fauziah Khan',
  content:
    'Our Deputy Manager brings a wealth of experience working with children and young people across a range of professional settings, including local authority Early Years and Social Work teams, specialist SEND schools and NHS physiotherapy services. Having held several team leadership positions, she has developed strong skills in safeguarding, supporting additional needs and managing multidisciplinary teams. At Rahim Care Group, she is committed to providing high-quality, child-centred care and promoting positive outcomes for every young person.',
  image: deputyImg,
  alt: 'Portrait of Fauziah Khan, Deputy Manager at Rahim Care Group',
  objectPosition: 'center top',
}

export const STAFF_HEADING = 'Meet Our Staff Team'

export const STAFF_CONTENT =
  'At Rahim Care Group, our dedicated team of experienced Residential Support Workers is committed to providing high-quality, compassionate and person-centred care. Our staff bring a diverse range of experience in supporting children and young people with complex needs, emotional and behavioural difficulties (EBD), mental health challenges, learning disabilities and safeguarding concerns. Through a trauma-informed approach, ongoing professional development and strong teamwork, our staff create a safe, nurturing and supportive environment where every young person feels valued, understood and empowered to achieve positive outcomes.'
