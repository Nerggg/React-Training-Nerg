import Rectangle from './components/main bar/rect';
import SearchBar from './components/main bar/search';
import ItemList from './components/main bar/itemlist';
import AdsRectangle from './components/ads/ads-rect';
import CatRectangle from './components/categories/cat-rect';
import Recom from './components/recommend/recom';
import RecomBox from './components/recommend/recombox';

function App() {
  return (
    <div>
      <Rectangle>
        <SearchBar />
        <ItemList />
      </Rectangle>
      <AdsRectangle></AdsRectangle>
      <CatRectangle></CatRectangle>
      <Recom>
        <RecomBox />
      </Recom>
    </div>
  );
}

export default App;
