import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react';


const Navbar = () => {
  return (
    <div className='flex justify-between mx-auto gap-5 p-5 ' >
      <div className='flex justify-start font- items-center'>
        <div>
          <h1>LOGO</h1>
        </div>
        <div className='flex gap-5 ms-5'>
          {/* <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Products'>Products</Link>
        <Link to='/Content'>Contact</Link> */}
          <Link to='/'>HOME</Link>
          <Link to='/Content'>SHOP</Link>
          <Link to='/Content'>BEST SELLERS</Link>
          <Link to='/Content'>NEW ARRIVALS</Link>
          <Link to='/Content'>EARRINGS</Link>
          <Link to='/Content'>NECKLACES</Link>
          <Link to='/Content'>RINGS</Link>
        </div>
      </div>

      <div className='flex justify-end items-center gap-5'>
        <Link to='/Content'>ACCOUNT</Link>
        <Link to='/Content'>WHISHLIST</Link>
        <Link to='/Content'>BAG</Link>
      </div>
    </div>
  )
}

export default Navbar