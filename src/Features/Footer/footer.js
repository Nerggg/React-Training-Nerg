import LoakpostLogo from '../../Assets/loakpost-logo.svg';
import IgIcon from '../../Assets/ig-icon.svg';
import WaIcon from '../../Assets/wa-icon.svg';

function Footer() {
  return (
    <div className="sticky absolute bottom-0 w-full h-[100px] bg-white border-bordergray border-t">
      <img src={LoakpostLogo} alt="Loakpost Logo" className="mt-2 ml-5 w-10 h-5" />
      <div className="mt-1 ml-5 w-[60%] text-[10px]">Loak post is a Jatinangor based marketplace for secondhand items.</div> 
      <div className="w-full flex border-bordergray border-t items-center">
        <div className="ml-5 text-[15px] font-bold">Contact Us Through</div>
      </div>
    </div>
  );
}

export default Footer;
