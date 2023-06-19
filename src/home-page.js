import Header from './Features/Header/header';
import Ad from './Features/HomePage/Advertisement/ad';
import Sorting from './Features/HomePage/Items/sorting';
import ItemList from './Features/HomePage/Items/items';
import CatsBubble from './Features/HomePage/Categories/bubble';
import Footer from './Features/Footer/footer';

function HomePage() {
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

export default HomePage;
