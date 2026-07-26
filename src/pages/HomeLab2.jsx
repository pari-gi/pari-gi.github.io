// SANDBOX COPY #2 of the home page (/home-lab2). Same hero + sticky ASCII
// garden as /home-lab, but the case studies use the new V2 grid design
// (Figma "NEW HOME PAGE V2", node 4:791; hover-expand from node 4:919):
// a colored image banner that grows on hover, an Ibarra Real Nova title,
// a grey role, a Figtree description, and dark-green pills.
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AsciiGarden from '../components/AsciiGarden.jsx'
import hungieImg from '../assets/photos/v2-hungie.png'
import appleImg from '../assets/photos/v2-applenj.png'
import pitsImg from '../assets/photos/v2-pits.png'
import footerBunny from '../assets/photos/v2-footer-bunny.png'
import '../styles/home-lab.css'
import '../styles/home-lab2.css'

// ASCII grass strip (same as the case-study page dividers): grass baseline +
// four flowers on stems; measures its own width so it fills the footer.
function GrassDivider() {
  const GREEN = '#6f9636'
  const CHAR = 7.2 // Roboto Mono advance at 12px (~0.6em)
  const grassTile = ['\\', '/', '\\', '/', '\\', '\\', '\\', '/', '/', '/', '/', '\\', '/', '\\', '/', '/']
  const stem = '\\|/'
  // repeat the same four flowers across the whole width (a flower every 22 cols)
  const FLOWER_SET = [
    { bloom: '(*)', color: '#c9d67a' },
    { bloom: ' @ ', color: '#d1479a' },
    { bloom: 'vvv', color: '#e2591f' },
    { bloom: '’’’', color: '#e0629e' },
  ]
  const FLOWER_EVERY = 22
  const ref = useRef(null)
  const [cols, setCols] = useState(220)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const measure = () => setCols(Math.max(40, Math.floor(el.clientWidth / CHAR) + 3))
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  const row2 = Array.from({ length: cols }, () => ({ ch: ' ', c: null }))
  const row1 = Array.from({ length: cols }, () => ({ ch: ' ', c: null }))
  let fi = 0
  for (let at = 12; at < cols; at += FLOWER_EVERY) {
    const f = FLOWER_SET[fi % FLOWER_SET.length]
    fi += 1
    for (let k = 0; k < 3; k++) {
      const col = at - 1 + k
      if (col < 0 || col >= cols) continue
      if (f.bloom[k] !== ' ') row2[col] = { ch: f.bloom[k], c: f.color }
      if (stem[k] !== ' ') row1[col] = { ch: stem[k], c: GREEN }
    }
  }
  const grass = Array.from({ length: cols }, (_, i) => grassTile[i % grassTile.length]).join('')
  const cellSpans = (cells) =>
    cells.map((cell, i) => (
      <span key={i} style={cell.c ? { color: cell.c } : undefined}>
        {cell.ch}
      </span>
    ))
  return (
    <div className="lab2-grass" aria-hidden="true" ref={ref}>
      <div className="lab2-grass-row">{cellSpans(row2)}</div>
      <div className="lab2-grass-row">{cellSpans(row1)}</div>
      <div className="lab2-grass-row">
        <span style={{ color: GREEN }}>{grass}</span>
      </div>
    </div>
  )
}

// footer ASCII art (Figma "NEW FOOTER" 11:998)
const FOOTER_CAT = [
  "  _._      _,- '\"\"`-._",
  "(,-.  `._,'   (          |\\`-/|",
  "      `-. -'   \\   )-`( ,o o)",
  "                 `-       \\`_  `\"'-",
].join('\n')

// little flowers dropped along the mouse trail
const TRAIL = ['✿', '❀', '✾', '❁', '✽', '❃', '✤']
const TRAIL_COLORS = ['#ff5a8a', '#ff8a3d', '#ffd23d', '#c77bff', '#4aa3ff', '#9fe05a', '#ff6ec7']

// small ASCII critter tucked into the wordmark (Figma 4:800)
const CRITTER = `      (@_
 \\\\\\_ \\
<____)`

const BIO =
  'UMD Computer Science student turning messy problems into thoughtful products, especially where AI, design, and business overlap.'

// V2 case-study cards (Figma group order, 2-col grid)
const CARDS = [
  {
    title: 'Hungie',
    role: 'SOLO PRODUCT DESIGNER (FREELANCE)',
    href: '/hungie-lab',
    banner: '#ff9800',
    image: hungieImg,
    desc: 'Hungie’s entire value proposition depended on the credibility of its AI. When its algorithm felt arbitrary and unreliable, the product lost its usefulness, and its ability to retain users or succeed as a business.',
    pills: ['AI-HUMAN INTERACTION', 'BUSINESS REPOSITIONING'],
  },
  {
    title: 'AppleNJ',
    role: 'PRODUCT DESIGNER INTERN',
    href: '/applenj-lab',
    banner: '#a1c9eb',
    image: appleImg,
    desc: 'AppleNJ was effectively invisible with ONLY ~5 visits a month. I helped rebuild the division from the ground up through a new business model, product strategy, brand, and digital experience.',
    pills: ['BUSINESS REVIVAL', 'BRAND CREATION', 'PRODUCT STRATEGY'],
  },
  {
    title: 'Princeton IT Services',
    role: 'PRODUCT DESIGN INTERN',
    href: '/pits-lab',
    banner: '#6e87a6',
    image: pitsImg,
    desc: '70,000 monthly visitors, yet almost none converted. Redesigned the experience based around user research around conversion — surfacing all five divisions, clarifying the value proposition, and guiding users toward one focused CTA.',
    pills: ['USER RESEARCH', 'TRAFFIC CONVERSION'],
  },
  {
    title: 'National School Climate Center',
    role: 'PRODUCT DESIGNER',
    href: '#',
    banner: '#c9c9c9',
    image: null,
    desc: 'Brought in to audit and rescue an underperforming school climate platform. Overhauled the information architecture across 50+ screens, improved user flows to cut completion time in half, and designed a data dashboard.',
    pills: ['HOLD', 'HOLD'],
  },
  {
    title: 'The Children’s Cancer Foundation',
    role: 'PRODUCT DESIGNER',
    href: '#',
    banner: '#c9c9c9',
    image: null,
    desc: 'Redesigned grant portal behind $1m+ in annual cancer research funding: streamlined three distinct user flows into one coherent system that cut 25 hours of review time and 5 hours for applicants.',
    pills: ['HOLD', 'HOLD'],
  },
  {
    title: 'Princeton Pro AV',
    role: 'PRODUCT DESIGNER',
    href: '#',
    banner: '#c9c9c9',
    image: null,
    desc: 'hold',
    pills: ['HOLD', 'HOLD'],
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
  // pill when hovering a case study ('view') or a coming-soon card ('soon')
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

  // footer: the orange cat chases the mouse (jumps onto the cursor)
  const footerRef = useRef(null)
  const catRef = useRef(null)
  const chaseCat = (e) => {
    const footer = footerRef.current
    const cat = catRef.current
    if (!footer || !cat) return
    const fr = footer.getBoundingClientRect()
    const mx = e.clientX - fr.left
    const my = e.clientY - fr.top
    const homeCx = cat.offsetLeft + cat.offsetWidth / 2
    const homeCy = cat.offsetTop + cat.offsetHeight / 2
    cat.style.transform = `translate(${Math.round(mx - homeCx)}px, ${Math.round(my - homeCy)}px)`
  }
  const restCat = () => {
    if (catRef.current) catRef.current.style.transform = 'translate(0, 0)'
  }

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
          <a href="/#me">ME</a>
          <a href="/resume.pdf">RESUME</a>
          <a href="https://www.linkedin.com/in/pari-gill/">LINKEDIN</a>
          <Link to="/miscellany">MISCELLANY</Link>
        </nav>
        <p className="lab-hero-available">AVAIBLE FOR FREELANCE</p>
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

      <footer
        className="lab2-footer"
        ref={footerRef}
        onMouseEnter={() => setCursorMode('footer')}
        onMouseMove={chaseCat}
        onMouseLeave={() => {
          setCursorMode('default')
          restCat()
        }}
      >
        <p className="lab2-foot-quote">{'when life gives you lemons\nmake apple juice'}</p>
        <pre className="lab2-foot-cat" ref={catRef} aria-hidden="true">{FOOTER_CAT}</pre>
        <div className="lab2-foot-menu">
          <p className="lab2-foot-col-title">[MENU]</p>
          <a href="#work">WORK</a>
          <a href="/#me">ME!</a>
          <Link to="/miscellany">MISCELLANY</Link>
        </div>
        <div className="lab2-foot-contact">
          <p className="lab2-foot-col-title">[CONTACT]</p>
          <a href="/resume.pdf">RESUME</a>
          <a href="https://www.linkedin.com/in/pari-gill/">LINKEDIN</a>
        </div>
        <img className="lab2-foot-bunny" src={footerBunny} alt="" />
        <div className="lab2-foot-band">
          <GrassDivider />
        </div>
      </footer>
    </main>
  )
}
