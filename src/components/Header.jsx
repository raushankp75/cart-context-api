import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context';

const Header = () => {

  const { cart } = useContext(CartContext);

  return (
    <div className='sticky'>
        <ul className='nav flex justify-around items-center bg-[#333] h-[80px] mt-0'>
            <li className='prod text-white hover:text-slate-400 font-bold text-2xl'>
                <Link to='/'>Shopping Cart</Link>
            </li>
            <input type="text" placeholder='search...' className='p-2 rounded-md w-[50%]' />
            <li className='prod1 text-white hover:text-slate-400'>
                <Link to='/cart'>Cart ({cart.length})</Link>
            </li>
        </ul> 
    </div>
  )
}

export default Header