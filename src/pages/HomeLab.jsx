// SANDBOX COPY of the home page. Own route (/home-lab), own CSS (home-lab.css).
// The decorative scenery lives in <AsciiGarden/>; this file keeps the hero
// content (wordmark, nav, intro), the mouse flower-trail, and the cursor.
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import wordmark from '../assets/svg/wordmark.svg'
import AsciiGarden from '../components/AsciiGarden.jsx'
import '../styles/home-lab.css'

// little flowers dropped along the mouse trail
const TRAIL = ['✿', '❀', '✾', '❁', '✽', '❃', '✤']
const TRAIL_COLORS = ['#ff5a8a', '#ff8a3d', '#ffd23d', '#c77bff', '#4aa3ff', '#9fe05a', '#ff6ec7']

export default function HomeLab() {
  // flower trail that follows the mouse
  const [trail, setTrail] = useState([])
  const fieldRef = useRef(null)
  const lastRef = useRef({ x: -999, y: -999 })
  const idRef = useRef(0)
  const handleMove = (e) => {
    const el = fieldRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const dx = x - lastRef.current.x
    const dy = y - lastRef.current.y
    if (dx * dx + dy * dy < 26 * 26) return
    lastRef.current = { x, y }
    const id = idRef.current++
    const item = { id, x, y, char: TRAIL[id % TRAIL.length], color: TRAIL_COLORS[id % TRAIL_COLORS.length] }
    setTrail((t) => [...t, item])
    setTimeout(() => setTrail((t) => t.filter((f) => f.id !== id)), 1700)
  }

  return (
    <main>
      <section className="lab-field" ref={fieldRef} onMouseMove={handleMove}>
        <AsciiGarden />

        <header className="lab-field-header">
          <Link to="/home-lab" aria-label="Pari Gill — home">
            <img className="lab-field-wordmark" src={wordmark} alt="PARI GILL" />
          </Link>
          <nav className="lab-field-nav">
            <Link to="/home-lab">work</Link>
            <a href="/#me">me</a>
            <a href="/resume.pdf">resume</a>
            <Link to="/miscellany">miscellany</Link>
          </nav>
        </header>

        <div className="lab-field-intro">
          <p>i like adventures.</p>
          <p>i like toasty candles, hazelnut coffee, and hiking.</p>
          <p className="lab-field-intro-bold">also i am a computer science student at umd.</p>
          <p>enjoy my portfolio. i like designing.</p>
        </div>

        {trail.map((f) => (
          <span key={f.id} className="lab-trail-flower" style={{ left: f.x, top: f.y, color: f.color }} aria-hidden="true">
            {f.char}
          </span>
        ))}
      </section>
    </main>
  )
}
