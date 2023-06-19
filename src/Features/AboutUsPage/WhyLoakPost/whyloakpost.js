import WhyLoakPost from '../../../Assets/why-loakpost-black.svg';
import Reason from '../../../Assets/3-reason.svg';

function Why() {
  return (
    <div className="relative w-full h-auto flex flex-col justify-center items-center">
      <img src={WhyLoakPost} alt="Why?" className="relative w-[55%] lg:w-[563.2px] h-auto mt-[5%] mb-[3%]" />
      <img src={Reason} alt="Reason" className="relative w-[80%] lg:w-[819.2px] h-auto mb-[6%]" />
    </div>
  );
}

export default Why;
