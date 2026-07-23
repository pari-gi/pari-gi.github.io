// SANDBOX COPY of the home page. Own route (/home-lab), own CSS (home-lab.css).
// New hero transcribed from Figma "NEW HOME PAGE" (node 2:791, 1512px frame);
// positions/sizes are the Figma x/y/px converted to vw. Below it the ASCII
// garden pins as a sticky background while the case-study cards scroll over it.
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import AsciiGarden from '../components/AsciiGarden.jsx'
// hungie
import hungie1 from '../assets/photos/image_143__70444b1d.jpg'
import hungie2 from '../assets/photos/image_144__9b65e085.jpg'
import hungie3 from '../assets/photos/image_138__33fa163f.jpg'
// applenj
import apple1 from '../assets/photos/image_137__57894271.png'
import apple2 from '../assets/photos/Landing_Page__(iteration_5)_1__70b36c63.jpg'
import apple3 from '../assets/photos/apple.tech365.io__(1)_3__828440ed.jpg'
// pits
import pits1 from '../assets/photos/image_105__66d2f9be.jpg'
import pits2 from '../assets/photos/image_91__0913c1c4.jpg'
import pits3 from '../assets/photos/image_86__7b20efd4.jpg'
import '../styles/home-lab.css'

// little flowers dropped along the mouse trail
const TRAIL = ['✿', '❀', '✾', '❁', '✽', '❃', '✤']
const TRAIL_COLORS = ['#ff5a8a', '#ff8a3d', '#ffd23d', '#c77bff', '#4aa3ff', '#9fe05a', '#ff6ec7']

// small ASCII critter tucked into the wordmark (Figma 2:811)
const CRITTER = `      (@_
 \\\\\\_ \\
<____)`

const BIO =
  'Computer Science student at UMD\nwho likes solving problems and loves to design, specializing in AI design & business needs.'

// case-study cards over the garden. Hungie's copy + pills come from the Figma
// (group 2:793); the other two reuse each case study's own overview wording.
const CARDS = [
  {
    slug: 'hungie',
    href: '/hungie-lab',
    label: 'HUNGIE',
    desc: 'Hungie was built around AI, but without users’ trust in it, the product’s value collapsed.\n\nI reshaped the product strategy and redesigned the experience to make the AI feel intelligent, personalized, and responsive rather than random — bringing the algorithm’s reasoning and adaptability from the back end to the front end so users could understand and trust the product.',
    pills: ['AI', 'BUSINESS REPOSITIONING', 'SOLO DESIGNER FREELANCE'],
    images: [hungie1, hungie2, hungie3],
  },
  {
    slug: 'applenj',
    href: '/applenj-lab',
    label: 'APPLENJ',
    desc: 'A dead division of the business. ONLY ~5 visits a month, no leads, no revenue.\n\nRepositioned it from an “Apple Authorized reseller” into a full-service IT partner — one that handles setup, software, custom packages, and lifelong support, not just selling devices.',
    pills: ['BUSINESS STRATEGY', 'USER RESEARCH & TESTING', 'PRODUCT DESIGN INTERN'],
    images: [apple1, apple2, apple3],
  },
  {
    slug: 'pits',
    href: '/pits-lab',
    label: 'PRINCETON IT SERVICES',
    desc: '70,000 monthly visitors and almost none converting. The homepage buried five business subdivisions and gave enterprise buyers no clear path to act.\n\nA redesigned, conversion-focused homepage — horizontal flip cards surfacing all five subdivisions at once, a clear value proposition, and one focused CTA.',
    pills: ['USER RESEARCH & TESTING', 'DATA DRIVEN DESIGN', 'PRODUCT DESIGN INTERN'],
    images: [pits1, pits2, pits3],
  },
]

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
      <section className="lab-hero">
        {/* paint order matches Figma: wordmark sits under the bio + critter */}
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

      {/* the garden pins here while the cards scroll past it */}
      <section className="lab-work-track" id="work">
        <div className="lab-field lab-work-bg" ref={fieldRef} onMouseMove={handleMove}>
          <AsciiGarden />

          {trail.map((f) => (
            <span key={f.id} className="lab-trail-flower" style={{ left: f.x, top: f.y, color: f.color }} aria-hidden="true">
              {f.char}
            </span>
          ))}
        </div>

        <div className="lab-work-cards">
          {CARDS.map((c) => (
            <Link key={c.slug} to={c.href} className="lab-work-card">
              <p className="lab-work-label">{c.label}</p>
              <p className="lab-work-desc">{c.desc}</p>
              <div className="lab-work-pills">
                {c.pills.map((p) => (
                  <span key={p} className="lab-work-pill">{p}</span>
                ))}
              </div>
              {c.images.map((src, i) => (
                <img key={i} className={`lab-work-img lab-work-img--${i + 1}`} src={src} alt="" />
              ))}
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
