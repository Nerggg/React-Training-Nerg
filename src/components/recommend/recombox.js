import React from 'react';
import './Recommended.css'; // import the CSS file that styles the rectangle

const RecomBox = ({ children }) => {
  return (
    <div className="recom-box">
      {children}
    </div>
  );
};

export default RecomBox;
