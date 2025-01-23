import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Pari Gill. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
