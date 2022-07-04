import React from 'react';

const OrderedProduct = (props) => {
    const {key, name, price, stock} = props.product
    const {removeProduct} = props
    return (
        <div className="product">
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Price: {price}</p>
                <p>
                    <small>only {stock} left in stock - order soon</small>
                </p>
                <button className='btn-regular' onClick={()=> removeProduct(key)} >Remove</button>
            </div>
        </div>
    );
};

export default OrderedProduct;