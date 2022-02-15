import React, { useState, useEffect } from "react";
import "../index.css"
import CardLayout from "../components/card";
import axios from 'axios';
import { Card } from 'antd';

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
    
    <Card title="Products">
    {product?.map((prod)=><Card.Grid style={gridStyle}><CardLayout productdata={prod}/></Card.Grid>)}
  </Card>
  </div>
);
}
export default Home;