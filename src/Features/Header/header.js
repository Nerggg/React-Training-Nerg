import LoakpostLogo from '../../Assets/loakpost-logo.svg';
import SearchIcon from '../../Assets/search-icon.svg';
import MenuIcon from '../../Assets/menu-icon.svg';
import SellIcon from '../../Assets/sell-icon.svg';

function Header() {
  return (
    <div className="flex relative w-full h-10 items-center">
      <img src={LoakpostLogo} alt="Loakpost Logo" className="py-3 pl-4" />
      <img src={SearchIcon} alt="Search Icon" className="float-left" />
      <img src={MenuIcon} alt="Menu Icon" className="float-left" />
      <img src={SellIcon} alt="Sell Icon" className="float-left" />
    </div>
  );
}

export default Header;
