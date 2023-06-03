import React from 'react';

const Ads = ({ children }) => {
  return (
    <div className="flex relative items-center justify-center top-40 w-11/12 h-96 left-1/2 translate-x-[-50%] bg-[#426EEB] rounded-2xl">
      <span className="text-[#BFCDF5] text-5xl font-bold">ADVERTISEMENT</span>
    </div>
  );
};

export default Ads;
