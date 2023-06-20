import chatIcon from "../../Assets/chat-icon.svg";
import igWhite from "../../Assets/instagram-white.svg";
import waWhite from "../../Assets/wa-white.svg";

function Product() {
  // const [buttonClicked, setButtonClicked] = useState(false);
  const handleToggle = () => {
    const buttonIg = document.getElementById("buttonIg");
    const buttonWa = document.getElementById("buttonWa");
    // setButtonClicked(!buttonClicked);
    buttonIg.classList.toggle("hidden");
    buttonIg.classList.toggle("transition-transform");
    buttonWa.classList.toggle("hidden");
    buttonWa.classList.toggle("transition-transform");
  };

  return (
    <div className="relative w-full h-[100px] border-b-[1px] border-gray-300">
      <div className="text-container">
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-40%] font-space left-5">
          <h1 className="font-bold text-2xl">Product Name</h1>
          <h3 className="font-light -translate-x-0 translate-y-[-200%]">
            Rp 25.000
          </h3>
        </div>
        <div className="flex justify-center p-0 m-0 absolute top-[50%] w-[50px] h-[50px] -translate-x-0 translate-y-[-50%] right-5 shadow-2xl rounded-xl bg-[#5D84F5] group cursor-pointer">
          <button
            id="button"
            onClick={handleToggle}
            // className={buttonClicked ? "button-clicked" : ""}
          >
            <img src={chatIcon} alt="chat icon" width={28} height={28} />
          </button>
        </div>
        <div>
          <div
            id="buttonIg"
            className="flex justify-center  transition-transform items-center p-0 m-0 absolute top-[109%] w-[50px] h-[50px] -translate-x-0 translate-y-[-50%] right-5 shadow-2xl rounded-xl bg-[#5D84F5]"
          >
            <img src={igWhite} alt="chat icon" width={28} height={28} />
          </div>
          <div
            id="buttonWa"
            className="flex justify-center transition-transform items-center p-0 m-0 absolute top-[170%] w-[50px] h-[50px] -translate-x-0 translate-y-[-50%] right-5 shadow-2xl rounded-xl bg-[#5D84F5]"
          >
            <img src={waWhite} alt="chat icon" width={28} height={28} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
