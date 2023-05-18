import React from 'react';
import './SearchBar.css'; // import the CSS file that styles the search bar

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input className="search-bar" type="text" />
      <div className="search-rectangle"></div>
    </div>
  );
};

export default SearchBar;

