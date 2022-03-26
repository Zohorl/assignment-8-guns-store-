import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Guns.css';
const Guns = ({ handleAddToCart, gun }) => {
    const { name, img, price } = gun;
    return (
        <div className='gun'>
            <img src={img} alt="" />
            <div className="gun-info">
                <p>Name : {name}</p>
                <p>Price : ${price}</p>
                <button onClick={() => handleAddToCart(gun)} className='btn-cart'>
                    <p className='btn-text'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Guns;