import { Card,Row,Col } from 'antd';
import React from 'react';

function Checkout({cart}){
    console.log(cart)
    return(
        <Row justify="space-around">
            <h3>Checkout Page</h3><br/>
            {cart?.map((productdata)=><Col span={6}><Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={productdata.image} height='200px' weight='200px' />}
            >
                <p><strong>Name:</strong>{productdata.title}</p>
                <p><strong>Category:</strong>{productdata.category}</p>
                <p><strong>Price:</strong>{productdata.price}</p>
                <p><strong>Rating: Rate:</strong> {productdata.rating.rate}, <strong>Count:</strong>{productdata.rating.count}</p>
      </Card></Col>)}
      
    </Row>
    );
}
export default Checkout;