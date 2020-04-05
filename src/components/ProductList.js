import React, { Component } from 'react';
import Title from './Title'
import Product from './Product';
import { ProductConsumer } from '../context';

class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
<div className="py-5">
    <div className="container">
            <Title name="our" title="products"></Title>
        <div className="row">
            <ProductConsumer>
                {value=>{
                    return value.products.map(product =>{
                        return <Product key={product.id} product={product}></Product>
                    })
                        console.log(value);
                }}
            </ProductConsumer>
        </div>
    </div>
</div>

            </React.Fragment>
           
           //     <Product></Product>
          
        );
    }
}

export default ProductList;