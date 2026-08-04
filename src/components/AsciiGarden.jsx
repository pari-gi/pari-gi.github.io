// The hero garden: Pari's reference painting converted into one continuous
// colored ASCII grid (see scratch img2ascii.py → src/data/garden-art.json).
// 300 cols x 91 rows of real text characters, rendered as color-run spans.
//
// The font size is measured at runtime rather than assumed: monospace advance
// widths differ between machines (SF Mono/Menlo ~0.6em, Consolas ~0.55em), so a
// hard-coded vw size leaves bare background where the art falls short. We size
// the text so the 300 columns span the container exactly, and publish the
// resulting art height as --ag-h so the container can match it with no overhang.
import { useEffect, useRef } from 'react'
import art from '../data/garden-art.json'
import '../styles/ascii-garden.css'

const LINE_HEIGHT = 1.05

const ROWS = art.lines.map((runs, r) => (
  <div className="ag-row" key={r}>
    {runs.map((run, i) => (run.c ? <span key={i} style={{ color: run.c }}>{run.t}</span> : run.t))}
  </div>
))

export default function AsciiGarden() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const fit = () => {
      const row = el.querySelector('.ag-row')
      const width = el.clientWidth
      if (!row || !width) return
      // measure the widest row at a known size, then scale to fill exactly
      el.style.setProperty('--ag-fs', '100px')
      const measured = row.scrollWidth
      if (!measured) return
      const size = (width / measured) * 100
      el.style.setProperty('--ag-fs', `${size}px`)
      const host = el.parentElement
      if (host) host.style.setProperty('--ag-h', `${art.rows * LINE_HEIGHT * size}px`)
    }
    fit()
    // re-fit once fonts settle, and whenever the container resizes
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit)
    const ro = new ResizeObserver(fit)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return <div className="ascii-garden" aria-hidden="true" ref={ref}>{ROWS}</div>
}
