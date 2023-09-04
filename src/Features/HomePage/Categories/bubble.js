import React, { useState } from 'react';
import BubbleIcon from '../../../Assets/cats-bubble.svg';
import Attire from '../../../Assets/Categories/attire-icon.svg';
import Electronics from '../../../Assets/Categories/electronics-icon.svg';
import Books from '../../../Assets/Categories/books-icon.svg';
import HomeApp from '../../../Assets/Categories/homeapp-icon.svg';
import Acc from '../../../Assets/Categories/acc-icon.svg';
import VehicleAcc from '../../../Assets/Categories/vehicleacc-icon.svg';
import Shoes from '../../../Assets/Categories/shoes-icon.svg';
import Bags from '../../../Assets/Categories/bags-icon.svg';
import Station from '../../../Assets/Categories/station-icon.svg';
import Beauty from '../../../Assets/Categories/beauty-icon.svg';
import Others from '../../../Assets/Categories/others-icon.svg';
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
        <div className="z-50 flex flex-col items-center w-[60px] h-[60px] bg-[${imageSetActive ? 'blue' : '#F5F5F5'}] rounded-xl mt-[10px] mx-[3px]">
          <img src={Attire} className="w-[20px] h-auto pt-[13px]"/>
          <div className="absolute font-space font-bold text-[7px] mt-[35px]">Attire</div>
        </div>
        <div className="flex flex-col items-center w-[60px] h-[60px] bg-[${imageSetActive ? 'blue' : '#F5F5F5'}] rounded-xl mt-[10px] mx-[3px]">
          <img src={Electronics} className="w-[20px] h-auto pt-[13px]" />
          <div className="absolute font-space font-bold text-[7px] mt-[35px]">Electronics</div>
        </div>
        <div className="flex flex-col items-center w-[60px] h-[60px] bg-[${imageSetActive ? 'blue' : '#F5F5F5'}] rounded-xl mt-[10px] mx-[3px]">
          <img src={Books} className="w-[13px] h-auto pt-[13px]" />
          <div className="absolute font-space font-bold text-[7px] mt-[35px]">Books</div>
        </div>
        <div className="flex flex-col items-center w-[60px] h-[60px] bg-[${imageSetActive ? 'blue' : '#F5F5F5'}] rounded-xl mt-[10px] mx-[3px]">
          <img src={HomeApp} className="w-[20px] h-auto pt-[13px]" />
          <div className="absolute font-space font-bold text-[7px] mt-[35px]">Home</div>
          <div className="absolute font-space font-bold text-[7px] mt-[44px]">Appliances</div>
        </div>
        <div className="flex flex-col items-center w-[60px] h-[60px] bg-[${imageSetActive ? 'blue' : '#F5F5F5'}] rounded-xl mt-[10px] mx-[3px]">
          <img src={Acc} className="w-[25px] h-auto pt-[13px]" />
          <div className="absolute font-space font-bold text-[7px] mt-[35px]">Accessories</div>
        </div>
        <div className="flex flex-col items-center w-[60px] h-[60px] bg-[${imageSetActive ? 'blue' : '#F5F5F5'}] rounded-xl mt-[10px] mx-[3px]">
          <img src={VehicleAcc} className="w-[25px] h-auto pt-[13px]" />
          <div className="absolute font-space font-bold text-[7px] mt-[35px]">Vehicle's</div>
          <div className="absolute font-space font-bold text-[7px] mt-[44px]">Accessories</div>
        </div>
          <img src={ArrowLeft} className="w-[5%] h-auto ml-[15px] mr-[7px] pb-[7px]" />
          <img src={BArrowRight} className="w-[5%] h-auto mr-[15px] ml-[7px] cursor-pointer pb-[7px]" onClick={toggleImageSet} />
        </>
      );
    } else {
      return (
        <>
        <div className="flex flex-col items-center w-[60px] h-[60px] bg-[${imageSetActive ? 'blue' : '#F5F5F5'}] rounded-xl mt-[10px] mx-[3px]">
          <img src={Shoes} className="w-[20px] h-auto pt-[13px]" />
          <div className="absolute font-space font-bold text-[7px] mt-[35px]">Shoes</div>
        </div>
        <div className="flex flex-col items-center w-[60px] h-[60px] bg-[${imageSetActive ? 'blue' : '#F5F5F5'}] rounded-xl mt-[10px] mx-[3px]">
          <img src={Bags} className="w-[20px] h-auto pt-[13px]" />
          <div className="absolute font-space font-bold text-[7px] mt-[35px]">Bags</div>
        </div>
        <div className="flex flex-col items-center w-[60px] h-[60px] bg-[${imageSetActive ? 'blue' : '#F5F5F5'}] rounded-xl mt-[10px] mx-[3px]">
          <img src={Station} className="w-[20px] h-auto pt-[13px]" />
          <div className="absolute font-space font-bold text-[7px] mt-[35px]">Stationery</div>
        </div>
        <div className="flex flex-col items-center w-[60px] h-[60px] bg-[${imageSetActive ? 'blue' : '#F5F5F5'}] rounded-xl mt-[10px] mx-[3px]">
          <img src={Beauty} className="w-[20px] h-auto pt-[13px]" />
          <div className="absolute font-space font-bold text-[7px] mt-[35px]">Beauty</div>
        </div>
        <div className="flex flex-col items-center w-[60px] h-[60px] bg-[${imageSetActive ? 'blue' : '#F5F5F5'}] rounded-xl mt-[10px] mx-[3px]">
          <img src={Others} className="w-[20px] h-auto pt-[13px]" />
          <div className="absolute font-space font-bold text-[7px] mt-[35px]">Others</div>
        </div>
        <div className="flex flex-col items-center w-[60px] h-[60px] rounded-xl mt-[10px] mx-[3px]"/>
          <img src={BArrowLeft} className="w-[5%] h-auto ml-[15px] mr-[7px] cursor-pointer pb-[7px]" onClick={toggleImageSet} />
          <img src={ArrowRight} className="w-[5%] h-auto mr-[15px] ml-[7px] pb-[7px]" />
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
