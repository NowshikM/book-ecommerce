import React,{useState, useEffect} from "react";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import Product from "./pages/productpage";
import Notfound from "./pages/notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
  

  

  return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={<Notfound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App