import Header from './Features/Header/header';
import WelcomingPage from './Features/LandingPage/Welcoming/welcoming';
import Why from './Features/LandingPage/WhyLoakPost/whyloakpost';
import HowItWorks from './Features/LandingPage/HowItWorks/howitworks';
import Choose from './Features/LandingPage/ChooseOurPackage/choose';
import GetStarted from './Features/LandingPage/GetStarted/getstarted';
import Footer from './Features/Footer/footer';

function LandingPage() {
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

export default LandingPage;
