import React, { useState, useEffect } from "react";
import "../index.css"
import CardLayout from "../components/card";
import axios from 'axios';
import { Button,Card,Row,Col } from 'antd';
import { useNavigate } from "react-router-dom";

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
function Home ({product}) {
  let navigate = useNavigate();
  
  
  return (
  <div>
    
    
  <Row justify="space-around">
    <Button onClick={()=>{navigate('/checkout')}}>View Cart</Button><br/>
    {product?.map((prod)=><Col span={6}><CardLayout productdata={prod}/></Col>)}
      
    </Row>
  </div>
);
}
export default Home;