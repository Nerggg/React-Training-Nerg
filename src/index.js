import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Pages/home-page'
import FaqPage from './Pages/faq-page'
import LandingPage from './Pages/landing-page'
import AboutUsPage from './Pages/aboutus-page'
import ProductPage from './Pages/product-page'
import ErrorPage from './Pages/error-page'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
