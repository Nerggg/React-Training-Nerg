import React from 'react';

const CatRectangle = ({ children }) => {
  return (
    <div className="flex justify-center items-center relative top-[290px] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[1100px] h-[390px] bg-white rounded-2xl border-solid border-black border-[3px]">
      <span className="text-5xl font-bold text-black">CATEGORIES</span>
      {children}
    </div>
  );
};

export default CatRectangle;
