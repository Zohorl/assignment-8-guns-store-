import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    // console.log(cart)
    let total = 0;
    for (const gun of cart) {
        // console.log(gun);
        total = total + parseFloat(gun.price);
        const x = gun.name;

    }
    return (
        <div className='cart'>

            <h5>price : {total}</h5>
        </div>
    );
};

export default Cart;