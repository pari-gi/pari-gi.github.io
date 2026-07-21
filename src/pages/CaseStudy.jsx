import { useState } from 'react'
import applenj from '../data/case-applenj.js'
import pits from '../data/case-pits.js'
import hungie from '../data/case-hungie.js'
import RICH from '../data/rich-text.js'
import '../styles/case.css'

const CASES = { applenj, pits, hungie }

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
      <div className="case-row case-row--pair">
        {row.pair.map((col, i) => (
          <div key={i} className="case-pair-col">
            {col.eyebrow && <p className="case-eyebrow">{col.eyebrow}</p>}
            {col.body && <p className="case-body"><Rich text={col.body} /></p>}
            {col.image && <img src={col.image} alt={col.eyebrow || ''} />}
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="case-row">
      {row.eyebrow && <p className="case-eyebrow">{row.eyebrow}</p>}
      <div className="case-row-left">
        {row.statement && <p className="case-statement"><Rich text={row.statement} /></p>}
      </div>
      <div className="case-row-right">
        {row.body && <p className="case-body"><Rich text={row.body} /></p>}
      </div>
      {row.images && (
        <div className="case-images">
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
    <div className="case-overview">
      <h3 className="case-heading case-overview-heading">{section.heading}</h3>
      <div className="case-overview-panels">
        {section.rows.map((row, i) => (
          <div key={i} className="case-panel">
            <p className="case-panel-title">{row.eyebrow}</p>
            {row.items ? (
              row.items.map(([a, b], j) => (
                <p key={j} className="case-panel-item">
                  <strong>{a}</strong>
                  <span>{b}</span>
                </p>
              ))
            ) : (
              <p className="case-body"><Rich text={row.body} /></p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function Section({ section, num, open, onToggle }) {
  return (
    <section className="case-section" id={`s${num}`}>
      <button className="case-section-head" onClick={onToggle} aria-expanded={open}>
        <span className="case-num">{num}</span>
        <span className="case-section-title">{section.title}</span>
        <span className="case-chevron">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="case-section-body">
          {section.layout === 'overview' ? (
            <OverviewGrid section={section} />
          ) : (
            <>
              {section.heading && <h3 className="case-heading">{section.heading}</h3>}
              {section.intro && <p className="case-intro"><Rich text={section.intro} /></p>}
              {section.rows.map((row, i) => (
                <Row key={i} row={row} />
              ))}
            </>
          )}
        </div>
      )}
    </section>
  )
}

export default function CaseStudy({ slug }) {
  const data = CASES[slug]
  const [open, setOpen] = useState(() => new Set([0]))
  const toggle = (i) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  return (
    <main className="case">
      <div className="case-hero">
        <p className="case-role">{data.role}</p>
        <div className="case-hero-inner">
          <h1 className="case-title">{data.name}</h1>
          <p className="case-highlights">
            {data.heroHighlights.map((h, i) => (h ? <span key={i}>{h}<br /></span> : <br key={i} />))}
          </p>
          <img className="case-hero-img" src={data.heroImage} alt={`${data.name} final design`} />
        </div>
        <p className="case-scroll">scroll to explore</p>
      </div>
      <div className="case-sections">
        {data.sections.map((s, i) => (
          <Section key={i} section={s} num={i} open={open.has(i)} onToggle={() => toggle(i)} />
        ))}
      </div>
    </main>
  )
}
