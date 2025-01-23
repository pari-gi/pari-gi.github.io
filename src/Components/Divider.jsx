import React from 'react';
import '../Styles/Divider.css';

const Divider = ({ text, id }) => {
  return (
    <div id={id} className="divider">
      <hr className="line" />
      <span className="divider-text">{text}</span>
      <hr className="line" />
    </div>
  );
};

export default Divider;
