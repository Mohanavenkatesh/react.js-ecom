import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import logoFull from '../assets/logo/logo-full.svg'

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
            <div className='hidden mx-auto z-50 md:flex justify-between items-center py-4 px-6 text-gray-900 rounded-3xl fixed top-4 left-10 right-10 border border-white/40 bg-white/30 backdrop-blur-2xl shadow-xl ring-1 ring-white/30'>


                <img src={logoFull} alt="Luxurio" className='h-8' />
                <div className=' md:flex gap-5'>

                    {navLinks.slice(0, 6).map((desktopLinks) => (
                        <Link className='text-sm font-medium hover:text-gray-600 transition-colors' key={desktopLinks.to} to={desktopLinks.to}>{desktopLinks.lable}</Link>
                    ))}
                </div>

                <div className='hidden md:flex gap-6'>
                    {navLinks.slice(6).map((desktopLinks2) => (
                        <Link className='text-sm font-medium hover:text-gray-600 transition-colors' key={desktopLinks2.to} to={desktopLinks2.to}>{desktopLinks2.lable}</Link>

                    ))}
                </div>
            </div>
            {/* Mobile View */}
            <div className='md:hidden fixed z-50 top-4 left-4 right-4 text-gray-900 rounded-3xl border border-white/40 bg-white/30 backdrop-blur-2xl shadow-xl ring-1 ring-white/30'>
                <div className='flex justify-between items-center p-3'>
                    <img src={logoFull} alt="logo" className='h-8' />
                    <button onClick={togglemenu}> {menuopen ? <IoCloseSharp /> : <RiMenu3Fill />}</button>
                </div>

                <div>
                    {menuopen && (

                        <div className='absolute top-full mt-2 left-0 right-0 bg-white/40 backdrop-blur-2xl rounded-3xl shadow-xl border border-white/40 p-5 flex flex-col justify-center items-center gap-5'>
                            {navLinks.map((mobilemenu) => (
                                <Link className='text-sm font-medium hover:text-gray-600 transition-colors' key={mobilemenu.to} to={mobilemenu.to}>{mobilemenu.lable}</Link>
                            ))}
                        </div>

                    )}
                </div>
            </div>


        </div>

    )
}

export default Navbar;