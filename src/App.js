import Header from './Features/Header/header';
import GetStarted from './Features/GetStarted/getstarted';
import Why from './Features/WhyLoakPost/whyloakpost';
import Footer from './Features/Footer/footer';

function App() {
  return (
    <div>
      <Header />
      <div className="w-full h-screen">
        <GetStarted />
        <Why />
      </div>
      <Footer />
    </div>
  );
}

export default App;
