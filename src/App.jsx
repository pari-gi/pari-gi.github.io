import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import Landing from './pages/Landing.jsx'
import Miscellany from './pages/Miscellany.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import HomeLab from './pages/HomeLab.jsx'
import AppleNjLab from './pages/AppleNjLab.jsx'
import './styles/chrome.css'

export default function App() {
  const { pathname } = useLocation()
  // the lab home renders its own header + no footer (sandbox chrome)
  const bareChrome = pathname === '/home-lab'
  return (
    <div className="page">
      <ScrollManager />
      {!bareChrome && <Nav />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/miscellany" element={<Miscellany />} />
        <Route path="/applenj" element={<CaseStudy slug="applenj" />} />
        <Route path="/pits" element={<CaseStudy slug="pits" />} />
        <Route path="/hungie" element={<CaseStudy slug="hungie" />} />
        {/* sandbox copies — safe to redesign without touching the live pages */}
        <Route path="/home-lab" element={<HomeLab />} />
        <Route path="/applenj-lab" element={<AppleNjLab />} />
        <Route path="*" element={<Landing />} />
      </Routes>
      {!bareChrome && <Footer />}
    </div>
  )
}
