// The Me page (route: /me) — transcribed from Figma "Me" (node 28:791).
// A typographic stack of roles, each line with its own face, size and colour.
// The frame is 1514px wide; every offset below is the Figma px converted to vw
// so the whole composition scales the way the home hero does.
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import CustomCursor from '../components/CustomCursor.jsx'
import FooterLab from '../components/FooterLab.jsx'
import '../styles/me.css'

// x/y/size/line-height are Figma px; `face` maps to a class in me.css
const ROLES = [
  { t: 'Product Designer @ Hungie', y: 249, size: 53, lh: 73, face: 'serif', color: '#a1b549' },
  { t: 'President @ UMD Indian Student Association', y: 325, size: 28, lh: 41, face: 'sans', color: '#23371a', upper: true },
  { t: 'Product Designer @ National School Climate Center', y: 377, size: 25, lh: 32, face: 'mono', color: '#53707b', upper: true },
  { t: 'Software engineer @ Breastfeeding Center of Greater Washington', y: 421, size: 19, lh: 27, face: 'sans', color: '#566f31', upper: true },
  { t: 'Google UX Design Certificate', y: 453, size: 51, lh: 69, face: 'serif', color: '#a1b549' },
  { t: 'Product Designer Intern @ AppleNJ', y: 525, size: 35, lh: 51, face: 'sans', color: '#372f24', upper: true },
  { t: 'Product Designer Intern @ Princeton IT Services', y: 582, size: 26, lh: 33, face: 'mono', color: '#23371a', upper: true },
  { t: 'Design Psychology Certificate', y: 621, size: 41, lh: 59, face: 'sans', color: '#a1b549', upper: true },
  { t: 'UI/UX Designer @ Children’s Cancer Foundation', y: 678, size: 30, lh: 41, face: 'serif', color: '#372f24' },
  { t: 'Designer & Software Engineer @ Hack4Impact', y: 726, size: 28, lh: 37, face: 'mono', color: '#372f24', upper: true },
  { t: 'sister @ Alpha Omega Epsilon, Professional Engineering Sorority', y: 776, size: 19, lh: 27, face: 'sans', color: '#566f31', upper: true },
  { t: 'Business Analyst @ Consult Your Community', y: 805, size: 33, lh: 45, face: 'serif', color: '#23371a' },
  { t: 'MIT Beaver Works Summer Institute, Cyber Security in Software Systems', y: 861, size: 17, lh: 22, face: 'mono', color: '#53707b', upper: true },
  { t: 'Founder & Business Owner @ Etsy', y: 876, size: 43, lh: 58, face: 'serif', color: '#566f31' },
]

const FRAME = 1514
const ROLE_X = 401 // left edge of every line, per Figma
const ROLE_W = 720 // and they all fill the same 720px box, so the right edges line up
const vw = (px) => `${(px / FRAME) * 100}vw`

export default function Me() {
  const [cursorMode, setCursorMode] = useState('default')
  // the roles land in their own colours, then settle to a muted grey-green;
  // hovering a line brings its colour back
  const [settled, setSettled] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setSettled(true), 900)
    return () => clearTimeout(t)
  }, [])

  // Every line fills the same 720px box in the design — that is why the sizes
  // vary so much. Fonts render at different widths than Figma's, so measure
  // each line and nudge its size until the right edges align exactly.
  const frameRef = useRef(null)
  const [sizes, setSizes] = useState(null)
  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return
    const fit = () => {
      const scale = frame.clientWidth / FRAME
      if (!scale) return
      const target = ROLE_W * scale
      const next = []
      frame.querySelectorAll('.me-role').forEach((el, i) => {
        // measure sub-pixel and refine: font metrics don't scale perfectly
        // linearly, so one pass leaves a few px of raggedness
        let size = ROLES[i].size * scale
        for (let pass = 0; pass < 3; pass++) {
          el.style.fontSize = `${size}px`
          const natural = el.getBoundingClientRect().width
          if (!natural) break
          size *= target / natural
        }
        next.push(`${size}px`)
      })
      // keep the fitted sizes in state, or a re-render would reset them
      setSizes(next)
    }
    fit()
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit)
    const ro = new ResizeObserver(fit)
    ro.observe(frame)
    return () => ro.disconnect()
  }, [])
  return (
    <main className="me-page has-cursor">
      <CustomCursor mode={cursorMode} />

      <section className={`me-frame${settled ? ' is-settled' : ''}`} ref={frameRef}>
        <Link to="/" aria-label="Pari Gill — home" className="me-wordmark-link">
          <span className="me-wordmark" />
        </Link>
        <nav className="me-nav">
          <Link to="/">WORK</Link>
          <Link to="/me">ME</Link>
          <a href="/resume.pdf">RESUME</a>
          <a href="https://www.linkedin.com/in/pari-gill/">LINKEDIN</a>
          <Link to="/miscellany">MISCELLANY</Link>
        </nav>

        {ROLES.map((r, i) => (
          <p
            key={i}
            className={`me-role me-role--${r.face}${r.upper ? ' me-role--upper' : ''}`}
            style={{
              top: vw(r.y),
              fontSize: sizes ? sizes[i] : vw(r.size),
              lineHeight: vw(r.lh),
              '--c': r.color,
            }}
          >
            {r.t}
          </p>
        ))}
      </section>

      <FooterLab
        onCursorEnter={() => setCursorMode('footer')}
        onCursorLeave={() => setCursorMode('default')}
      />
    </main>
  )
}
