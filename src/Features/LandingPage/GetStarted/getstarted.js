import { useNavigate } from 'react-router-dom';
import Title from '../../../Assets/getstartednow-black.svg';
import Form from '../../../Assets/fillinform.svg';

function GetStarted() {

  const navigate = useNavigate();

  const handleFormClick = () => {
    navigate('/form');
  };

  return (
    <div className="relative w-full h-auto flex flex-wrap justify-center items-center">
      <img src={Title} alt="Get Started!" className="w-full h-auto relative mt-[7%] mx-[20%]" />
      <img src={Form} alt="Fill in Form!" className="w-[18%] h-auto mt-[4%] mb-[8%] mr-[2.5%] cursor-pointer" onClick={handleFormClick} />
    </div>
  );
}

export default GetStarted;
