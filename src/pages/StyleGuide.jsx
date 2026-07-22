// Reference chart for the project's named type system.
// Route: /styles  — see src/styles/type.css for the class definitions.

const SAMPLE = 'i like toasty candles, hazelnut coffee, and hiking.'

const STYLES = [
  { name: 'Display', cls: 'type-display', spec: 'Inclusive Sans · 700 · 56px' },
  { name: 'Title', cls: 'type-title', spec: 'Inclusive Sans · 700 · 30px · UPPERCASE' },
  { name: 'Subhead', cls: 'type-subhead', spec: 'Averia Serif Libre · italic · 28px' },
  { name: 'Body', cls: 'type-body', spec: 'Inclusive Sans · 400 · 18px' },
  { name: 'Label', cls: 'type-label', spec: 'Inclusive Sans · 600 · 14px · UPPERCASE' },
  { name: 'Mono', cls: 'type-mono', spec: 'Roboto Mono · 400 · 15px · UPPERCASE' },
  { name: 'Caption', cls: 'type-caption', spec: 'Inclusive Sans · 400 · 13px · muted' },
]

export default function StyleGuide() {
  return (
    <main className="sg">
      <header className="sg-head">
        <p className="type-label">Type system</p>
        <h1 className="type-display">Style guide</h1>
        <p className="type-body sg-intro">
          The named text styles in this project. Point me at a name — "use Subhead
          here", "make that Mono" — and I'll apply the matching style.
        </p>
      </header>

      {STYLES.map((s) => (
        <div className="sg-row" key={s.name}>
          <div className="sg-meta">
            <p className="sg-name">{s.name}</p>
            <p className="sg-spec">{s.spec}</p>
            <code className="sg-code">.{s.cls}</code>
          </div>
          <p className={`sg-sample ${s.cls}`}>{SAMPLE}</p>
        </div>
      ))}
    </main>
  )
}
