// The olive circle that replaces the native cursor site-wide. It expands into
// a pill when `mode` is set: 'view' / 'soon' on the home page's case-study
// cards, 'footer' for the brown cat the footer cat chases.
import { useEffect, useRef } from 'react'
import '../styles/cursor.css'

const LABEL = {
  view: 'view case study',
  soon: 'coming soon',
  footer: '~~( ε :>',
}

export default function CustomCursor({ mode = 'default', label }) {
  const ref = useRef(null)
  const textRef = useRef(null)
  useEffect(() => {
    const move = (e) => {
      const el = ref.current
      if (el) {
        el.style.left = `${e.clientX}px`
        el.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  // arbitrary labels (the collage captions) size the pill to their own text
  useEffect(() => {
    const el = ref.current, t = textRef.current
    if (!el || !t) return
    el.style.width = mode === 'label' ? `${Math.ceil(t.scrollWidth) + 20}px` : ''
  }, [mode, label])

  return (
    <div ref={ref} className={`lab2-cursor lab2-cursor--${mode}`} aria-hidden="true">
      <span className="lab2-cursor-text" ref={textRef}>
        {mode === 'label' ? label : LABEL[mode] || LABEL.view}
      </span>
    </div>
  )
}
