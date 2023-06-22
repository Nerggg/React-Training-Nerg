import React, { useState } from 'react';
import BubbleIcon from '../../../Assets/cats-bubble.svg';
import Attire from '../../../Assets/attire-icon.svg';
import Electronics from '../../../Assets/electronics-icon.svg';
import Books from '../../../Assets/books-icon.svg';
import HomeApp from '../../../Assets/homeapp-icon.svg';
import Acc from '../../../Assets/acc-icon.svg';
import VehicleAcc from '../../../Assets/vehicleacc-icon.svg';
import Shoes from '../../../Assets/shoes-icon.svg';
import Bags from '../../../Assets/bags-icon.svg';
import Station from '../../../Assets/station-icon.svg';
import Beauty from '../../../Assets/beauty-icon.svg';
import Others from '../../../Assets/others-icon.svg';
import ArrowLeft from '../../../Assets/sm-arrow-left.svg';
import ArrowRight from '../../../Assets/sm-arrow-right.svg';
import BArrowLeft from '../../../Assets/sm-barrow-left.svg';
import BArrowRight from '../../../Assets/sm-barrow-right.svg';

function CatsBubble() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imageSet, setImageSet] = useState(1);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleImageSet = () => {
    setImageSet(imageSet === 1 ? 2 : 1);
  };

  const getImageSet = () => {
    if (imageSet === 1) {
      return (
        <>
          <img src={Attire} className="w-[40%] h-auto mr-[5px]" />
          <img src={Electronics} className="w-[40%] h-auto ml-[5px]" />
          <img src={Books} className="w-[40%] h-auto mr-[5px]" />
          <img src={HomeApp} className="w-[40%] h-auto ml-[5px]" />
          <img src={Acc} className="w-[40%] h-auto mr-[5px]" />
          <img src={VehicleAcc} className="w-[40%] h-auto ml-[5px]" />
          <img src={ArrowLeft} className="w-[5%] h-auto ml-[15px] mr-[7px]" />
          <img src={BArrowRight} className="w-[5%] h-auto mr-[15px] ml-[7px] cursor-pointer" onClick={toggleImageSet} />
        </>
      );
    } else {
      return (
        <>
          <img src={Shoes} className="w-[40%] h-auto mr-[5px]" />
          <img src={Bags} className="w-[40%] h-auto ml-[5px]" />
          <img src={Station} className="w-[40%] h-auto mr-[5px]" />
          <img src={Beauty} className="w-[40%] h-auto ml-[5px]" />
          <img src={Others} className="w-[40%] h-auto mr-[5px]" />
          <div className="w-[40%] h-auto mr-[5px]" />
          <img src={BArrowLeft} className="w-[5%] h-auto ml-[15px] mr-[7px] cursor-pointer" onClick={toggleImageSet} />
          <img src={ArrowRight} className="w-[5%] h-auto mr-[15px] ml-[7px]" />
        </>
      );
    }
  };

  return (
    <div className="fixed w-14 h-14 rounded-full bg-myblue bottom-[105px] ml-[5%] items-center justify-center flex">
      <img src={BubbleIcon} alt="Bubble Icon" className="w-8 h-8 cursor-pointer" onClick={toggleMenu} />
      {menuOpen && (
        <div className="mt-[-230px] z-50 ml-[210px] absolute bg-white w-[139px] h-[228px] rounded-[9px] flex flex-wrap shadow-lg shadow-black justify-center">
          {getImageSet()}
        </div>
      )}
    </div>
  );
}

export default CatsBubble;
