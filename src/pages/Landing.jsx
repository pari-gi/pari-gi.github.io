import { useState } from 'react'
import { Link } from 'react-router-dom'
import Chip from '../components/Chip.jsx'
import Icon from '../components/Icon.jsx'
import { FILTERS, PROJECTS } from '../data/projects.js'
import star from '../assets/svg/star.svg'
import bracket from '../assets/svg/bracket.svg'
import headshot from '../assets/photos/headshot3_1__37f054d4.jpg'
import '../styles/landing.css'

function ProjectCard({ project }) {
  return (
    <Link to={`/${project.slug}`} className="project-card">
      <img
        className={`card-img${project.alpha ? '' : ' card-img--framed'}`}
        src={project.image}
        alt={`${project.name} preview`}
      />
      <div className="card-stickers" aria-hidden="true">
        {project.stickers.map((s, i) => (
          <span key={s} className={`card-sticker card-sticker--${i + 1}`}>{s}</span>
        ))}
      </div>
      <div className="card-panel">
        <div className="card-rule" />
        <h3 className="card-title">{project.title}</h3>
        <p className="card-highlights">
          {project.highlights.map((h, i) => (h ? <span key={i}>{h}<br /></span> : <br key={i} />))}
        </p>
        <div className="card-meta">
          <span className="card-name">{project.name}</span>
          <span className="card-read">{project.read}</span>
          <Icon name="arrow" size={16} />
        </div>
      </div>
    </Link>
  )
}

export default function Landing() {
  const [filter, setFilter] = useState('all work')
  const shown = PROJECTS.filter(
    (p) => filter === 'all work' || p.tags.includes(filter),
  )

  return (
    <main>
      <section className="hero" id="me">
        <img className="hero-star" src={star} alt="" aria-hidden="true" />
        <img className="hero-headshot" src={headshot} alt="Pari Gill" />
        <div className="hero-intro">
          <p>i like adventures.</p>
          <p>i like toasty candles, hazelnut coffee, and hiking.</p>
          <p className="hero-intro-bold">also i am a computer science student at umd.</p>
          <p>enjoy my portfolio. i like designing.</p>
        </div>
        <img className="hero-bracket" src={bracket} alt="" aria-hidden="true" />
      </section>

      <section className="statement-block">
        <h2 className="statement">
          Jack of all the <strong>right</strong> trades: business strategy, design
          psychology, AI-native product design, and the full-stack engineering to
          ship it all myself — every piece tested on real users.
        </h2>
        <div className="filters">
          {FILTERS.map((f) => (
            <Chip
              key={f.label}
              icon={f.icon}
              label={f.label}
              size="md"
              active={filter === f.label}
              onClick={() => setFilter(f.label)}
            />
          ))}
        </div>
      </section>

      <section className="projects">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
        {shown.length === 0 && (
          <p className="projects-empty">more of this coming soon.</p>
        )}
      </section>
    </main>
  )
}
