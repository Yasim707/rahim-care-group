import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { ROUTES } from './data/routes'
import Home from './pages/Home'
import WhatWeDo from './pages/WhatWeDo'
import OurHomes from './pages/OurHomes'
import Safeguarding from './pages/Safeguarding'
import Careers from './pages/Careers'
import OurStaff from './pages/OurStaff'
import ContactUs from './pages/ContactUs'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={ROUTES.home.path} element={<Home />} />
        <Route path={ROUTES.whatWeDo.path} element={<WhatWeDo />} />
        <Route path={ROUTES.ourHomes.path} element={<OurHomes />} />
        <Route path={ROUTES.safeguarding.path} element={<Safeguarding />} />
        <Route path={ROUTES.careers.path} element={<Careers />} />
        <Route path={ROUTES.ourStaff.path} element={<OurStaff />} />
        <Route path={ROUTES.contact.path} element={<ContactUs />} />
        <Route path={ROUTES.privacy.path} element={<PrivacyPolicy />} />
        <Route path={ROUTES.cookies.path} element={<CookiePolicy />} />
        <Route path={ROUTES.terms.path} element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
