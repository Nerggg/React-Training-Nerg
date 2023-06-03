import React from 'react';
import './Header.css';

const Ribbon = () => {
  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <ul className="ribbon">
        <li>Home</li>
        <li>About Us</li>
        <li>FAQ</li>
      </ul>
    </div>
  );
};

export default Ribbon;
