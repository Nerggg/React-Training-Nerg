import React from 'react';
import './Header.css';
import SellLogo from './sell-logo.png';
import SearchLogo from './search-logo.png';

const Search = ({ children }) => {
  return (
    <div className="absolute right-0 top-1/2 translate-y-[-50%]">
      <ul className="search-sell">
        <li><img src={SearchLogo} className="h-10" alt="search" /></li>
        <li><img src={SellLogo} className="h-10" alt="sell" /></li>
      </ul>
    </div>
  );
};

export default Search;
