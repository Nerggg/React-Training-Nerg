import LoakPostLogo from '../../Assets/loakpost-logo.svg';
import SearchIcon from '../../Assets/search-icon.svg';
import MenuIcon from '../../Assets/menu-icon.svg';
import SellIcon from '../../Assets/sell-icon.svg';

function Header() {
  return (
    <div className="flex relative w-full h-10 items-center">
      <div className="justify-start w-full ml-[3%]">
        <img src={LoakPostLogo} alt="LoakPost Logo" className="w-10 h-5" />
      </div>
      <div className="justify-end w-full flex mr-[3%]">
        <img src={SearchIcon} alt="Search Icon" className="float-left" />
        <img src={MenuIcon} alt="Menu Icon" className="float-left pl-1" />
        <img src={SellIcon} alt="Sell Icon" className="float-left pl-1" />
      </div>
    </div>
  );
}

export default Header;
