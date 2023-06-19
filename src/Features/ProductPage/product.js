import chatIcon from "../../Assets/chat-icon.svg";
function product() {
  return (
    <div className="relative w-full h-[96px]">
      <div className="w-full h-full border-b-[1px] border-gray-300 font-space ">
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 ">
          <h1 className="font-bold  text-2xl">Product Name</h1>
          <h3>Rp 25.000</h3>
        </div>
        <div className="flex justify-center absolute top-[50%] w-[50px] h-[50px] -translate-x-0 translate-y-[-50%] right-5 rounded-xl bg-[#5D84F5] ">
          <img src={chatIcon} alt="chat icon" width="28px" height="28px" />
        </div>
      </div>
    </div>
  );
}

export default product;
