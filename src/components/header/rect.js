import React from 'react';

const Rectangle = ({ children }) => {
  return (
    <div className="flex justify-center items-center relative top-0 left-0 w-full h-[175px] bg-[#212d32] rounded-b-2xl">
      {children}
    </div>
  );
};

export default Rectangle;
