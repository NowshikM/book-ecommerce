import React, { useState, useEffect } from "react";
import "../index.css"
import CardLayout from "../components/card";
import axios from 'axios';
import { Card,Row,Col } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
function Home () {
  const [product, setProduct] =useState([]);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then(resp => {
      console.log(resp.data)
    setProduct([...resp.data]);
  });
  },[]);
  
  return (
  <div>
    
    
  <Row justify="space-around">
    {product?.map((prod)=><Col span={6}><CardLayout productdata={prod}/></Col>)}
      
    </Row>
  </div>
);
}
export default Home;