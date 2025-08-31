import React from 'react'
import Men from '../assets/men.avif'
import Kid from '../assets/kids.avif'
import Women from '../assets/Women.avif'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <div className='py-10 flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          <div className="flex flex-col items-center">
            <Link to='/Men'><img className='w-80' src={Men} alt="menimg" /></Link>
            <Link to='/Men' className='w-full'>
              <button className="mt-4 py-3 w-full bg-black border text-white hover:bg-white hover:text-black hover:border border-black">
                Shop Men's
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to='/Kids'><img className='w-80' src={Kid} alt="kidimg" /></Link>
            <Link to='/Kids' className='w-full'>
              <button className="mt-4 py-3 w-full bg-black border text-white hover:bg-white hover:text-black hover:border border-black">
                Shop Kid's
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to='/Women'><img className='w-80' src={Women} alt="womenimg" /></Link>
            <Link to='/Women' className='w-full'>
              <button className="mt-4 py-3 w-full bg-black border text-white hover:bg-white hover:text-black hover:border border-black">
                Shop Women's
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products