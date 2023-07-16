import React, { useState } from 'react';
import FilterIcon from '../../../Assets/filter-icon.svg';
import FilterIconPressed from '../../../Assets/filter-icon-pressed.svg';
import Price from '../../../Assets/price.svg';
import PriceAsc from '../../../Assets/price-ascend.svg';
import PriceDesc from '../../../Assets/price-descend.svg';
import Date from '../../../Assets/date.svg';
import DateAsc from '../../../Assets/date-ascend.svg';
import DateDesc from '../../../Assets/date-descend.svg';

function Filters() {
  const [filterIcon, setFilterIcon] = useState(FilterIcon);
  const [priceIcon, setPriceIcon] = useState(Price);
  const [dateIcon, setDateIcon] = useState(Date);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleFilterClick = () => {
    if (filterIcon === FilterIcon) {
      setFilterIcon(FilterIconPressed);
      setShowFilters(true);
    } else if (filterIcon === FilterIconPressed) {
      setFilterIcon(FilterIcon);
      setShowFilters(false);
    }
  };

  const handlePriceClick = () => {
    if (priceIcon === Price) {
      setPriceIcon(PriceAsc);
    } else if (priceIcon === PriceAsc) {
      setPriceIcon(PriceDesc);
    } else if (priceIcon === PriceDesc) {
      setPriceIcon(Price);
    }
  };

  const handleDateClick = () => {
    if (dateIcon === Date) {
      setDateIcon(DateAsc);
    } else if (dateIcon === DateAsc) {
      setDateIcon(DateDesc);
    } else if (dateIcon === DateDesc) {
      setDateIcon(Date);
    }
  };  
  
  const handleCategoryClick = (category) => {
    const updatedCategories = [...selectedCategories];
    const categoryIndex = updatedCategories.indexOf(category);

    if (categoryIndex > -1) {
      updatedCategories.splice(categoryIndex, 1);
    } else {
      updatedCategories.push(category);
    }

    setSelectedCategories(updatedCategories);
  };

  return (
    <div className="relative ml-[5%] pt-1">
      <img src={filterIcon} alt="Filter Icon" className="float-left pr-1.5 cursor-pointer" onClick={handleFilterClick} />
      {showFilters && <div className="absolute z-50 top-[25px] w-[138px] h-[180px] rounded-lg shadow-md shadow-black border-bordergray border bg-white">
          <div className="font-bold font-space text-[8px] mt-[11px] ml-[13px]">Add Filter</div>
          <div className="font-space text-[5px] mt-[8px] ml-[13px]">Categories</div>
          <div className="flex flex-wrap">
            <div className={`w-[30px] h-[11px] flex justify-center items-center rounded-sm border-bordergray border mt-[5px] ml-[13px] ${selectedCategories.includes('Attire') ? 'bg-blue-200' : ''}`} onClick={() => handleCategoryClick('Attire')}>
              <div className={`font-space text-[5px] ${selectedCategories.includes('Attire') ? 'text-pressedbluefont' : ''}`}>Attire</div>
            </div>
            <div className={`w-[40px] h-[11px] flex justify-center items-center rounded-sm border-bordergray border mt-[5px] ml-[5px] ${selectedCategories.includes('Electronics') ? 'bg-blue-200' : ''}`} onClick={() => handleCategoryClick('Electronics')}>
              <div className={`font-space text-[5px] ${selectedCategories.includes('Electronics') ? 'text-pressedbluefont' : ''}`}>Electronics</div>
            </div>
            <div className={`w-[31px] h-[11px] flex justify-center items-center rounded-sm border-bordergray border mt-[5px] ml-[5px] ${selectedCategories.includes('Books') ? 'bg-blue-200' : ''}`} onClick={() => handleCategoryClick('Books')}>
              <div className={`font-space text-[5px] ${selectedCategories.includes('Books') ? 'text-pressedbluefont' : ''}`}>Books</div>
            </div>
            <div className={`w-[56px] h-[11px] flex justify-center items-center rounded-sm border-bordergray border mt-[5px] ml-[13px] ${selectedCategories.includes('Home Appliances') ? 'bg-blue-200' : ''}`} onClick={() => handleCategoryClick('Home Appliances')}>
              <div className={`font-space text-[5px] ${selectedCategories.includes('Home Appliances') ? 'text-pressedbluefont' : ''}`}>Home Appliances</div>
            </div>
            <div className={`w-[41px] h-[11px] flex justify-center items-center rounded-sm border-bordergray border mt-[5px] ml-[5px] ${selectedCategories.includes('Accessories') ? 'bg-blue-200' : ''}`} onClick={() => handleCategoryClick('Accessories')}>
              <div className={`font-space text-[5px] ${selectedCategories.includes('Accessories') ? 'text-pressedbluefont' : ''}`}>Accessories</div>
            </div>
            <div className={`w-[64px] h-[11px] flex justify-center items-center rounded-sm border-bordergray border mt-[5px] ml-[13px] ${selectedCategories.includes('Vehicle Accessories') ? 'bg-blue-200' : ''}`} onClick={() => handleCategoryClick('Vehicle Accessories')}>
              <div className={`font-space text-[5px] ${selectedCategories.includes('Vehicle Accessories') ? 'text-pressedbluefont' : ''}`}>Vehicle Accessories</div>
            </div>
            <div className={`w-[31px] h-[11px] flex justify-center items-center rounded-sm border-bordergray border mt-[5px] ml-[5px] ${selectedCategories.includes('Shoes') ? 'bg-blue-200' : ''}`} onClick={() => handleCategoryClick('Shoes')}>
              <div className={`font-space text-[5px] ${selectedCategories.includes('Shoes') ? 'text-pressedbluefont' : ''}`}>Shoes</div>
            </div>
            <div className={`w-[26px] h-[11px] flex justify-center items-center rounded-sm border-bordergray border mt-[5px] ml-[13px] ${selectedCategories.includes('Bags') ? 'bg-blue-200' : ''}`} onClick={() => handleCategoryClick('Bags')}>
              <div className={`font-space text-[5px] ${selectedCategories.includes('Bags') ? 'text-pressedbluefont' : ''}`}>Bags</div>
            </div>
            <div className={`w-[41px] h-[11px] flex justify-center items-center rounded-sm border-bordergray border mt-[5px] ml-[5px] ${selectedCategories.includes('Stationery') ? 'bg-blue-200' : ''}`} onClick={() => handleCategoryClick('Stationery')}>
              <div className={`font-space text-[5px] ${selectedCategories.includes('Stationery') ? 'text-pressedbluefont' : ''}`}>Stationery</div>
            </div>
            <div className={`w-[33px] h-[11px] flex justify-center items-center rounded-sm border-bordergray border mt-[5px] ml-[5px] ${selectedCategories.includes('Beauty') ? 'bg-blue-200' : ''}`} onClick={() => handleCategoryClick('Beauty')}>
              <div className={`font-space text-[5px] ${selectedCategories.includes('Beauty') ? 'text-pressedbluefont' : ''}`}>Beauty</div>
            </div>
            <div className={`w-[32px] h-[11px] flex justify-center items-center rounded-sm border-bordergray border mt-[5px] ml-[13px] ${selectedCategories.includes('Others') ? 'bg-blue-200' : ''}`} onClick={() => handleCategoryClick('Others')}>
              <div className={`font-space text-[5px] ${selectedCategories.includes('Others') ? 'text-pressedbluefont' : ''}`}>Others</div>
            </div>
          </div>
          <div className="font-space text-[5px] mt-[15px] ml-[13px]">Price Range</div>
          <div className="font-space text-[5px] mt-[15px] ml-[13px]">Item Age</div>
        </div>}
      <img src={priceIcon} alt="Ascending or Descending" className="float-left pr-1.5 cursor-pointer" onClick={handlePriceClick} />
      <img src={dateIcon} alt="Ascending or Descending" className="float-left cursor-pointer" onClick={handleDateClick} />
    </div>
  );
}

export default Filters;
