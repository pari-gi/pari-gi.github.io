// Shared site footer (Figma "NEW FOOTER" 11:998), used on every page.
// The orange ASCII cat chases the mouse (with lag, trailing left of the
// cursor); the bottom edge is the ASCII grass strip from the case-study
// dividers, tiled across the full width.
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import footerBunny from '../assets/photos/v2-footer-bunny.png'
import '../styles/footer-lab.css'

// footer ASCII cat (Figma 11:981)
const FOOTER_CAT = [
  "  _._      _,- '\"\"`-._",
  "(,-.  `._,'   (          |\\`-/|",
  "      `-. -'   \\   )-`( ,o o)",
  "                 `-       \\`_  `\"'-",
].join('\n')

// ASCII grass strip (same as the case-study page dividers): grass baseline +
// flowers on stems, tiled across the whole footer width.
function GrassDivider() {
  const GREEN = '#6f9636'
  const CHAR = 7.2 // Roboto Mono advance at 12px (~0.6em)
  const grassTile = ['\\', '/', '\\', '/', '\\', '\\', '\\', '/', '/', '/', '/', '\\', '/', '\\', '/', '/']
  const stem = '\\|/'
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

// onCursorEnter/onCursorLeave: optional hooks for pages with a custom cursor
export default function FooterLab({ onCursorEnter, onCursorLeave }) {
  const footerRef = useRef(null)
  const catRef = useRef(null)
  // The cat chases the mouse on a rAF loop rather than a CSS transition:
  // re-triggering a transition on every mousemove is what made it stutter.
  // Each frame it eases a fraction of the way toward the pointer, so it
  // trails smoothly and never quite catches up.
  const target = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })
  const raf = useRef(null)
  const chasing = useRef(false)

  useEffect(() => () => cancelAnimationFrame(raf.current), [])

  const tick = () => {
    const cat = catRef.current
    if (!cat) return
    const p = pos.current
    const t = target.current
    p.x += (t.x - p.x) * 0.075
    p.y += (t.y - p.y) * 0.075
    cat.style.transform = `translate(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px)`
    const settled = Math.abs(t.x - p.x) < 0.4 && Math.abs(t.y - p.y) < 0.4
    if (!chasing.current && settled) {
      raf.current = null
      return
    }
    raf.current = requestAnimationFrame(tick)
  }

  const start = () => {
    chasing.current = true
    if (!raf.current) raf.current = requestAnimationFrame(tick)
  }

  const chaseCat = (e) => {
    const footer = footerRef.current
    const cat = catRef.current
    if (!footer || !cat) return
    const fr = footer.getBoundingClientRect()
    const homeCx = cat.offsetLeft + cat.offsetWidth / 2
    const homeCy = cat.offsetTop + cat.offsetHeight / 2
    // sit ~150px to the left of the cursor
    target.current = {
      x: e.clientX - fr.left - 150 - homeCx,
      y: e.clientY - fr.top - homeCy,
    }
    start()
  }

  const restCat = () => {
    chasing.current = false
    target.current = { x: 0, y: 0 }
    if (!raf.current) raf.current = requestAnimationFrame(tick)
  }

  return (
    <footer
      className="lab2-footer"
      ref={footerRef}
      onMouseEnter={onCursorEnter}
      onMouseMove={chaseCat}
      onMouseLeave={() => {
        if (onCursorLeave) onCursorLeave()
        restCat()
      }}
    >
      <p className="lab2-foot-quote">{'when life gives you lemons\nmake apple juice'}</p>
      <pre className="lab2-foot-cat" ref={catRef} aria-hidden="true">{FOOTER_CAT}</pre>
      <div className="lab2-foot-menu">
        <p className="lab2-foot-col-title">[MENU]</p>
        <Link to="/">WORK</Link>
        <Link to="/miscellany">ME!</Link>
        <Link to="/miscellany">MISCELLANY</Link>
      </div>
      <div className="lab2-foot-contact">
        <p className="lab2-foot-col-title">[CONTACT]</p>
        <a href="/resume.pdf">RESUME</a>
        <a href="https://www.linkedin.com/in/pari-gill/">LINKEDIN</a>
        <a href="mailto:pari.r.gill@gmail.com">EMAIL</a>
      </div>
      <img className="lab2-foot-bunny" src={footerBunny} alt="" />
      <div className="lab2-foot-band">
        <GrassDivider />
      </div>
    </footer>
  )
}
