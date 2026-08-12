// Me — alternate layout (route: /me2). Two columns: a section label + heading
// on the left, and the experience list on the right, one row per role:
// TITLE (dark green), Company (grey), and the year (dark green), hairline ruled.
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import CustomCursor from '../components/CustomCursor.jsx'
import FooterLab from '../components/FooterLab.jsx'
import AsciiReveal from '../components/AsciiReveal.jsx'
import headshot from '../assets/photos/headshot3_1__37f054d4.jpg'
import '../styles/me2.css'

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

// the portrait's bottom lines up with this row rather than the end of the list
const PHOTO_ALIGN_ROW = EXPERIENCE.findIndex((e) => e.title === 'Sister')

export default function Me2() {
  const [cursorMode, setCursorMode] = useState('default')
  const listRef = useRef(null)
  const leftRef = useRef(null)
  useEffect(() => {
    const list = listRef.current
    const left = leftRef.current
    if (!list || !left) return
    const align = () => {
      const row = list.querySelectorAll('.me2-row')[PHOTO_ALIGN_ROW]
      if (!row) return
      const offset = list.getBoundingClientRect().bottom - row.getBoundingClientRect().bottom
      left.style.setProperty('--photo-offset', `${Math.max(0, offset)}px`)
    }
    align()
    const ro = new ResizeObserver(align)
    ro.observe(list)
    return () => ro.disconnect()
  }, [])
  return (
    <main className="me2-page has-cursor">
      <CustomCursor mode={cursorMode} />

      <header className="me2-header">
        <Link to="/" aria-label="Pari Gill — home">
          <span className="me2-wordmark" />
        </Link>
      </header>

      <section className="me2-body">
        <div className="me2-left" ref={leftRef}>
          <h1 className="me2-title">
            Product Designer + Engineer
            <span className="me2-subtitle">+ side quester</span>
          </h1>
          <AsciiReveal src={headshot} alt="Pari Gill" />
        </div>

        <ul className="me2-list" ref={listRef}>
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
