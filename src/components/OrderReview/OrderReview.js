import React from 'react';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useNavigate } from "react-router-dom";
import Cart from '../Cart/Cart';
import OrderedProduct from '../OrderedProduct/OrderedProduct';

const OrderReview = () => {
    const [products] = useProducts([])
    const history = useNavigate()
    const [cart, setCart] = useCart(products)

    const removeProduct = (key) =>{
        const restProduct = cart.filter(product=> product.key !== key)
        setCart(restProduct)
        removeFromDb(key)
    }
    const handlePlaceOrder= () =>{
        
        history('/placeOrder');
        setCart([]);
        clearTheCart()
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <OrderedProduct
                        product={product}
                        removeProduct={removeProduct}
                    ></OrderedProduct>)
                }
            </div>
            <div className='cart-container'>
            <Cart cart={cart}>
                <button className='btn-regular' onClick={handlePlaceOrder}>Place Order</button>
            </Cart>

            </div>
            
        </div>
    );
};

export default OrderReview;