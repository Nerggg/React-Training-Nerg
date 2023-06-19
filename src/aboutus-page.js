import Header from './Features/Header/header';
import LogoDesc from './Features/AboutUsPage/Description/logo-desc';
import Why from './Features/AboutUsPage/WhyLoakPost/whyloakpost';
import GetStarted from './Features/AboutUsPage/GetStarted/getstarted';
import Footer from './Features/Footer/footer';

function AboutUsPage() {
  return (
    <div>
      <Header />
      <LogoDesc />
      <Why />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default AboutUsPage;
