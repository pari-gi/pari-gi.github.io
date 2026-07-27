// The main home page (route: /). Hero + sticky ASCII garden, the V2
// case-study grid (Figma "NEW HOME PAGE V2" 4:791, hover from 4:919),
// custom cursor, and the shared FooterLab.
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AsciiGarden from '../components/AsciiGarden.jsx'
import FooterLab from '../components/FooterLab.jsx'
import hungieImg from '../assets/photos/v2-hungie.png'
import appleImg from '../assets/photos/v2-applenj.png'
import pitsImg from '../assets/photos/v2-pits.png'
import nsccImg from '../assets/photos/v2-nscc.png'
import ccfImg from '../assets/photos/v2-ccf.png'
import proavImg from '../assets/photos/v2-proav.png'
import '../styles/home-lab.css'
import '../styles/home-lab2.css'

// little flowers dropped along the mouse trail
const TRAIL = ['✿', '❀', '✾', '❁', '✽', '❃', '✤']
const TRAIL_COLORS = ['#ff5a8a', '#ff8a3d', '#ffd23d', '#c77bff', '#4aa3ff', '#9fe05a', '#ff6ec7']

// small ASCII critter tucked into the wordmark (Figma 4:800)
const CRITTER = `      (@_
 \\\\\\_ \\
<____)`

const BIO =
  'CS & Entrepreneurship @ UMD, turning messy problems into thoughtful products, especially where AI, design, and business overlap.'

// V2 case-study cards (Figma group order, 2-col grid)
const CARDS = [
  {
    title: 'Hungie',
    role: 'SOLO PRODUCT DESIGNER (FREELANCE)',
    href: '/hungie',
    banner: '#ff9800',
    image: hungieImg,
    desc: 'Hungie’s entire value proposition depended on the credibility of its AI. When its algorithm felt arbitrary and unreliable, the product lost its usefulness, and its ability to retain users or succeed as a business.',
    pills: ['AI-HUMAN INTERACTION', 'BUSINESS REPOSITIONING'],
  },
  {
    title: 'AppleNJ',
    role: 'PRODUCT DESIGNER INTERN',
    href: '/applenj',
    banner: '#a1c9eb',
    image: appleImg,
    desc: 'AppleNJ was effectively invisible with ONLY ~5 visits a month. I helped rebuild the division from the ground up through a new business model, product strategy, brand, and digital experience.',
    pills: ['BUSINESS REVIVAL', 'BRAND CREATION', 'PRODUCT STRATEGY'],
  },
  {
    title: 'Princeton IT Services',
    role: 'PRODUCT DESIGN INTERN',
    href: '/pits',
    banner: '#6e87a6',
    image: pitsImg,
    desc: '70,000 monthly visitors, yet almost none converted. Redesigned the experience based around user research around conversion — surfacing all five divisions, clarifying the value proposition, and guiding users toward one focused CTA.',
    pills: ['USER RESEARCH', 'TRAFFIC CONVERSION'],
  },
  {
    title: 'National School Climate Center',
    role: 'PRODUCT DESIGNER',
    href: '#',
    banner: '#f59e1f',
    image: nsccImg,
    desc: 'Brought in to audit and rescue an underperforming school climate platform. Overhauled the information architecture across 50+ screens, improved user flows to cut completion time in half, and designed a data dashboard.',
    pills: ['PRODUCT RESCUE', 'WORKFLOW OPTIMIZATION'],
  },
  {
    title: 'The Children’s Cancer Foundation',
    role: 'PRODUCT DESIGNER',
    href: '#',
    banner: '#f0c567',
    image: ccfImg,
    desc: 'Redesigned grant portal behind $1m+ in annual cancer research funding: streamlined three distinct user flows into one coherent system that cut 25 hours of review time and 5 hours for applicants.',
    pills: ['USER FLOW', 'INFORMATION ARCHITECTURE'],
  },
  {
    title: 'Princeton Pro AV',
    role: 'PRODUCT DESIGNER',
    href: '#',
    banner: '#d7dde9',
    image: proavImg,
    desc: 'hold',
    pills: ['160+ WIREFRAMINGS', 'MARKET + PRODUCT RESEARCH'],
  },
]

export default function HomeLab2() {
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

  // custom cursor: an olive circle that follows the mouse and expands into a
  // pill when hovering a case study ('view'), a coming-soon card ('soon'),
  // or the footer ('footer' — the brown cat the orange cat chases)
  const cursorRef = useRef(null)
  const [cursorMode, setCursorMode] = useState('default')
  useEffect(() => {
    const move = (e) => {
      const el = cursorRef.current
      if (el) {
        el.style.left = `${e.clientX}px`
        el.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <main className="lab2-page">
      <div ref={cursorRef} className={`lab2-cursor lab2-cursor--${cursorMode}`} aria-hidden="true">
        <span className="lab2-cursor-text">
          {cursorMode === 'footer'
            ? '~~( ε :>'
            : cursorMode === 'soon'
              ? 'ʚїɞ    coming soon'
              : '<:3 )~~    view case study'}
        </span>
      </div>

      <section className="lab-hero">
        <nav className="lab-hero-nav">
          <a href="#work">WORK</a>
          <Link to="/miscellany">ME</Link>
          <a href="/resume.pdf">RESUME</a>
          <a href="https://www.linkedin.com/in/pari-gill/">LINKEDIN</a>
          <Link to="/miscellany">MISCELLANY</Link>
        </nav>
        <p className="lab-hero-available">AVAILABLE FOR FREELANCE</p>
        <p className="lab-hero-tagline">Great design turns information into experience</p>
        <h1 className="lab-hero-wordmark">Pari Gill</h1>
        <p className="lab-hero-bio">{BIO}</p>
        <pre className="lab-hero-critter" aria-hidden="true">{CRITTER}</pre>
      </section>

      <section className="lab-work-track" id="work">
        <div className="lab-field lab-work-bg" ref={fieldRef} onMouseMove={handleMove}>
          <AsciiGarden />
          {trail.map((f) => (
            <span key={f.id} className="lab-trail-flower" style={{ left: f.x, top: f.y, color: f.color }} aria-hidden="true">
              {f.char}
            </span>
          ))}
        </div>

        <div className="lab2-cards">
          {CARDS.map((c) => (
            <Link
              key={c.title}
              to={c.href}
              className="lab2-card"
              onMouseEnter={() => setCursorMode(c.href === '#' ? 'soon' : 'view')}
              onMouseLeave={() => setCursorMode('default')}
            >
              <div className="lab2-header">
                <div className="lab2-banner" style={{ background: c.banner }}>
                  {c.image && <img src={c.image} alt="" />}
                </div>
              </div>
              <div className="lab2-body">
                <div className="lab2-head">
                  <h3 className="lab2-title">{c.title}</h3>
                  <span className="lab2-role">{c.role}</span>
                </div>
                <p className="lab2-desc">{c.desc}</p>
                <div className="lab2-spacer" />
                <div className="lab2-pills">
                  {c.pills.map((p, i) => (
                    <span key={i} className="lab2-pill">{p}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FooterLab
        onCursorEnter={() => setCursorMode('footer')}
        onCursorLeave={() => setCursorMode('default')}
      />
    </main>
  )
}
