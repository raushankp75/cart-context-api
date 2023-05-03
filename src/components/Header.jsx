import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context';

const Header = () => {

  const { cart } = useContext(CartContext);

  return (
    <div>
        <div className='flex justify-center'>
        <h1 className='text-3xl font-bold'>Context API</h1>
        </div>
        <ul className='nav flex justify-around items-center bg-[#333] h-[80px] mt-0'>
            <li className='prod text-white hover:text-slate-400'>
                <Link to='/'>Home</Link>
            </li>
            <li className='prod1 text-white hover:text-slate-400'>
                <Link to='/cart'>Cart ({cart.length})</Link>
            </li>
        </ul> 
    </div>
  )
}

export default Header