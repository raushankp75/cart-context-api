import React, { useEffect, useState, useContext } from 'react'
import SingleProduct from './SingleProduct'
import { CartContext } from '../Context';

const Cart = () => {

  const [total, setTotal] = useState();

  const { cart } = useContext(CartContext);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <div className='flex flex-row justify-between mx-16 my-10'>
      <h1 className='text-3xl font-semibold'>My Cart</h1>
      <p className='text-2xl'>Total : Rs {total}</p>
      </div>

      <div className='grid md:grid-cols-4 grid-cols-1 gap-10 my-10 mx-16'>
          { cart.map((prod) => (
            <SingleProduct prod={prod} key={prod._id} />
          ))}
      </div>
    </div>
  )
}

export default Cart