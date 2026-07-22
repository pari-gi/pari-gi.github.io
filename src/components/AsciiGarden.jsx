// The hero garden: Pari's reference painting converted into one continuous
// colored ASCII grid (see scratch img2ascii.py → src/data/garden-art.json).
// 300 cols x 91 rows of real text characters, rendered as color-run spans.
import art from '../data/garden-art.json'
import '../styles/ascii-garden.css'

const ROWS = art.lines.map((runs, r) => (
  <div className="ag-row" key={r}>
    {runs.map((run, i) => (run.c ? <span key={i} style={{ color: run.c }}>{run.t}</span> : run.t))}
  </div>
))

export default function AsciiGarden() {
  return <div className="ascii-garden" aria-hidden="true">{ROWS}</div>
}
