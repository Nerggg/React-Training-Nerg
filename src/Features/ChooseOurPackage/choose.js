import Title from '../../Assets/choose-packages.svg';
import Desc from '../../Assets/choose-desc.svg';
import SocMed from '../../Assets/social-media.svg';
import Website from '../../Assets/website.svg';

function Choose() {
  return (
    <div className="relative w-full h-auto flex flex-col justify-center items-center border-b border-bordergray">
      <img src={Title} alt="Choose!" className="relative w-[65%] lg:w-[665.6px] h-auto mt-[5%] mb-[3%]" />
      <img src={SocMed} alt="Social Media" className="relative w-[80%] lg:w-[819.2px] h-auto mb-[2%]" />
      <img src={Website} alt="Website" className="relative w-[80%] lg:w-[819.2px] h-auto mb-[2%]" />
    </div>
  );
}

export default Choose;
