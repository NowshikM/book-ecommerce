import { Button } from 'antd';


function Product(){
    let data=JSON.parse(localStorage.getItem('view_product'));
    
    return(
        <div>
            <img src={data.image} height='200px' width='200px' /><br/>
            <h5>Name:{data.title}</h5>
            <h5>Description:{data.description}</h5>
            <h5>Category:{data.category}</h5>
            <h5>Price:{data.price}</h5>
            <h5>Rating: Rate: {data.rating.rate}, Count:{data.rating.count}</h5>
            <Button >view Cart</Button>

        </div>
    );
}
export default Product;