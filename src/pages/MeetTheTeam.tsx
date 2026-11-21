import FinalCta from '../components/home/FinalCta'
import LeaderProfile from '../components/team/LeaderProfile'
import PageHero from '../components/team/PageHero'
import StaffTeam from '../components/team/StaffTeam'
import { DEPUTY_MANAGER, DIRECTOR, HOME_MANAGER } from '../data/team'
import { ROUTES } from '../data/routes'
import { usePageMeta } from '../hooks/usePageMeta'

export default function MeetTheTeam() {
  usePageMeta(
    'Meet the Team | Rahim Care Group',
    'Meet the dedicated leadership and care team at Rahim Care Group, committed to safe, supportive and person-centred care for children and young people.',
  )

  return (
    <>
      <PageHero />
      <LeaderProfile leader={DIRECTOR} index={0} />
      <LeaderProfile leader={HOME_MANAGER} index={1} reversed tinted />
      <LeaderProfile leader={DEPUTY_MANAGER} index={2} />
      <StaffTeam />
      <FinalCta
        title="Work With a Team That Cares"
        description={
          'Get in touch with Rahim Care Group to learn more about our team and our approach to children\u2019s residential care.'
        }
        secondaryAction={{ label: 'What We Do', to: ROUTES.whatWeDo.path }}
      />
    </>
  )
}
