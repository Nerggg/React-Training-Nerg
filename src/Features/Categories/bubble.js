import BubbleIcon from '../../Assets/cats-bubble.svg';

function CatsBubble() {
  return (
    <div className="absolute w-14 h-14 rounded-full bg-myblue bottom-[101px] ml-[5%] items-center justify-center flex">
      <img src={BubbleIcon} alt="Bubble Icon" className="w-7 h-7"/>
    </div>
  );
}

export default CatsBubble;
