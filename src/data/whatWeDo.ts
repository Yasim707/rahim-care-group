import {
  Building2,
  HeartPulse,
  KeyRound,
  Sparkles,
  Sprout,
  Stethoscope,
  UserRound,
  UsersRound,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react'

/*
 * OFFICIAL CLIENT CONTENT for the What We Do page.
 * These four paragraphs are supplied by the client and must be kept
 * word-for-word and in this order. Do not paraphrase or edit them.
 * Layout components highlight phrases visually (see `Emphasis`) without
 * altering the text.
 */

export const PURPOSE =
  'At Rahim Care Group, we are committed to providing exceptional, person-centred residential care for children and young people with complex emotional, behavioural and developmental needs. We specialise in supporting vulnerable young people experiencing emotional and behavioural difficulties (EBD), mental health challenges, learning disabilities and learning difficulties, alongside those who have experienced trauma, abuse, neglect, child criminal exploitation (CCE) and child sexual exploitation (CSE).'

export const APPROACH =
  'Our dedicated and experienced team adopts a trauma-informed, therapeutic and child-centred approach, delivering tailored care packages that recognise each young person\u2019s individual needs, abilities and aspirations. We provide structured, nurturing and supportive environments where young people can develop emotional resilience, build positive relationships, manage challenging behaviours and strengthen their independence and life skills.'

export const COLLABORATION =
  'Working collaboratively with local authorities, healthcare professionals, education providers and multidisciplinary teams, we ensure that every young person receives consistent, holistic support that promotes their safety, mental health, emotional wellbeing, educational development and long-term outcomes.'

export const BELIEF =
  'At Rahim Care Group, we believe that every child deserves to feel safe, valued, understood and supported, regardless of their background or the challenges they face. Our purpose goes beyond providing residential care \u2014 we aim to create a sense of belonging, restore confidence, inspire positive change and empower young people to achieve their full potential.'

/** The belief paragraph is shown in two parts. Joined, they equal BELIEF exactly. */
const splitAt = BELIEF.indexOf('Our purpose goes beyond')
export const BELIEF_LEAD = BELIEF.slice(0, splitAt).trimEnd()
export const BELIEF_CLOSE = BELIEF.slice(splitAt)

/** Phrases taken directly from the text above, shown as visual highlights. */
export const PURPOSE_AREAS = [
  'Emotional and behavioural difficulties (EBD)',
  'Mental health challenges',
  'Learning disabilities and learning difficulties',
  'Trauma',
  'Abuse',
  'Neglect',
  'Child criminal exploitation (CCE)',
  'Child sexual exploitation (CSE)',
]

export const PURPOSE_EMPHASIS = [
  'exceptional, person-centred residential care',
  'complex emotional, behavioural and developmental needs',
]

export const APPROACH_EMPHASIS = [
  'trauma-informed, therapeutic and child-centred approach',
  'emotional resilience',
  'independence and life skills',
]

export const COLLAB_EMPHASIS = ['consistent, holistic support']

export const BELIEF_EMPHASIS = ['belonging', 'restore confidence', 'inspire positive change', 'full potential']

export interface Highlight {
  title: string
  icon: LucideIcon
}

export const APPROACH_HIGHLIGHTS: Highlight[] = [
  { title: 'Trauma-informed care', icon: HeartPulse },
  { title: 'Therapeutic approach', icon: Sparkles },
  { title: 'Individual needs', icon: UserRound },
  { title: 'Emotional resilience', icon: Sprout },
  { title: 'Independence and life skills', icon: KeyRound },
]

export const PARTNERS: Highlight[] = [
  { title: 'Local Authorities', icon: Building2 },
  { title: 'Healthcare Professionals', icon: Stethoscope },
  { title: 'Education Providers', icon: GraduationCap },
  { title: 'Multidisciplinary Teams', icon: UsersRound },
]

export const COLLAB_OUTCOMES = [
  'Safety',
  'Mental health',
  'Emotional wellbeing',
  'Educational development',
  'Long-term outcomes',
]

export const BELIEF_THEMES = ['Belonging', 'Confidence', 'Positive change', 'Potential']

export const HERO_WORDS = ['Safe', 'Valued', 'Understood', 'Supported']
