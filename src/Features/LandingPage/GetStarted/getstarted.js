import Title from '../../../Assets/getstartednow-black.svg';
import Form from '../../../Assets/fillinform.svg';

function GetStarted() {
  return (
    <div className="relative w-full h-auto flex flex-wrap justify-center items-center">
      <img src={Title} alt="Get Started!" className="w-full h-auto relative mt-[7%] mx-[20%]" />
      <img src={Form} alt="Fill in Form!" className="w-[18%] h-auto mt-[4%] mb-[8%] mr-[2.5%]" />
    </div>
  );
}

export default GetStarted;
