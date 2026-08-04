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

// cover: fill the container's height as well as its width (used behind the
// sticky work section, whose box is taller than the art). Any excess width is
// cropped evenly from both sides. Without it the art only fits the width and
// the container's own background shows through underneath.
export default function AsciiGarden({ cover = false }) {
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
      let size = (width / measured) * 100
      if (cover) {
        // grow until the art also covers the container's height
        const heightAt100 = art.rows * LINE_HEIGHT * 100
        size = Math.max(size, (el.clientHeight / heightAt100) * 100)
      }
      el.style.setProperty('--ag-fs', `${size}px`)
      // centre the art when covering makes it wider than the container
      const overflow = Math.max(0, (measured * size) / 100 - width)
      el.style.setProperty('--ag-shift', `${-overflow / 2}px`)
      // in cover mode the container sets its own height; don't drive it
      const host = cover ? null : el.parentElement
      if (host) host.style.setProperty('--ag-h', `${art.rows * LINE_HEIGHT * size}px`)
    }
    fit()
    // re-fit once fonts settle, and whenever the container resizes
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit)
    const ro = new ResizeObserver(fit)
    ro.observe(el)
    return () => ro.disconnect()
  }, [cover])

  return <div className="ascii-garden" aria-hidden="true" ref={ref}>{ROWS}</div>
}
