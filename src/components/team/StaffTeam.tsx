import { HeartHandshake, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { STAFF_CONTENT, STAFF_HEADING } from '../../data/team'
import Container from '../ui/Container'
import Parallax from '../ui/Parallax'
import Reveal from '../ui/Reveal'

const ICONS = [Users, ShieldCheck, HeartHandshake, Sparkles]

export default function StaffTeam() {
  return (
    <section
      aria-labelledby="staff-title"
      className="relative overflow-hidden bg-gradient-to-br from-[#4a1d66] via-[#3d1754] to-[#2f1042] py-20 text-white lg:py-28"
    >
      <Parallax speed={0.09} className="absolute -left-28 -top-28">
        <div className="h-96 w-96 rounded-full border-[52px] border-white/[0.07]" />
      </Parallax>
      <Parallax speed={0.05} className="absolute -bottom-36 -right-20">
        <div className="h-[26rem] w-[26rem] rotate-12 rounded-3xl bg-white/[0.05]" />
      </Parallax>
      <Parallax speed={0.12} className="absolute right-[12%] top-20 hidden lg:block">
        <div className="float-soft h-20 w-20 rounded-full bg-primary/30" />
      </Parallax>

      <Container className="relative max-w-4xl text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Wider Residential Support Staff Team
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2
            id="staff-title"
            className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            {STAFF_HEADING}
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <ul className="mt-9 flex flex-wrap justify-center gap-4" aria-hidden="true">
            {ICONS.map((Icon, i) => (
              <li
                key={i}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] text-white"
              >
                <Icon size={24} strokeWidth={1.5} />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={220}>
          <p className="mx-auto mt-10 max-w-3xl text-lg leading-[1.9] text-white/85 sm:text-xl sm:leading-[1.9]">
            {STAFF_CONTENT}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
