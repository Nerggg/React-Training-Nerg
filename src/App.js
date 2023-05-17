import Rectangle from './components/main bar/rect';
import SearchBar from './components/main bar/search';
import ItemList from './components/main bar/itemlist';
import AdsRectangle from './components/ads/ads-rect';

function App() {
  return (
    <div>
      <Rectangle>
        <SearchBar />
        <ItemList />
      </Rectangle>
      <AdsRectangle>
      </AdsRectangle>
    </div>
  );
}

export default App;
