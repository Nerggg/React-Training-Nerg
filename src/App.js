import Rectangle from './components/header/rect';
import SearchBar from './components/header/search';
import ItemList from './components/header/itemlist';
import AdsRectangle from './components/ads/ads-rect';
import CatRectangle from './components/categories/cat-rect';
import Recom from './components/recommend/recom';
import RecomBox from './components/recommend/recombox';
import FooterRectangle from './components/footer/footer-rect';
import ContactUs from './components/footer/contact-us';

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
      <FooterRectangle>
        <ContactUs />
      </FooterRectangle>
    </div>
  );
}

export default App;
