import React,{useState, useEffect} from "react";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import Product from "./pages/productpage";
import Notfound from "./pages/notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  
  const [cart, setCart] = useState([]);
  
useEffect(()=>{
    console.log(cart);
},[cart]);
  return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/product" element={<Product setCart={setCart}/>}/>
            <Route path="/checkout" element={<Checkout cart={cart}/>}/>
            <Route path="*" element={<Notfound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App