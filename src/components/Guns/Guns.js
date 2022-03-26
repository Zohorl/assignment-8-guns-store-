import React from 'react';
import './Guns.css'
const Guns = (props) => {
    const { name, img, price } = props.gun;
    return (
        <div className='gun'>
            <img src={img} alt="" />
            <div className="gun-info">
                <p>Name : {name}</p>
                <p>Price : ${price}</p>
                <button className='btn-cart'>
                    <p className='btn-text'>Add to Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Guns;