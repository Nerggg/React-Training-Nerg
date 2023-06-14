import Header from './Features/Header/header';
import WelcomingPage from './Features/Welcoming/welcoming';
import Why from './Features/WhyLoakPost/whyloakpost';
import HowItWorks from './Features/HowItWorks/howitworks';
import Choose from './Features/ChooseOurPackage/choose';
import GetStarted from './Features/GetStarted/getstarted';
import Footer from './Features/Footer/footer';

function App() {
  return (
    <div>
      <Header />
      <WelcomingPage />
      <Why />
      <HowItWorks />
      <Choose />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
