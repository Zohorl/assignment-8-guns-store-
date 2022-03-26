import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Guns from '../Guns/Guns';
import './Shop.css';
const Shop = () => {
    const [guns, setGuns] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState(-1);
    const handleRandomGun = () => {
        let random = Math.floor(Math.random() * cart.length);
        setRandom(random)
    }
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
    }, []);
    const handleAddToCart = (gun) => {
        const newCart = [...cart, gun];
        setCart(newCart);
    }
    return (
        <div>
            <h2>Guns store</h2>
            <h3>Choose your Guns</h3>
            <div className='shop-container'>
                <div className="guns-container">
                    {
                        guns.map(gun => <Guns
                            key={gun.id}
                            gun={gun}
                            handleAddToCart={handleAddToCart}
                        ></Guns>)
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                        handleRandomGun={handleRandomGun}
                        random={random}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;