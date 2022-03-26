import React, { useEffect, useState } from 'react';
import Guns from '../Guns/Guns';
import './Shop.css';
const Shop = () => {
    const [guns, setGuns] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
    }, []);
    const handleAddToCart = (gun) => {
        const newCart = [...cart, gun];
        setCart(newCart);
        // console.log('clicked');
    }
    return (
        <div>
            <h2>Guns store</h2>
            <div className='shop-container'>
                <div className="guns-container">
                    {
                        guns.map(gun => <Guns
                            handleAddToCart={handleAddToCart}
                            key={gun.id}
                            gun={gun}
                        ></Guns>)
                    }
                </div>
                <div className="cart-container">

                </div>
            </div>
        </div>
    );
};

export default Shop;