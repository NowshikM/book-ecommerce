import React from "react";
import { Card,Button } from 'antd';
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

function CardLayout({productdata}){
  console.log(productdata.image);
  let navigate =useNavigate();
    return(
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={productdata.image} height='200px' weight='200px' />}
      >
        <Meta title={productdata.title} description={productdata.description.slice(0,50)+'...'} />
        <Button type="primary" block onClick={()=>{navigate('/product/'+productdata.id)}}>
          View Product
        </Button>
      </Card>
      
      
                
    );
}
export default CardLayout;