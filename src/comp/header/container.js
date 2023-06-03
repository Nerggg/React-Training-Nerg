import React from 'react';
import LoakpostLogo from './lokpos-logo.png';
import Ribbon from './ribbon.js';
import Search from './search.js';

const Header = ({ children }) => {
  return (
    <div className="absolute top-0 w-full h-24 bg-white">
      <img src={LoakpostLogo} className="absolute top-1/2 translate-y-[-50%] left-2 h-20" alt="Loakpost" />
      <Ribbon />
      <Search />
    </div>
  );
};

export default Header;
