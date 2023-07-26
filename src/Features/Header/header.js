import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoakPostLogo from '../../Assets/loakpost-logo.svg';
import SearchIcon from '../../Assets/search-icon.svg';
import MenuIcon from '../../Assets/menu-icon.svg';
import SellIcon from '../../Assets/sell-icon.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAboutUsClick = () => {
    navigate('/about');
  };

  const handleFaqClick = () => {
    navigate('/faq');
  };

  const handleSellClick = () => {
    navigate('/sell');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // You can add further logic here if needed (e.g., perform search operation).
  };

  return (
    <div className="flex relative w-full h-[40px] items-center">
      <div className="justify-start w-full ml-[3%]">
        <img
          src={LoakPostLogo}
          alt="LoakPost Logo"
          className="w-10 h-5 cursor-pointer"
          onClick={handleHomeClick}
        />
      </div>
      <div className="justify-end w-full flex mr-[3%]">
        <div className="h-[28px] w-full border-black border rounded-xl flex">
          <img src={SearchIcon} alt="Search Icon" className="my-[3px] ml-[5px]" />
          <input
            value={searchQuery}
            onChange={handleSearchChange}
            className="ml-[5px] mt-[1px] h-[25px] w-[87%] text-[10px] outline-none"
            placeholder="Cari barang bekas?"/>
        </div>
        <img src={MenuIcon} alt="Menu Icon" className="float-left pl-1 cursor-pointer" onClick={toggleMenu} />
        {menuOpen && (
          <div className="top-[29px] z-50 mr-[50px] absolute bg-white w-[75px] h-[75px] rounded-l-[7px] rounded-br-[7px] border border-bordergray flex flex-col items-end">
            <div className="text-fontgray text-[9px] mr-[12px] my-[5px] cursor-pointer" onClick={handleHomeClick}>Home</div>
            <div className="h-[1px] bg-bordergray w-[85%] mr-[7.5%]" />
            <div className="text-fontgray text-[9px] mr-[12px] my-[5px] cursor-pointer" onClick={handleAboutUsClick}>About Us</div>
            <div className="h-[1px] bg-bordergray w-[85%] mr-[7.5%]" />
            <div className="text-fontgray text-[9px] mr-[12px] my-[5px] cursor-pointer" onClick={handleFaqClick}>FAQ</div>
          </div>
        )}
        <img src={SellIcon} alt="Sell Icon" className="float-left pl-1 cursor-pointer" onClick={handleSellClick} />
      </div>
    </div>
  );
}

export default Header;
