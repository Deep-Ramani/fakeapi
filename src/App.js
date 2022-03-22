import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ProductDetail } from "./components/ProductDetail";
import { ProductListing } from "./components/ProductListing";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
        <Route path="/"  element={<ProductListing/>} exact />;
        <Route path="/product/:productId" exact element={ProductDetail} />;
        <Route path="*"> 404 Page not found </Route>;
        </Routes>
      </Router>
    </div>
  );
}

export default App;
