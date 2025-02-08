import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div>
            <div className='flex justify-center justify-around p-5 bg-black text-white  h-72 '>
                <div>
                    <h1>Shop</h1>
                    <div>
                        <ul>
                            <Link to = {"/Women"}><li>Women</li></Link>
                            <Link to = {"/Men"}><li>Men</li></Link>
                            <Link to = {"/Kids"}><li>Kids</li></Link>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1>Corporate Info</h1>
                </div>
                <div>
                    <h1>Help</h1>
                </div>
                <div>
                    <h1>Help</h1>
                </div>
            </div>
        </div>
    )
}
