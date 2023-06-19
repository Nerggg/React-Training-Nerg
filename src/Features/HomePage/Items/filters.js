import FilterIcon from '../../../Assets/filter-icon.svg';
import Ngurut1 from '../../../Assets/ngurut1.svg';
import Ngurut2 from '../../../Assets/ngurut2.svg';

function Filters() {
  return (
    <div className="relative ml-[5%] pt-1">
      <img src={FilterIcon} alt="Filter Icon" className="float-left pr-1.5" />
      <img src={Ngurut1} alt="Ascending or Descending" className="float-left pr-1.5" />
      <img src={Ngurut2} alt="Ascending or Descending" className="float-left" />
    </div>
  );
}

export default Filters;
