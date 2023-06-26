import React, { useState } from 'react';
import FilterIcon from '../../../Assets/filter-icon.svg';
import Price from '../../../Assets/price.svg';
import PriceAsc from '../../../Assets/price-ascend.svg';
import PriceDesc from '../../../Assets/price-descend.svg';
import Date from '../../../Assets/date.svg';
import DateAsc from '../../../Assets/date-ascend.svg';
import DateDesc from '../../../Assets/date-descend.svg';

function Filters() {

  const [priceIcon, setPriceIcon] = useState(Price);

  const handlePriceClick = () => {
    if (priceIcon === Price) {
      setPriceIcon(PriceAsc);
    } else if (priceIcon === PriceAsc) {
      setPriceIcon(PriceDesc);
    } else if (priceIcon === PriceDesc) {
      setPriceIcon(Price);
    }
  };

  const [dateIcon, setDateIcon] = useState(Date);

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
      <img src={FilterIcon} alt="Filter Icon" className="float-left pr-1.5" />
      <img src={priceIcon} alt="Ascending or Descending" className="float-left pr-1.5 cursor-pointer" onClick={handlePriceClick} />
      <img src={dateIcon} alt="Ascending or Descending" className="float-left cursor-pointer" onClick={handleDateClick} />
    </div>
  );
}

export default Filters;
