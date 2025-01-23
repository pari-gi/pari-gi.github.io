import React from 'react';
import '../Styles/Connect.css';

const Connect = () => {
  return (
    <div className="connect-container">
      <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="connect-button">Resume</a>
      <a href="https://www.linkedin.com/in/pari-gill/" target="_blank" rel="noopener noreferrer" className="connect-button">LinkedIn</a>
      <a href="https://github.com/pari-gi" target="_blank" rel="noopener noreferrer" className="connect-button">GitHub</a>
    </div>
  );
};

export default Connect;