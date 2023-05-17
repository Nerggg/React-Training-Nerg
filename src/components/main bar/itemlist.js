import React from 'react';
import './ItemList.css';

const ItemList = () => {
  const handleClick = (item) => {
    console.log(`Clicked: ${item}`);
    // Add your desired logic here when a list item is clicked
  };

  return (
    <div className="item-list-container">
      <ul className="item-list">
        <li onClick={() => handleClick('ITEM A')}>ITEM A</li>
        <li onClick={() => handleClick('ITEM B')}>ITEM B</li>
        <li onClick={() => handleClick('ITEM C')}>ITEM C</li>
        <li onClick={() => handleClick('ITEM D')}>ITEM D</li>
        <li onClick={() => handleClick('ITEM E')}>ITEM E</li>
        <li onClick={() => handleClick('ITEM F')}>ITEM F</li>
        <li onClick={() => handleClick('ITEM G')}>ITEM G</li>
      </ul>
    </div>
  );
};

export default ItemList;
