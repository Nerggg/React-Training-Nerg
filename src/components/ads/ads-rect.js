import React from 'react';

const AdsRectangle = ({ children }) => {
  return (
    <div className="flex justify-center items-center relative top-[300px] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[1100px] h-[500px] bg-gray-500 rounded-2xl">
      <span className="text-5xl font-bold text-black">ADVERTISEMENT</span>
      {children}
    </div>
  );
};

export default AdsRectangle;
