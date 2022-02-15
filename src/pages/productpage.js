import { Button, Card, Row, Col } from 'antd';


import React from 'react';

function Product({setCart}){
    let data=JSON.parse(localStorage.getItem('view_product'));
    
    return(

        <div className="site-card-wrapper">
        <Row gutter={16} align="middle" >
          <Col span={8}>
            <img src={data.image} height='400px' width='400px'/><br />
            <Button type="primary" align="middle" onClick={(e)=>{setCart(prevCart=>[...prevCart,data])}}>Add Cart</Button>
          </Col>
          <Col span={8}>
            <Card title="Product Deatils" bordered={true}>
            <p><strong>Name:</strong>{data.title}</p>
            <p><strong>Description:</strong>{data.description}</p>
             <p><strong>Category:</strong>{data.category}</p>
             <p><strong>Price:</strong>{data.price}</p>
             <p><strong>Rating: Rate:</strong> {data.rating.rate}, <strong>Count:</strong>{data.rating.count}</p>
            </Card>
          </Col>
        </Row>
      </div>
    );
}
export default Product;