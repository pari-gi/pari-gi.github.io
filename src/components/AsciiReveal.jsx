// A photo shown as coloured ASCII; hovering wipes the ASCII away upward to
// reveal the real image underneath. The ASCII is generated from the photo
// itself at runtime — one character per cell, picked by brightness and drawn
// in that cell's own colour.
import { useEffect, useRef } from 'react'

// darkest -> lightest
const RAMP = '@%#WM*+=~-:. '

export default function AsciiReveal({ src, alt = '', cols = 78 }) {
  const imgRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const img = imgRef.current
    const cv = canvasRef.current
    if (!img || !cv) return

    const paint = () => {
      const w = cv.clientWidth
      const h = cv.clientHeight
      if (!w || !h || !img.naturalWidth) return
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      cv.width = Math.round(w * dpr)
      cv.height = Math.round(h * dpr)
      const cellW = cv.width / cols
      const rows = Math.max(1, Math.round(cv.height / (cellW * 1.9)))
      const cellH = cv.height / rows

      // sample the photo down to one pixel per character cell
      const s = document.createElement('canvas')
      s.width = cols
      s.height = rows
      const sctx = s.getContext('2d', { willReadFrequently: true })
      sctx.drawImage(img, 0, 0, cols, rows)
      const data = sctx.getImageData(0, 0, cols, rows).data

      const ctx = cv.getContext('2d')
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, cv.width, cv.height)
      ctx.textBaseline = 'top'
      ctx.font = `${cellH * 0.95}px 'Roboto Mono', ui-monospace, monospace`
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]
          const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255
          const ch = RAMP[Math.min(RAMP.length - 1, Math.floor(lum * RAMP.length))]
          if (ch === ' ') continue
          ctx.fillStyle = `rgb(${r * 0.8}, ${g * 0.8}, ${b * 0.8})`
          ctx.fillText(ch, x * cellW, y * cellH)
        }
      }
    }

    if (img.complete) paint()
    else img.addEventListener('load', paint, { once: true })
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(paint)
    const ro = new ResizeObserver(paint)
    ro.observe(cv)
    return () => ro.disconnect()
  }, [src, cols])

  // the reveal opens as a circle wherever the pointer is
  const trackPointer = (e) => {
    const cv = canvasRef.current
    if (!cv) return
    const r = cv.getBoundingClientRect()
    cv.style.setProperty('--mx', `${e.clientX - r.left}px`)
    cv.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <figure className="ascii-reveal" onMouseMove={trackPointer}>
      <img ref={imgRef} src={src} alt={alt} />
      <canvas ref={canvasRef} className="ascii-reveal-art" aria-hidden="true" />
    </figure>
  )
}
