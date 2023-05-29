import Rectangle from './components/header/rect';
import SearchBar from './components/header/search';
import ItemList from './components/header/itemlist';
import AdsRectangle from './components/ads/ads-rect';
import CatRectangle from './components/categories/cat-rect';
import Recom from './components/recommend/recom';
import FooterRectangle from './components/footer/footer-rect';
import ContactUs from './components/footer/contact-us';
import Popup from './components/popup/popup';

function App() {
  return (
    <div>
      <Rectangle>
        <SearchBar />
        <ItemList />
      </Rectangle>
      <AdsRectangle></AdsRectangle>
      <CatRectangle></CatRectangle>
      <Recom></Recom>
      <FooterRectangle>
        <ContactUs />
      </FooterRectangle>
      <Popup />
    </div>
  );
}

export default App;
