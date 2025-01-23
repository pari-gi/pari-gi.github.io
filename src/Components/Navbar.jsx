import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="topnav">
      {/* Home Button */}
      <Link smooth to="/">Home</Link>

      {/* About Me Page */}
      <Link smooth to="/about">About Me</Link>

      {/* Scroll to UI/UX Portfolio */}
      <Link smooth to="/#portfolio">UI/UX Portfolio</Link>

      {/* Scroll to Art Section */}
      <Link smooth to="/#art">Art</Link>

      {/* Scroll to Contact Section */}
      {/* <Link smooth to="/#contact">Contact Me</Link> */}
    </nav>
  );
};

export default Navbar;
