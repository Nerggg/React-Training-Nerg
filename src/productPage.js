import Header from "./Features/Header/header";
import Picture from "./Features/ProductPage/picture";
import Product from "./Features/ProductPage/product";
import Footer from "./Features/Footer/footer";
import Desc from "./Features/ProductPage/desc";
// import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>

      <div className="picture">
        <Picture />
      </div>

      <div className="productInfo">
        <Product />
      </div>

      <div className="description">
        <Desc />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
