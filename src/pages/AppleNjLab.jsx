// SANDBOX COPY of the AppleNJ case study. Own route (/applenj-lab), own CSS
// (case-lab.css), own lab-case- prefixed classes. Reuses the shared AppleNJ
// content + emphasis data. Edit freely — nothing here touches the live case study.
import { useState, useEffect, useRef, Fragment } from 'react'
import { Link } from 'react-router-dom'
import applenj from '../data/case-applenj.js'
import RICH from '../data/rich-text.js'
import '../styles/case-lab.css'

// Looks up the Figma-extracted emphasis runs for a passage and renders them.
const richKey = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '')
function Rich({ text }) {
  if (!text) return null
  const marked = RICH[richKey(text)] || text
  const parts = marked.split('**')
  return <>{parts.map((p, i) => (i % 2 ? <strong key={i}>{p}</strong> : p))}</>
}

function Row({ row }) {
  if (row.pair) {
    return (
      <div className="lab-case-row lab-case-row--pair">
        {row.pair.map((col, i) => (
          <div key={i} className="lab-case-pair-col">
            {col.eyebrow && <p className="lab-case-eyebrow">{col.eyebrow}</p>}
            {col.body && <p className="lab-case-body"><Rich text={col.body} /></p>}
            {col.image && <img src={col.image} alt={col.eyebrow || ''} />}
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="lab-case-row">
      {row.eyebrow && <p className="lab-case-eyebrow">{row.eyebrow}</p>}
      <div className="lab-case-row-left">
        {row.statement && <p className="lab-case-statement"><Rich text={row.statement} /></p>}
      </div>
      <div className="lab-case-row-right">
        {row.body && <p className="lab-case-body"><Rich text={row.body} /></p>}
        {row.list && (
          <ol className="lab-case-body lab-case-olist">
            {row.list.map((item, i) => (
              <li key={i}><Rich text={item} /></li>
            ))}
          </ol>
        )}
      </div>
      {row.images && (
        <div className="lab-case-images">
          {row.images.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt || ''} style={img.w ? { width: `${(img.w / 1032) * 100}%` } : undefined} />
          ))}
        </div>
      )}
    </div>
  )
}

function OverviewGrid({ section }) {
  return (
    <div className="lab-case-overview">
      <h3 className="lab-case-heading lab-case-overview-heading">{section.heading}</h3>
      <div className="lab-case-ov-cols">
        {section.rows.map((row, i) => (
          <div key={i} className="lab-case-ov-col">
            <p className="lab-case-ov-label">{row.eyebrow}</p>
            {row.items ? (
              row.items.map(([a, b], j) => (
                <p key={j} className="lab-case-ov-item">
                  <strong>{a}</strong>
                  <span>{b}</span>
                </p>
              ))
            ) : (
              <p className="lab-case-ov-body"><Rich text={row.body} /></p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ASCII garden divider between sections. Three rows tall:
//   row +2 : flower blooms
//   row +1 : \|/ stems
//   row  0 : continuous grass baseline (exact \/\/\\\////\/\// pattern)
// Four flowers only, each rising 2 chars above the grass line. The strip
// measures its own width so the grass fills exactly and the four flowers
// land at fixed fractions across it (never clipped at the edges).
function CaseDivider() {
  const GREEN = '#6f9636' // grass + stems
  const CHAR = 9 // Roboto Mono advance width at 15px (~0.6em)
  const grassTile = ['\\', '/', '\\', '/', '\\', '\\', '\\', '/', '/', '/', '/', '\\', '/', '\\', '/', '/']
  const stem = '\\|/'
  // four blooms, spread at fractions of the full width
  const FLOWERS = [
    { frac: 0.16, bloom: '(*)', color: '#c9d67a' },
    { frac: 0.39, bloom: ' @ ', color: '#d1479a' },
    { frac: 0.62, bloom: 'vvv', color: '#e2591f' },
    { frac: 0.85, bloom: '’’’', color: '#e0629e' },
  ]
  const ref = useRef(null)
  const [cols, setCols] = useState(100)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const measure = () => setCols(Math.max(24, Math.floor(el.clientWidth / CHAR)))
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const row2 = Array.from({ length: cols }, () => ({ ch: ' ', c: null })) // blooms
  const row1 = Array.from({ length: cols }, () => ({ ch: ' ', c: null })) // stems
  FLOWERS.forEach((f) => {
    const at = Math.round(cols * f.frac)
    for (let k = 0; k < 3; k++) {
      const col = at - 1 + k
      if (col < 0 || col >= cols) continue
      if (f.bloom[k] !== ' ') row2[col] = { ch: f.bloom[k], c: f.color }
      if (stem[k] !== ' ') row1[col] = { ch: stem[k], c: GREEN }
    }
  })
  const grass = Array.from({ length: cols }, (_, i) => grassTile[i % grassTile.length]).join('')
  const cellSpans = (cells) =>
    cells.map((cell, i) => (
      <span key={i} style={cell.c ? { color: cell.c } : undefined}>
        {cell.ch}
      </span>
    ))
  return (
    <div className="lab-case-divider" aria-hidden="true" ref={ref}>
      <div className="lab-divider-row">{cellSpans(row2)}</div>
      <div className="lab-divider-row">{cellSpans(row1)}</div>
      <div className="lab-divider-row">
        <span style={{ color: GREEN }}>{grass}</span>
      </div>
    </div>
  )
}

// ASCII bunny eating a carrot, centered in the timeline's bottom corner.
function NavBunny() {
  const G = '#9a9a9a' // bunny
  const C = '#e2591f' // carrot body
  const L = '#6f9636' // carrot greens
  const lines = [
    [['  () ()', G]],
    [['  || ||', G]],
    [[' ( •.• )', G]],
    [[' /_vv_\\', G]],
    [['( ', G], ['<==', C], ['}', L], [' )', G]],
    [['(,,)_(,,)', G]],
  ]
  return (
    <div className="lab-case-bunny" aria-hidden="true">
      <div className="lab-case-bunny-art">
        {lines.map((segs, i) => (
          <div key={i}>
            {segs.map(([t, c], j) => (
              <span key={j} style={{ color: c }}>
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function Section({ section, num }) {
  return (
    <section className="lab-case-section" id={`s${num}`}>
      {section.layout === 'overview' ? (
        <OverviewGrid section={section} />
      ) : (
        <div className="lab-case-section-body">
          {section.heading && <h3 className="lab-case-heading">{section.heading}</h3>}
          {section.intro && <p className="lab-case-intro"><Rich text={section.intro} /></p>}
          {section.rows.map((row, i) => (
            <Row key={i} row={row} />
          ))}
        </div>
      )}
    </section>
  )
}

export default function AppleNjLab() {
  const data = applenj
  const [active, setActive] = useState(0)

  // scroll-spy: highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.id.slice(1)))
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    data.sections.forEach((_, i) => {
      const el = document.getElementById(`s${i}`)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [data])

  const go = (i) =>
    document.getElementById(`s${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <main className="lab-case">
      <div className="lab-case-shell">
        <aside className="lab-case-nav">
          <div className="lab-case-nav-inner">
            <Link to="/home-lab" className="lab-case-nav-home">
              <span aria-hidden="true">←</span> Home
            </Link>
            <nav className="lab-case-nav-list">
              {data.sections.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  className={`lab-case-nav-item${active === i ? ' is-active' : ''}`}
                  onClick={() => go(i)}
                >
                  {s.title}
                </button>
              ))}
            </nav>
            <NavBunny />
          </div>
        </aside>

        <div className="lab-case-main">
          <div className="lab-case-hero">
            <p className="lab-case-role">{data.role}</p>
            <div className="lab-case-hero-inner">
              <h1 className="lab-case-title">{data.name}</h1>
              <p className="lab-case-highlights">
                {data.heroHighlights.map((h, i) => (h ? <span key={i}>{h}<br /></span> : <br key={i} />))}
              </p>
              <img className="lab-case-hero-img" src={data.heroImage} alt={`${data.name} final design`} />
            </div>
            <p className="lab-case-scroll">scroll to explore</p>
          </div>

          <div className="lab-case-content">
            {data.sections.map((s, i) => (
              <Fragment key={i}>
                {i > 0 && <CaseDivider />}
                <Section section={s} num={i} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
