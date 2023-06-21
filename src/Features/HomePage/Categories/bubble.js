import React, { useState } from 'react';
import BubbleIcon from '../../../Assets/cats-bubble.svg';
import Attire from '../../../Assets/attire-icon.svg';
import Electronics from '../../../Assets/electronics-icon.svg';
import Books from '../../../Assets/books-icon.svg';
import HomeApp from '../../../Assets/homeapp-icon.svg';
import Acc from '../../../Assets/acc-icon.svg';
import VehicleAcc from '../../../Assets/vehicleacc-icon.svg';
import ArrowLeft from '../../../Assets/barrow-left.svg';
import ArrowRight from '../../../Assets/barrow-right.svg';

function CatsBubble() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed w-14 h-14 rounded-full bg-myblue bottom-[105px] ml-[5%] items-center justify-center flex cursor-pointer" onClick={toggleMenu}>
      <img src={BubbleIcon} alt="Bubble Icon" className="w-7 h-7" />
        {menuOpen && (
          <div className="mt-[-230px] z-50 ml-[210px] absolute bg-white w-[139px] h-[228px] rounded-[9px] flex flex-wrap shadow-lg shadow-black justify-center"> 
            <img src={Attire} className="w-[40%] h-auto mr-[5px]"/>
            <img src={Electronics} className="w-[40%] h-auto ml-[5px]"/>
            <img src={Books} className="w-[40%] h-auto mr-[5px]"/>
            <img src={HomeApp} className="w-[40%] h-auto ml-[5px]"/>
            <img src={Acc} className="w-[40%] h-auto mr-[5px]"/>
            <img src={VehicleAcc} className="w-[40%] h-auto ml-[5px]"/>
            <img src={ArrowLeft} className="w-[5%] h-auto ml-[15px] mr-[7px]"/>
            <img src={ArrowRight} className="w-[5%] h-auto mr-[15px] ml-[7px]"/>
          </div>
        )}
    </div>
  );
}

export default CatsBubble;
