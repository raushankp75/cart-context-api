import React, { useContext } from 'react'
import { CartContext } from '../Context';

const SingleProduct = ({ prod }) => {

    // using context for state manangement
    const { cart, setCart } = useContext(CartContext);
    // console.log(useContext(CartContext))

    // console.log(cart)

    return (
        <div>
            <img src={prod.image} alt="" />
            <div>
                <h1>{prod.name}</h1>
                <p>Rs {prod.price}</p>
            </div>

            {cart.includes(prod) ? (
                <button
                    onClick={() => {
                        setCart(cart.filter((del) => del._id !== prod._id));
                    }}
                    className='bg-blue-600 text-white p-2'
                >Remove from cart</button>
            ) : (
                <button
                    onClick={() => {
                        setCart([...cart, prod]);
                    }}
                    className='bg-blue-600 text-white p-2'
                >Add to cart</button>
            )}


        </div>
    )
}

export default SingleProduct