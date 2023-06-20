import React, { useState } from "react";
import arrowLeft from "../../Assets/arrow-left.svg";
import arrowRight from "../../Assets/arrow-right.svg";
import product1 from "../../Assets/shirt.jpg";
import product2 from "../../Assets/black-shirt.jpg";
import product3 from "../../Assets/shirt3.jpg";
// import { RxDotFilled } from "react-icons/rx";

function Picture() {
  const slides = [
    {
      url: product1,
    },
    {
      url: product2,
    },
    {
      url: product3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full h-[390px] m-auto p-auto group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full  bg-center bg-cover bg-[#D9D9D9] duration-150"
      ></div>

      {/* Left Arrow */}
      <div className=" absolute top-[50%]  -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded p-2  text-[#D9D9D9] cursor-pointer ">
        <img src={arrowLeft} onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className="  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded p-2  text-[#D9D9D9] cursor-pointer ">
        <img src={arrowRight} onClick={nextSlide} />
      </div>

      {/* Buletan bawah picture */}

      {/* <div className="flex top-4 justify-center py-2 bottom-5">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Picture;
