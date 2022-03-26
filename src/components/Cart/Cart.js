import './Cart.css'
const Cart = ({ cart, handleRandomGun, random }) => {
    const getRandom = cart[random];
    return (
        <div className='cart'>
            <h3>Sellected Guns :</h3>
            <div className='randon-item'>
                <h5>{getRandom?.name}</h5>
            </div>
            {
                cart.map(gun => <h4>Gun Name : <small>{gun.name}</small></h4>)
            }
            <button onClick={handleRandomGun} className='btn-random'>Choose 1 For Me</button>
            <br /><br />
            <button className='btn-random'>Choose again</button>
        </div>
    );
};

export default Cart;