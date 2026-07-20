import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import Landing from './pages/Landing.jsx'
import Miscellany from './pages/Miscellany.jsx'
import CaseStudy from './pages/CaseStudy.jsx'
import './styles/chrome.css'

export default function App() {
  return (
    <div className="page">
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/miscellany" element={<Miscellany />} />
        <Route path="/applenj" element={<CaseStudy slug="applenj" />} />
        <Route path="/pits" element={<CaseStudy slug="pits" />} />
        <Route path="/hungie" element={<CaseStudy slug="hungie" />} />
        <Route path="*" element={<Landing />} />
      </Routes>
      <Footer />
    </div>
  )
}
