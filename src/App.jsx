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
  // archived pages (URL-only, personal reference) keep the old chrome intact;
  // every other page renders its own chrome (nav + FooterLab inside the page)
  const isArchive = pathname.startsWith('/archive')
  return (
    <div className="page">
      <ScrollManager />
      {isArchive && <Nav />}
      <Routes>
        {/* main site */}
        <Route path="/" element={<HomeLab2 />} />
        <Route path="/applenj" element={<CaseStudyLab slug="applenj" />} />
        <Route path="/pits" element={<CaseStudyLab slug="pits" />} />
        <Route path="/hungie" element={<CaseStudyLab slug="hungie" />} />
        <Route path="/miscellany" element={<Miscellany />} />
        {/* aliases from the sandbox era */}
        <Route path="/home-lab2" element={<HomeLab2 />} />
        <Route path="/applenj-lab" element={<CaseStudyLab slug="applenj" />} />
        <Route path="/pits-lab" element={<CaseStudyLab slug="pits" />} />
        <Route path="/hungie-lab" element={<CaseStudyLab slug="hungie" />} />
        {/* archived previous site — reachable by URL only, never linked */}
        <Route path="/archive" element={<Landing />} />
        <Route path="/archive/applenj" element={<CaseStudy slug="applenj" />} />
        <Route path="/archive/pits" element={<CaseStudy slug="pits" />} />
        <Route path="/archive/hungie" element={<CaseStudy slug="hungie" />} />
        <Route path="/home-lab" element={<HomeLab />} />
        <Route path="/styles" element={<StyleGuide />} />
        <Route path="*" element={<HomeLab2 />} />
      </Routes>
      {isArchive && <Footer />}
    </div>
  )
}
