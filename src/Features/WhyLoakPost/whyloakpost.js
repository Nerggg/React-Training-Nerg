import WhyLoakPost from '../../Assets/why-loakpost.svg';
import Reason from '../../Assets/3-reason.svg';

function Why() {
  return (
    <div className="relative w-full h-auto flex flex-col justify-center items-center bg-myblue mb-[200px]">
      <img src={WhyLoakPost} alt="Why?" className="w-[55%] h-auto relative mt-[5%] mb-[3%]" />
      <img src={Reason} alt="Reason" className="w-[80%] h-auto mb-[6%]" />
    </div>
  );
}

export default Why;
