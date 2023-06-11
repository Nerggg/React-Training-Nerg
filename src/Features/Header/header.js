import Logo from '../../Assets/logo.svg';

function Header() {
  return (
    <div className="w-full h-11 bg-white">
      <img src={Logo} className="p-3 py-3 pl-4" />
    </div>
  );
}

export default Header;
