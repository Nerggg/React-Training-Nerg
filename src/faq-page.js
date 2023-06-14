import Header from './Features/Header/header';
import Box from "./Features/PageFaq/Box.js";
import "./Features/PageFaq/Box.css";
import FAQ from "./Features/PageFaq/FAQ.js";
import React from 'react';
import Footer from './Features/Footer/footer';

function FaqPage() {
  return (
    <div>
      <Header />
      <div>
      <FAQ/>
      <Box question="hola" answer="hi" />
      <Box question="halo?" answer="hi" />
      <Box question="halo?" answer="hi" />
      <Box question="halo?" answer="hi" />
      <Box question="halo?" answer="hi" />
      </div>
      <Footer />
    </div>
  );
}

export default FaqPage;
