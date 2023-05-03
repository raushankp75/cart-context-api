import React from 'react'
import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'

function App() {
  // const [cart, setCart] = useState([]);
  
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/cart' element={ <Cart /> } />
      </Routes>
    </>
  )
}

export default App
