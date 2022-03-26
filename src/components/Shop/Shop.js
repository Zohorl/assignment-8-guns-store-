import React, { useEffect, useState } from 'react';
import Guns from '../Guns/Guns';
import './Shop.css';
const Shop = () => {
    const [guns, setGuns] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
    }, []);
    return (
        <div>
            <h2>Guns store</h2>
            <div className='shop-container'>
                <div className="guns-container">
                    {
                        guns.map(gun => <Guns
                            key={gun.id}
                            gun={gun}
                        ></Guns>)
                    }
                </div>
                <div className="cart-container">
                    <h4>hello world !!!!!!!!!!!</h4>
                </div>
            </div>
        </div>
    );
};

export default Shop;