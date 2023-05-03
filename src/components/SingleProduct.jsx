import React, { useContext } from 'react'
import { CartContext } from '../Context';

const SingleProduct = ({ prod }) => {

    // using context for state manangement
    const { cart, setCart } = useContext(CartContext);
    // console.log(useContext(CartContext))

    // console.log(cart)

    return (
<div className='border-2 border-slate-400 shadow-2xl rounded-md'>
            <img src={prod.image} alt="" className='h-48 w-full' />
            <div className='flex flex-col gap-y-1 p-5'>
                <h1 className='text-2xl'>{prod.name}</h1>
                <p>Rs {prod.price}</p>
                <p>Fast Delivery : {prod.fastDelivery}</p>
                <p>Stock : {prod.inStock}</p>
                <p>Rating : {prod.ratings} star</p>
            </div>

            <div className='p-5'>
            {cart.includes(prod) ? (
                <button
                    onClick={() => {
                        setCart(cart.filter((del) => del._id !== prod._id));
                    }}
                    className='bg-blue-600 text-white px-8 py-1 rounded-md'
                >Remove from cart</button>
            ) : (
                <button
                    onClick={() => {
                        setCart([...cart, prod]);
                    }}
                    className='bg-blue-600 text-white px-8 py-1 rounded-md'
                >Add to cart</button>
            )}

            </div>

        </div>
    )
}

export default SingleProduct