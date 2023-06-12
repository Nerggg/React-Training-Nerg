import Header from './Features/Header/header';
import Ad from './Features/Advertisement/ad';
import Sorting from './Features/Items/sorting';
import ItemList from './Features/Items/items';
import CatsBubble from './Features/Categories/bubble';
import Footer from './Features/Footer/footer';

function App() {
  return (
    <div>
      <Header />
      <Ad />
      <Sorting />
      <ItemList />
      <CatsBubble />
      <Footer />
    </div>
  );
}

export default App;
