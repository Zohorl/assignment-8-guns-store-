import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    // console.log(cart)
    return (
        <div className='cart'>
            <h3>Your gun list :</h3>
            {
                cart.map(gun => <h4>{gun.name}</h4>)
            }
        </div>
    );
};

export default Cart;