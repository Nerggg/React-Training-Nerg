import Welcome from '../../../Assets/landingpage-welcome.svg';
import Started from '../../../Assets/getstarted-button.svg';
import Learn from '../../../Assets/learnmore.svg';

function WelcomingPage() {
  return (
    <div className="relative w-full h-auto flex flex-wrap justify-center items-center">
      <img src={Welcome} alt="Welcome!" className="w-full h-auto relative mt-[10%] mx-[20%]" />
      <img src={Started} alt="Get Started" className="w-[18%] h-auto mt-[5%] mb-[7%] mr-[2.5%]" />
      <img src={Learn} alt="Learn More" className="w-[18%] h-auto mt-[5%] mb-[7%] ml-[2.5%]" />
    </div>
  );
}

export default WelcomingPage;
