import { CANVAS, COLLAGE } from '../data/miscellany.js'
import '../styles/miscellany.css'

const pctX = (v) => `${(v / CANVAS.w) * 100}%`
const pctY = (v) => `${(v / CANVAS.h) * 100}%`

function CollagePhoto({ item }) {
  const [mx, my, mw, mh] = item.mask
  const [ix, iy, iw, ih] = item.img
  return (
    <div
      className={`misc-photo${item.circle ? ' misc-photo--circle' : ''}`}
      style={{ left: pctX(mx), top: pctY(my), width: pctX(mw), height: pctY(mh) }}
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
  return (
    <main className="misc">
      <div className="misc-canvas">
        {COLLAGE.map((item, i) => (
          <CollagePhoto key={i} item={item} />
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
    </main>
  )
}
