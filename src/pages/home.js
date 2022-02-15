import React, { useState, useEffect } from "react";
import "../index.css"
import Navbar from "../components/navbar";
import Card from "../components/card";
import axios from 'axios';
function Home () {
  const [product, setProduct] =useState([]);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then(resp => {
    setProduct([...resp.data]);
  });
  },[]);
  
  return (
  <div >
    <Navbar />
    <div className="row dimension">
      
      {product?.map((prod)=><div className="col s12 m6 l3"><Card title={prod.title} img={prod.image} description={prod.description}/></div>)}
    </div>
  </div>
);
}
export default Home;