import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-around font- items-center mx-auto mt-5 gap-5 p-5 border border-b-stone-700 rounded-xl max-w-[1200px]' >
      <div>
        <h1>Logo</h1>
      </div>
      <div className='flex gap-5'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Products'>Products</Link>
        <Link to='/Content'>Contact</Link>
      </div>
      <div>
        Cart
      </div>
    </div>
  )
}

export default Navbar