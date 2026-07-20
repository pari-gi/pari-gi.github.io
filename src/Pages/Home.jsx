import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

import wordmark from '../Images/Home/Pari Gill Word Mark.png';
import starburst from '../Images/Home/Star Drawing.png';
import headshot from '../Images/Home/Headshot.png';
import proAV from '../Images/Home/Pro AV.png';

const FILTERS = [
  { label: 'all work', icon: '✦' },
  { label: 'business strategy', icon: '↗' },
  { label: 'design psychology', icon: '◎' },
  { label: 'AI', icon: '✦' },
  { label: 'user research & testing', icon: '⚇' },
  { label: 'software engineering', icon: '</>' },
];

const PROJECTS = [
  {
    title: 'A GROUND UP BUSINESS TRANSFORMATION.',
    name: 'APPLENJ',
    readTime: '10 MIN READ',
    highlights: [
      'New product-service strategy.',
      'New market position.',
      'New brand identity.',
      '',
      'New website design.',
      '30+ wireframes.',
      '5 testing methods.',
    ],
    image: proAV,
    link: '/applenj',
  },
  {
    title: 'A GROUND UP BUSINESS TRANSFORMATION.',
    name: 'APPLENJ',
    readTime: '10 MIN READ',
    highlights: [
      'New product-service strategy.',
      'New market position.',
      'New brand identity.',
      '',
      'New website design.',
      '30+ wireframes.',
      '5 testing methods.',
    ],
    image: proAV,
    link: '/applenj',
  },
  {
    title: 'A GROUND UP BUSINESS TRANSFORMATION.',
    name: 'APPLENJ',
    readTime: '10 MIN READ',
    highlights: [
      'New product-service strategy.',
      'New market position.',
      'New brand identity.',
      '',
      'New website design.',
      '30+ wireframes.',
      '5 testing methods.',
    ],
    image: proAV,
    link: '/applenj',
  },
  {
    title: 'A GROUND UP BUSINESS TRANSFORMATION.',
    name: 'APPLENJ',
    readTime: '10 MIN READ',
    highlights: [
      'New product-service strategy.',
      'New market position.',
      'New brand identity.',
      '',
      'New website design.',
      '30+ wireframes.',
      '5 testing methods.',
    ],
    image: proAV,
    link: '/applenj',
  },
];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('all work');

  return (
    <div className="home-page">
      {/* Header Wordmark */}
      <header className="home-header">
        <div className="home-wordmark">
          <img src={wordmark} alt="Pari Gill" />
        </div>
      </header>

      {/* Navigation */}
      <nav className="home-nav">
        <Link to="/" className="active">
          <span className="nav-icon">✦</span> work
        </Link>
        <Link to="/me">
          <span className="nav-icon">☺</span> me
        </Link>
        <Link to="/resume">
          <span className="nav-icon">✎</span> resume
        </Link>
        <Link to="/miscellany">
          <span className="nav-icon">❦</span> miscellany
        </Link>
      </nav>

      {/* Hero */}
      <section className="home-hero">
        <div className="hero-image-container">
          <img className="hero-starburst" src={starburst} alt="" />
          <img className="hero-headshot" src={headshot} alt="Pari Gill" />
        </div>
        <div className="hero-text">
          <p>i like adventures.</p>
          <p>i like toasty candles, hazelnut coffee, and hiking.</p>
          <p><span className="bold">also i am a computer science student at umd.</span></p>
          <p>enjoy my portfolio. i like designing.</p>
        </div>
      </section>

      {/* Tagline */}
      <section className="home-tagline">
        <p>
          Jack of all the <strong>right</strong> trades: business strategy, design psychology,
          AI-native product design, and the full-stack engineering to ship it
          all myself — every piece tested on real users.
        </p>
      </section>

      {/* Filter Pills */}
      <div className="home-filters">
        {FILTERS.map((filter) => (
          <button
            key={filter.label}
            className={`filter-pill ${activeFilter === filter.label ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.label)}
          >
            <span className="filter-icon">{filter.icon}</span>
            {filter.label}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <section className="home-projects">
        {PROJECTS.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-card-image">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-card-info">
              <div className="project-card-left">
                <h3 className="project-card-title">{project.title}</h3>
                <div className="project-card-meta">
                  <span className="project-card-name">{project.name}</span>
                  <span className="project-card-read-time">
                    {project.readTime} <span className="project-card-arrow">↘</span>
                  </span>
                </div>
              </div>
              <div className="project-card-right">
                {project.highlights.map((line, i) =>
                  line === '' ? (
                    <div className="separator" key={i} />
                  ) : (
                    <p key={i}>{line}</p>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-nav">
          <div className="footer-nav-left">
            <Link to="/" className="active">
              <span className="nav-icon">✦</span> work
            </Link>
            <Link to="/me">
              <span className="nav-icon">☺</span> me
            </Link>
            <Link to="/miscellany">
              <span className="nav-icon">❦</span> miscellany
            </Link>
          </div>
          <div className="footer-nav-right">
            <Link to="/resume">
              <span className="nav-icon">✎</span> resume
            </Link>
            <a href="https://linkedin.com/in/pari-gill" target="_blank" rel="noopener noreferrer">
              <span className="nav-icon">🔗</span> linkedin
            </a>
          </div>
        </div>
        <div className="footer-wordmark">
          <img src={wordmark} alt="Pari Gill" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
