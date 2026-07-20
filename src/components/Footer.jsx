import { useLocation } from 'react-router-dom'
import Chip from './Chip.jsx'
import wordmarkTall from '../assets/svg/wordmark-tall.svg'
import bird from '../assets/svg/bird.svg'

const WORK_PATHS = ['/', '/applenj', '/pits', '/hungie']

export default function Footer() {
  const { pathname } = useLocation()
  return (
    <footer className="site-footer">
      <div className="footer-chips">
        <div className="footer-chips-group">
          <Chip icon="star" label="work" to="/" active={WORK_PATHS.includes(pathname)} />
          <Chip icon="smile" label="me" to="/#me" />
          <Chip icon="plant" label="miscellany" to="/miscellany" active={pathname === '/miscellany'} />
        </div>
        <div className="footer-chips-group">
          <Chip icon="scroll" label="resume" href="/resume.pdf" />
          <Chip icon="scroll" label="linkedin" href="https://www.linkedin.com/in/pari-gill/" />
        </div>
      </div>
      <div className="footer-bottom">
        <img className="footer-wordmark" src={wordmarkTall} alt="PARI GILL" />
        <img className="footer-bird" src={bird} alt="" aria-hidden="true" />
      </div>
    </footer>
  )
}
