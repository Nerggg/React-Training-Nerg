import React from 'react';

const Recom = ({ children }) => {
  return (
    <div className="flex relative top-[130px] left-[120px] font-bold text-black text-4xl">
      <span>Recommended for YOU</span>
      {children}
    </div>
  );
};

export default Recom;
