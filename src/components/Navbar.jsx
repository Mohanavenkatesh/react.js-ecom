import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import logoImg from '../assets/logo/logo-2.svg'

const Navbar = () => {

    const [menuopen, setMenuopen] = useState(false);

    const togglemenu = () => setMenuopen(!menuopen)

    const navLinks = [

        { to: '/', lable: 'Home' },
        { to: '/Shop', lable: 'Shop' },
        { to: '/BestSellers', lable: 'BestSellers' },
        { to: '/NewArrivals', lable: 'NewArrivals' },
        { to: '/Necklaces', lable: 'Necklaces' },
        { to: '/Rings', lable: 'Rings' },
        { to: '/Wishlist', lable: 'Wishlist' },
        { to: '/Bag', lable: 'Bag' }

    ]

    return (
        <div>
            {/* Desktop View */}
            <div className='hidden mx-auto z-10 md:flex justify-between items-center py-4 px-5 text-white rounded-2xl fixed top-2 left-10 right-10 border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg shadow-lg/black'>


                        <h1>Caitlyn Minimalist</h1>
                        <div className=' md:flex gap-5'>

                            {navLinks.slice(0, 6).map((desktopLinks) => (
                                <Link className='text-sm' key={desktopLinks.to} to={desktopLinks.to}>{desktopLinks.lable}</Link>
                            ))}
                        </div>

                        <div className='hidden md:flex gap-6'>
                            {navLinks.slice(6).map((desktopLinks2) => (
                                <Link key={desktopLinks2.to} to={desktopLinks2.to}>{desktopLinks2.lable}</Link>

                            ))}
                        </div>
            </div>
            {/* Mobile View */}
            <div className=' md:hidden'>
                <div className='flex justify-between items-center p-3'>
                    <img src={logoImg} alt="logo" className='w-40' />
                    <button onClick={togglemenu}> {menuopen ? <IoCloseSharp /> : <RiMenu3Fill />}</button>
                </div>

                <div>
                    {menuopen && (

                        <div className='flex flex-col justify-center items-center gap-5 p-5'>
                            {navLinks.map((mobilemenu) => (
                                <Link key={mobilemenu.to} to={mobilemenu.to}>{mobilemenu.lable}</Link>
                            ))}
                        </div>

                    )}
                </div>
            </div>


        </div>

    )
}

export default Navbar;