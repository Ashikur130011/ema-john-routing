import React from 'react';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import Cart from '../Cart/Cart';
import OrderedProduct from '../OrderedProduct/OrderedProduct';

const OrderReview = () => {
    const [products] = useProducts([])
    const [cart, setCart] = useCart(products)
    const removeProduct = (key) =>{
        const restProduct = cart.filter(product=> product.key !== key)
        setCart(restProduct)
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
            <Cart cart={cart}></Cart>

            </div>
            
        </div>
    );
};

export default OrderReview;