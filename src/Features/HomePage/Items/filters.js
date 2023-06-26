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

  return (
    <div className="relative ml-[5%] pt-1">
      <img src={filterIcon} alt="Filter Icon" className="float-left pr-1.5 cursor-pointer" onClick={handleFilterClick} />
      {showFilters && <div className="absolute z-50 top-[25px] w-[138px] h-[107px] rounded-lg shadow-md shadow-black border-bordergray border bg-white">
          <div className="font-bold font-space text-[8px] mt-[11px] ml-[13px]">Add Filter</div>
          <div className="font-space text-[5px] mt-[8px] ml-[13px]">Categories</div>



        </div>}
      <img src={priceIcon} alt="Ascending or Descending" className="float-left pr-1.5 cursor-pointer" onClick={handlePriceClick} />
      <img src={dateIcon} alt="Ascending or Descending" className="float-left cursor-pointer" onClick={handleDateClick} />
    </div>
  );
}

export default Filters;
