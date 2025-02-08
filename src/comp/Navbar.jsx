import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='flex justify-end gap-5 bg-slate-200'>
            <ul className='flex gap-5 p-5'>
                <Link to={'/'} ><li>Home</li></Link>
                <Link to={'/Product'}><li>Product</li></Link>
                <Link to={'/Fav'}><li>Fav</li></Link>
                <Link to={'/Cart'}><li>Cart</li></Link>
            </ul>
        </div>
    )
}
