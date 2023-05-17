import React from 'react';
import './Recommended.css'; // import the CSS file that styles the rectangle

const Recom = ({ children }) => {
  return (
    <div className="recom-text">
      <span>Recommended for YOU</span>
      {children}
    </div>
  );
};

export default Recom;
