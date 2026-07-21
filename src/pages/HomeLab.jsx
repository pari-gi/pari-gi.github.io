// SANDBOX COPY of the home page. Own route (/home-lab), own CSS (home-lab.css).
// Edit freely — nothing here touches the live Landing page.
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import wordmark from '../assets/svg/wordmark.svg'
import '../styles/home-lab.css'

// bright bloom / animal palette
const BRIGHTS = ['#ff3b3b', '#ff8a1f', '#ffe23d', '#c1ff3d', '#3dffa0', '#2fe3d0', '#3ea8ff', '#c15bff', '#ff3ea5', '#ff8fd0']

// flowers: bright bloom lines + dark-green stem lines (tulip / daisy / bud, per reference)
const FLOWER_VARIANTS = [
  { bloom: 'UUU\n(_)', stem: '\\|/\n^^^' },
  { bloom: '~Y~', stem: '\\|/\n^^^^' },
  { bloom: 'U', stem: 'Y\n^^^' },
  { bloom: '@@@\n\\@/', stem: ' | \n^^^' },
]

// animals: single bright colour, cycle in place across 3–4 frames
const ANIMALS = {
  bunny: { color: '#fffdf5', frames: ['(\\(\\\n( o.o)\no_(")(")', '(\\(\\\n( -.-)\no_(")(")', '(\\(\\\n( o.o)\n o(")(")'] },
  duck: { color: '#ffe23d', frames: [' __\n(o >\n \\_)', ' __\n(O >\n \\_)', ' __\n(o >\n _/)'] },
  deer: { color: '#ff8a1f', frames: [' \\|/|/\n (o o)\n /|_|\\\n  " "', ' \\|/|/\n (- -)\n /|_|\\\n  " "', ' \\|/|/\n (o o)\n /|_|\\\n  \' \''] },
  cat: { color: '#ff9a3d', frames: [' /\\_/\\\n( o.o )\n > ^ <', ' /\\_/\\\n( -.- )\n > ^ <', ' /\\_/\\\n( o.o )\n > w <'] },
  frog: { color: '#3dffa0', frames: ['(o)(o)\n (--)\n ~^~', '(-)(-)\n (--)\n ~^~', '(o)(o)\n (oo)\n ~^~'] },
  mouse: { color: '#ff8fd0', frames: ['<:3 )~', '<:3 )~~', '<:3 )^'] },
  chick: { color: '#ffe23d', frames: [' (o<\n /|\\\n ^ ^', ' (o<\n /|\\\n ^^ ', ' (-<\n /|\\\n ^ ^'] },
  butterfly: { color: '#c15bff', frames: [' ^ ^\n(>|<)', ' ^ ^\n(<|>)'] },
}
const ANIMAL_KEYS = Object.keys(ANIMALS)

// deterministic scatter so the field is stable across renders
function mulberry32(a) {
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
// flip to true to bring the ASCII grassland back
const SHOW_ASCII = true
const rng = mulberry32(20260721)
const rand = (min, max) => min + rng() * (max - min)
const pick = (arr) => arr[Math.floor(rng() * arr.length)]
// keep a clear zone behind the intro text (upper-right of the long page)
const inTextZone = (top, left) => top > 7 && top < 24 && left > 38 && left < 94

function scatter(n) {
  const out = []
  let guard = 0
  while (out.length < n && guard < n * 30) {
    guard++
    const top = rand(2, 97)
    const left = rand(2, 94)
    if (inTextZone(top, left)) continue
    out.push({ top, left })
  }
  return out
}

const FLOWERS = scatter(64).map((p, i) => ({
  ...p,
  variant: FLOWER_VARIANTS[Math.floor(rng() * FLOWER_VARIANTS.length)],
  color: pick(BRIGHTS),
  sway: (4 + rng() * 4).toFixed(2),
}))
const CRITTERS = scatter(30).map((p, i) => ({ ...p, kind: ANIMAL_KEYS[i % ANIMAL_KEYS.length] }))
const BIRDS = Array.from({ length: 8 }, (_, i) => ({
  top: rand(3, 94),
  color: pick(BRIGHTS),
  duration: (16 + rng() * 14).toFixed(1),
  delay: (-(rng() * 22)).toFixed(1),
  frames: i % 2 ? ['/-\\', '\\-/'] : ['\\-/', '/-\\'],
}))

function useFrame(length, period, reduced) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => setI((n) => (n + 1) % length), period)
    return () => clearInterval(id)
  }, [length, period, reduced])
  return i
}

function Flower({ variant, color, top, left, sway }) {
  return (
    <pre className="lab-field-flower" style={{ top: `${top}%`, left: `${left}%`, animationDuration: `${sway}s` }} aria-hidden="true">
      <span style={{ color }}>{variant.bloom}</span>
      {'\n'}
      <span className="lab-field-stem">{variant.stem}</span>
    </pre>
  )
}

function Critter({ kind, top, left, period, reduced }) {
  const { color, frames } = ANIMALS[kind]
  const i = useFrame(frames.length, period, reduced)
  return (
    <pre className="lab-field-critter" style={{ top: `${top}%`, left: `${left}%`, color }} aria-hidden="true">
      {frames[i]}
    </pre>
  )
}

function Bird({ frames, color, top, duration, delay, reduced }) {
  const i = useFrame(frames.length, 260, reduced)
  return (
    <pre className="lab-field-bird" style={{ top: `${top}%`, color, animationDuration: `${duration}s`, animationDelay: `${delay}s` }} aria-hidden="true">
      {frames[i]}
    </pre>
  )
}

export default function HomeLab() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  return (
    <main>
      <section className="lab-field">
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
        {SHOW_ASCII && FLOWERS.map((f, i) => (
          <Flower key={`f${i}`} variant={f.variant} color={f.color} top={f.top} left={f.left} sway={f.sway} />
        ))}
        {SHOW_ASCII && CRITTERS.map((cr, i) => (
          <Critter key={`c${i}`} kind={cr.kind} top={cr.top} left={cr.left} period={500 + (i % 5) * 150} reduced={reduced} />
        ))}
        {SHOW_ASCII && BIRDS.map((b, i) => (
          <Bird key={`b${i}`} frames={b.frames} color={b.color} top={b.top} duration={b.duration} delay={b.delay} reduced={reduced} />
        ))}
        <div className="lab-field-intro">
          <p>i like adventures.</p>
          <p>i like toasty candles, hazelnut coffee, and hiking.</p>
          <p className="lab-field-intro-bold">also i am a computer science student at umd.</p>
          <p>enjoy my portfolio. i like designing</p>
        </div>
      </section>
    </main>
  )
}
