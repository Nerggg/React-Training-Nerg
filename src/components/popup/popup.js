import React, { useState } from 'react';

const Popup = () => {
  const [isListVisible, setListVisible] = useState(false);

  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={toggleListVisibility}
      >
        Select Month
      </button>
      <ul
        className={`bg-white border border-gray-300 absolute ${
          isListVisible ? 'block' : 'hidden'
        } w-40 py-2 mt-2 rounded shadow-lg`}
      >
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">
          <img src="ig.png" alt="Calendar Icon" className="mr-2" />January</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">February</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">March</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">April</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">May</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">June</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">March</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">March</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">March</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">March</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">March</li>
        <li className="cursor-pointer px-4 py-2 hover:bg-gray-200">March</li>
      </ul>
    </div>
  );
};

export default Popup;
