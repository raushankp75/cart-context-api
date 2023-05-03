import React, { useContext, useState } from 'react';
import SingleProduct from './SingleProduct';
import productData from '../data/productData.json'


const Home = ({ }) => {

  // get json data 
  const [data] = useState(productData);

  return (
    <div className='grid md:grid-cols-4 grid-cols-1 gap-10 my-10 mx-16'>
      {
        data.map((prod) => {
          return (
              <SingleProduct prod={prod} key={prod._id} />
          )
        })
      }
    </div>
  )
}

export default Home