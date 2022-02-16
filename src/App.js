import React,{useState, useEffect} from "react";
import Home from "./pages/home";
import Checkout from "./pages/checkout";
import Product from "./pages/productpage";
import Notfound from "./pages/notfound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';


const App = () => {
  const [product, setProduct] =useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then(resp => {
      console.log(resp.data)
    setProduct([...resp.data]);
  });
  },[]);
  
  
  
  

  return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home product={product}/>}/>
            <Route path="/product/:productid" element={<Product product={product} setCart={setCart}/>}/>
            <Route path="/checkout" element={<Checkout cart={cart}/>}/>
            <Route path="*" element={<Notfound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App