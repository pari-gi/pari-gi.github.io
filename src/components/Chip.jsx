import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function Chip({ icon, label, to, href, active, size = 'sm', onClick }) {
  const cls = `chip chip--${size}${active ? ' chip--active' : ''}`
  const iconSize = size === 'sm' ? 15 : 20
  const inner = (
    <>
      <Icon name={icon} size={iconSize} />
      <span>{label}</span>
    </>
  )
  if (to) {
    return <Link to={to} className={cls}>{inner}</Link>
  }
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
  }
  return (
    <button type="button" className={cls} onClick={onClick} aria-pressed={active}>
      {inner}
    </button>
  )
}
