import RecomText from './recom-text';
import Filters from './filters';

function Items() {
  return (
    <div className="flex-wrap">
      <RecomText />
      <Filters />
      <div className="w-28 h-40 bg-itemgray" />
    </div>
  );
}

export default Items;
