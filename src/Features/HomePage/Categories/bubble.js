import React, { useState } from 'react';
import BubbleIcon from '../../../Assets/cats-bubble.svg';

function CatsBubble() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed w-14 h-14 rounded-full bg-myblue bottom-[105px] ml-[5%] items-center justify-center flex cursor-pointer" onClick={toggleMenu}>
      <img src={BubbleIcon} alt="Bubble Icon" className="w-7 h-7" />
        {menuOpen && (
          <div className="mt-[-230px] z-50 ml-[210px] absolute bg-white w-[139px] h-[228px] rounded-[9px] flex shadow-lg shadow-black"> 

          </div>
        )}
    </div>
  );
}

export default CatsBubble;
