import LoakPostLogo from '../../Assets/loakpost-logo.svg';
import IgIcon from '../../Assets/ig-icon.svg';
import WaIcon from '../../Assets/wa-icon.svg';

function Footer() {
  return (
    <div className="relative bottom-0 inset-x-0 w-full h-[100px] bg-white border-bordergray border-t items-center">
      <img src={LoakPostLogo} alt="LoakPost Logo" className="mt-2 ml-[3%] w-10 h-5" />
      <div className="mt-1 ml-[3%] w-[60%] text-[10px]">Loak post is a Jatinangor based marketplace for secondhand items.</div> 
      <div className="flex w-full h-[35px] items-center border-bordergray border-t">
        <div className="justify-start w-full ml-[3%]">
          <div className="font-bold text-[12px]">Contact Us Through</div>
        </div>
        <div className="justify-end w-full flex mr-[3%] items-center">
          <img src={IgIcon} alt="Instagram Icon" className="float-left" />
          <img src={WaIcon} alt="Whatsapp Icon" className="float-left pl-2" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
