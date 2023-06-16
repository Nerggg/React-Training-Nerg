import Header from './Features/Header/header';
import Box from "./Features/FaqPage/Box.js";
import "./Features/FaqPage/Box.css";
import FAQ from "./Features/FaqPage/FAQ.js";
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
