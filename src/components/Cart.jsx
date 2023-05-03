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
      <span>My Cart</span>
      <p>Total: Rs {total}</p>

      <div className='grid md:grid-cols-4 grid-cols-1 gap-10 my-10 mx-16'>
          { cart.map((prod) => (
            <SingleProduct prod={prod} key={prod._id} />
          ))}
      </div>
    </div>
  )
}

export default Cart