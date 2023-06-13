import Welcome from '../../Assets/landingpage-welcome.svg';
import Started from '../../Assets/getstarted.svg';
import Learn from '../../Assets/learnmore.svg';

function GetStarted() {
  return (
    <div className="w-screen h-screen">
      <div className="relative w-full h-auto flex flex-wrap justify-center items-center bg-myblue">
        <img src={Welcome} alt="Welcome!" className="w-full h-auto relative mt-[10%] mx-[20%]"/>
        <img src={Started} alt="Get Started" className="w-[20%] h-auto mt-[5%] mb-[8%] mr-[3%]"/>
        <img src={Learn} alt="Learn More" className="w-[20%] h-auto mt-[5%] mb-[8%] ml-[3%]"/>
      </div>
    </div>
  );
}

export default GetStarted;
