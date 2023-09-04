import chatIcon from "../../Assets/chat-icon.svg";
import igWhite from "../../Assets/instagram-white.svg";
import waWhite from "../../Assets/wa-white.svg";
import crossButton from "../../Assets/x.svg";

function Product() {
  // const [buttonClicked, setButtonClicked] = useState(false);
  const handleToggle = () => {
    const buttonWa = document.getElementById("buttonWa");
    const buttonIg = document.getElementById("buttonIg");
    // setButtonClicked(!buttonClicked);
    buttonIg.classList.toggle("transition-transform");
    buttonWa.classList.toggle("hidden");
    buttonWa.classList.toggle("transition-transform");
    buttonIg.classList.toggle("hidden");
  };

  return (
    <div className="relative w-full h-[100px] border-b-[1px] border-gray-300">
      <div className="text-container">
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-40%] font-space left-5">
          <h1 className="font-bold text-2xl">Product Name</h1>

          {/* Price */}
          <h3 className="font-light -translate-x-0 translate-y-[-200%]">
            Rp 25.000
          </h3>
        </div>
        <div className="flex justify-center p-0 m-0 absolute top-[50%] w-[50px] h-[50px] -translate-x-0 translate-y-[-50%] right-6 shadow-lg rounded-xl bg-[#FFFFF] group cursor-pointer">
          <button
            id="button"
            onClick={handleToggle}
            // className={buttonClicked ? "button-clicked" : ""}
          >
            <img src={crossButton} alt="chat icon" width={28} height={28} />
          </button>
        </div>
        <div>
          <div
            id="buttonIg"
            className=" justify-center hidden transition-transform items-center p-0 m-0 absolute top-[109%] w-[50px] h-[50px] -translate-x-0 translate-y-[-50%] right-6 shadow-2xl rounded-xl bg-[#5D84F5]"
          >
            <div className="flex">
              <img
                className="top-[170%]  -translate-x-[-40%] translate-y-[40%]"
                src={igWhite}
                alt="chat icon"
                width={28}
                height={28}
              />
            </div>
          </div>
          <div
            id="buttonWa"
            className=" justify-center hidden transition-transform items-center p-0 m-0 absolute top-[170%] w-[50px] h-[50px] -translate-x-0 translate-y-[-50%] right-6 shadow-2xl rounded-xl bg-[#5D84F5]"
          >
            <img
              className="top-[170%]  -translate-x-[-40%] translate-y-[40%]"
              src={waWhite}
              alt="chat icon"
              width={28}
              height={28}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
