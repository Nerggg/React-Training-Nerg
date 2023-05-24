import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative flex justify-center items-center h-full">
      <input type="text" class="w-[800px] h-[40px] p-[10px] rounded-lg bg-white"/>
      <div className="absolute right-0 w-[50px] h-[40px] bg-[#c9d9d8] rounded-r-lg"></div>
    </div>
  );
};

export default SearchBar;
