// History (route: /history) — the experience chart. Left column carries the
// nav, the ASCII portrait and the title; right column lists each role as
// TITLE (dark green), Company (grey) and the year, hairline ruled.
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CustomCursor from '../components/CustomCursor.jsx'
import FooterLab from '../components/FooterLab.jsx'
import AsciiReveal from '../components/AsciiReveal.jsx'
import headshot from '../assets/photos/headshot3_1__37f054d4.jpg'
import '../styles/history.css'

const EXPERIENCE = [
  { title: 'Product Designer', org: 'Hungie', year: 'PRESENT' },
  { title: 'President', org: 'UMD Indian Student Association', year: 'PRESENT' },
  { title: 'Product Designer', org: 'National School Climate Center', year: '2026' },
  { title: 'Google UX Design Certificate', org: '', year: '' },
  { title: 'Software Engineer', org: 'Breastfeeding Center of Greater Washington', year: '2025' },
  { title: 'Product Designer Intern', org: 'AppleNJ', year: '2025' },
  { title: 'Product Designer Intern', org: 'Princeton IT Services', year: '2025' },
  { title: 'Design Psychology: Master the Art and Science of UX Design', org: '', year: '' },
  { title: 'UI/UX Designer', org: 'Children’s Cancer Foundation', year: '2024' },
  { title: 'Designer & Software Engineer', org: 'Hack4Impact', year: '2024' },
  { title: 'Sister', org: 'Alpha Omega Epsilon, Professional Engineering Sorority', year: '2024' },
  { title: 'Business Analyst', org: 'Consult Your Community', year: '2024' },
  { title: 'Founder & Business Owner', org: 'Etsy', year: '2020-2024' },
  { title: 'MIT Beaver Works Summer Institute', org: 'Cyber Security in Software Systems', year: '2020' },
]

export default function History() {
  const [cursorMode, setCursorMode] = useState('default')
  return (
    <main className="me2-page has-cursor">
      <CustomCursor mode={cursorMode} />

      <header className="me2-header">
        <Link to="/" aria-label="Pari Gill — home">
          <span className="me2-wordmark" />
        </Link>
      </header>

      <section className="me2-body">
        <div className="me2-left">
          <nav className="me2-nav">
            <Link to="/">WORKS</Link>
            <Link to="/history">HISTORY</Link>
            <Link to="/me">ME</Link>
            <a href="/resume.pdf">RESUME</a>
            <a href="https://www.linkedin.com/in/pari-gill/">LINKEDIN</a>
          </nav>
          <div className="me2-portrait">
            <AsciiReveal src={headshot} alt="Pari Gill" />
            <h1 className="me2-title">
              Product Designer + Engineer
              <span className="me2-subtitle">+ side quester</span>
            </h1>
          </div>
        </div>

        <ul className="me2-list">
          {EXPERIENCE.map((e, i) => (
            <li className="me2-row" key={i}>
              <p className="me2-role">
                <span className="me2-role-title">{e.title}</span>
                {e.org && <span className="me2-org">, {e.org}</span>}
              </p>
              <span className="me2-year">{e.year}</span>
            </li>
          ))}
        </ul>
      </section>

      <FooterLab
        onCursorEnter={() => setCursorMode('footer')}
        onCursorLeave={() => setCursorMode('default')}
      />
    </main>
  )
}
