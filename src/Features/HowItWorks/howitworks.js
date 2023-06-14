import How from '../../Assets/howitworks.svg';
import Step1 from '../../Assets/step-1.svg';
import Step2 from '../../Assets/step-2.svg';
import Step3 from '../../Assets/step-3.svg';
import Step4 from '../../Assets/step-4.svg';

function HowItWorks() {
  return (
    <div className="relative w-full h-auto flex flex-col justify-center items-center border-b border-bordergray">
      <img src={How} alt="How?" className="relative w-[55%] lg:w-[563.2px] h-auto mt-[5%] mb-[3%]" />
      <img src={Step1} alt="Step one" className="relative w-[80%] lg:w-[819.2px] h-auto mb-[2%]" />
      <img src={Step2} alt="Step two" className="relative w-[80%] lg:w-[819.2px] h-auto mb-[2%]" />
      <img src={Step3} alt="Step three" className="relative w-[80%] lg:w-[819.2px] h-auto mb-[2%]" />
      <img src={Step4} alt="Step four" className="relative w-[80%] lg:w-[819.2px] h-auto mb-[4%]" />
    </div>
  );
}

export default HowItWorks;
