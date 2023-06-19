import LoakPostLogo from '../../../Assets/loakpost-logo.svg';
import Description from '../../../Assets/logo-desc.svg';

function LogoDesc() {
  return (
    <div className="relative w-full h-auto flex flex-col justify-center items-center bg-myblue">
      <img src={LoakPostLogo} alt="LoakPost Logo" className="relative w-[20%] h-autp lg:w-[204.8px] mt-[5%] bg-itemgray" />
      <img src={Description} alt="Description" className="relative w-[60%] lg:w-[614.4px] h-auto mt-[3%] mb-[5%]" />
    </div>
  );
}

export default LogoDesc;
