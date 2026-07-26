import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import Landing from './pages/Landing.jsx'
import Miscellany from './pages/Miscellany.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import HomeLab from './pages/HomeLab.jsx'
import HomeLab2 from './pages/HomeLab2.jsx'
import CaseStudyLab from './pages/CaseStudyLab.jsx'
import StyleGuide from './pages/StyleGuide.jsx'
import './styles/chrome.css'
import './styles/type.css'

export default function App() {
  const { pathname } = useLocation()
  // these render their own chrome (no shared nav/footer)
  const bareChrome = pathname === '/home-lab' || pathname === '/home-lab2' || pathname === '/styles'
  // case-study lab pages have their own top nav; hide the shared one (keep footer)
  const hideNav = bareChrome || pathname.endsWith('-lab')
  return (
    <div className="page">
      <ScrollManager />
      {!hideNav && <Nav />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/miscellany" element={<Miscellany />} />
        <Route path="/applenj" element={<CaseStudy slug="applenj" />} />
        <Route path="/pits" element={<CaseStudy slug="pits" />} />
        <Route path="/hungie" element={<CaseStudy slug="hungie" />} />
        {/* sandbox copies — safe to redesign without touching the live pages */}
        <Route path="/home-lab" element={<HomeLab />} />
        <Route path="/home-lab2" element={<HomeLab2 />} />
        <Route path="/applenj-lab" element={<CaseStudyLab slug="applenj" />} />
        <Route path="/pits-lab" element={<CaseStudyLab slug="pits" />} />
        <Route path="/hungie-lab" element={<CaseStudyLab slug="hungie" />} />
        <Route path="/styles" element={<StyleGuide />} />
        <Route path="*" element={<Landing />} />
      </Routes>
      {!bareChrome && <Footer />}
    </div>
  )
}
