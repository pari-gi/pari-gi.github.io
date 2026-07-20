import { Link, useLocation } from 'react-router-dom'
import Chip from './Chip.jsx'
import wordmark from '../assets/svg/wordmark.svg'

const WORK_PATHS = ['/', '/applenj', '/pits', '/hungie']

export default function Nav() {
  const { pathname } = useLocation()
  return (
    <header className="site-header">
      <Link to="/" aria-label="Pari Gill — home">
        <img className="site-wordmark" src={wordmark} alt="PARI GILL" />
      </Link>
      <nav className="site-nav">
        <Chip icon="star" label="work" to="/" active={WORK_PATHS.includes(pathname)} />
        <Chip icon="smile" label="me" to="/#me" />
        <Chip icon="scroll" label="resume" href="/resume.pdf" />
        <Chip icon="plant" label="miscellany" to="/miscellany" active={pathname === '/miscellany'} />
      </nav>
    </header>
  )
}
