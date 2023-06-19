import Header from '../Header/header';
import Box from "./Box.js";
import "./Box.css";
import FAQ from "./FAQ.js";
import React from 'react';
import Footer from '../Footer/footer';

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
