import React from 'react';
import './Rectangle.css'; // import the CSS file that styles the rectangle

const Rectangle = ({ children }) => {
  return (
    <div className="rectangle">
      {children}
    </div>
  );
};

export default Rectangle;
