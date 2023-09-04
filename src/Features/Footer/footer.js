import LoakPostLogo from "../../Assets/loakpost-logo.svg";
import IgIcon from "../../Assets/ig-icon.svg";
import WaIcon from "../../Assets/wa-icon.svg";

function Footer() {
  return (
    <div className="relative bottom-0 inset-x-0 w-full h-[100px] bg-white border-bordergray border-t items-center">
      <img
        src={LoakPostLogo}
        alt="LoakPost Logo"
        className="mt-2 ml-[3%] w-10 h-5"
      />
      <div className="mt-1 ml-[3%] w-[60%] text-[10px] font-space">
        Loak post is a Jatinangor based marketplace for secondhand items.
      </div>
      <div className="flex w-full h-[35px] items-center border-bordergray border-t">
        <div className="justify-start w-full ml-[3%]">
          <div className="font-bold text-[12px] font-space">Contact Us Through</div>
        </div>
        <div className="justify-end w-full flex mr-[3%] items-center">
          <a href="https://www.instagram.com/loakpost/" target="_blank" rel="noopener noreferrer">
            <img src={IgIcon} alt="Instagram Icon" className="float-left cursor-pointer" />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <img src={WaIcon} alt="Whatsapp Icon" className="float-left pl-2 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
