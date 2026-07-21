// SANDBOX COPY of the AppleNJ case study. Own route (/applenj-lab), own CSS
// (case-lab.css), own lab-case- prefixed classes. Reuses the shared AppleNJ
// content + emphasis data. Edit freely — nothing here touches the live case study.
import { useState, useEffect } from 'react'
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
      <div className="lab-case-overview-panels">
        {section.rows.map((row, i) => (
          <div key={i} className="lab-case-panel">
            <p className="lab-case-panel-title">{row.eyebrow}</p>
            {row.items ? (
              row.items.map(([a, b], j) => (
                <p key={j} className="lab-case-panel-item">
                  <strong>{a}</strong>
                  <span>{b}</span>
                </p>
              ))
            ) : (
              <p className="lab-case-body"><Rich text={row.body} /></p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function Section({ section, num }) {
  return (
    <section className="lab-case-section" id={`s${num}`}>
      <p className="lab-case-section-label">{section.title}</p>
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
            <p className="lab-case-nav-name">Pari Gill</p>
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
              <Section key={i} section={s} num={i} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
