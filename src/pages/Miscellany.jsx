import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CANVAS, COLLAGE } from '../data/miscellany.js'
import CustomCursor from '../components/CustomCursor.jsx'
import FooterLab from '../components/FooterLab.jsx'
import '../styles/miscellany.css'

const pctX = (v) => `${(v / CANVAS.w) * 100}%`
const pctY = (v) => `${(v / CANVAS.h) * 100}%`

function CollagePhoto({ item, onEnter, onLeave }) {
  const [mx, my, mw, mh] = item.mask
  const [ix, iy, iw, ih] = item.img
  // hover reveal: window + the photo's box inside it (default = the full photo)
  const [hx, hy, hw, hh] = item.hoverBox || item.img
  const [hix, hiy, hiw, hih] = item.hoverImg || item.img
  return (
    <div
      className={`misc-photo${item.circle ? ' misc-photo--circle' : ''}`}
      onMouseEnter={() => onEnter(item.caption)}
      onMouseLeave={onLeave}
      style={{
        left: pctX(mx),
        top: pctY(my),
        width: pctX(mw),
        height: pctY(mh),
        // hovering grows the mask out to this window...
        '--full-l': pctX(hx),
        '--full-t': pctY(hy),
        '--full-w': pctX(hw),
        '--full-h': pctY(hh),
        // ...and the photo settles into it like this
        '--imgh-l': `${((hix - hx) / hw) * 100}%`,
        '--imgh-t': `${((hiy - hy) / hh) * 100}%`,
        '--imgh-w': `${(hiw / hw) * 100}%`,
        '--imgh-h': `${(hih / hh) * 100}%`,
      }}
    >
      <img
        src={item.src}
        alt=""
        style={{
          left: `${((ix - mx) / mw) * 100}%`,
          top: `${((iy - my) / mh) * 100}%`,
          width: `${(iw / mw) * 100}%`,
          height: `${(ih / mh) * 100}%`,
        }}
      />
    </div>
  )
}

export default function Miscellany() {
  const [cursorMode, setCursorMode] = useState('default')
  const [cursorLabel, setCursorLabel] = useState('')
  const showCaption = (caption) => {
    if (!caption) return
    setCursorLabel(caption)
    setCursorMode('label')
  }
  return (
    <main className="misc has-cursor">
      <CustomCursor mode={cursorMode} label={cursorLabel} />
      <header className="misc-header">
        <Link to="/" aria-label="Pari Gill — home">
          <span className="misc-wordmark" />
        </Link>
        <nav className="misc-nav">
          <Link to="/">WORK</Link>
          <Link to="/miscellany">ME</Link>
          <a href="/resume.pdf">RESUME</a>
          <a href="https://www.linkedin.com/in/pari-gill/">LINKEDIN</a>
          <Link to="/miscellany">MISCELLANY</Link>
        </nav>
      </header>
      <div className="misc-canvas">
        {COLLAGE.map((item, i) => (
          <CollagePhoto key={i} item={item} onEnter={showCaption} onLeave={() => setCursorMode('default')} />
        ))}
        <h1 className="misc-title" style={{ left: pctX(606), top: pctY(870) }}>
          Miscellany
        </h1>
        <p className="misc-caption" style={{ left: pctX(158), top: pctY(1435) }}>
          a collection of some of my
          <br />
          hobbies and interests
        </p>
        <p className="misc-list" style={{ left: pctX(1004), top: pctY(506) }}>
          creating • nature • friends • pottery • photography • juice • making
          playlists • exploring • board games
        </p>
      </div>
      <FooterLab
        onCursorEnter={() => setCursorMode('footer')}
        onCursorLeave={() => setCursorMode('default')}
      />
    </main>
  )
}
