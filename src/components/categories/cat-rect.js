import React from 'react';
import './CatRectangle.css'; // import the CSS file that styles the rectangle

const CatRectangle = ({ children }) => {
  return (
    <div className="cat-rectangle">
      <span className="categories">CATEGORIES</span>
      {children}
    </div>
  );
};

export default CatRectangle;
