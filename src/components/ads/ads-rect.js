import React from 'react';
import './AdsRectangle.css'; // import the CSS file that styles the rectangle

const AdsRectangle = ({ children }) => {
  return (
    <div className="ads-rectangle">
      <span className="advertisement">ADVERTISEMENT</span>
      {children}
    </div>
  );
};

export default AdsRectangle;
