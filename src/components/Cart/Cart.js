
import './Cart.css'
const Cart = ({ cart }) => {
    // console.log(cart)
    const handleRandomGun = () => {
        for (const newGun of cart) {
            console.log(newGun.name)
        }
    }
    return (
        <div className='cart'>
            <h3>Sellected Guns :</h3>
            {
                cart.map(gun => <h4>{gun.name}</h4>)
            }
            <button onClick={handleRandomGun} className='btn-random'>Choose 1 For Me</button>
            <br /><br />
            <button className='btn-random'>Choose again</button>
        </div>
    );
};

export default Cart;