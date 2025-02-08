import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>



            <ul className='flex justify-between  gap-5 p-5 bg-gray-50 sticky '>

                <li>Logo</li>

                <div className='flex gap-5'>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/Women'}><li>Women</li></Link>
                    <Link to={'/Men'}><li>Men</li></Link>
                    <Link to={'/Kids'}><li>Kids</li></Link>
                    
                </div>

                <Link to={'/Cart'}><li>Shoping Bag<i class="fa-solid fa-bag-shopping text-black text-xl me-1"></i></li></Link>

            </ul>





        </div>
    )
}
