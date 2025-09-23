import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";



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
        { to: '/Search', lable: 'Search' },
        { to: '/Account', lable: 'Account' },
        { to: '/Wishlist', lable: 'Wishlist' },
        { to: '/Bag', lable: 'Bag' }

    ]

    return (
        <div>
            <div className='flex justify-between md:px-5 md:py-2'>

                <div className='hidden md:flex gap-5'>

                    {navLinks.slice(0, 6).map((desktopLinks) => (
                        <Link key={desktopLinks.to} to={desktopLinks.to}>{desktopLinks.lable}</Link>
                    ))}

                </div>

                <div className='hidden md:flex gap-6'>
                    {navLinks.slice(6).map((desktopLinks2) => (
                        <Link key={desktopLinks2.to} to={desktopLinks2.to}>{desktopLinks2.lable}</Link>

                    ))}
                </div>

            </div>

            <div className='flex justify-between items-center p-4'>
                <h1 >Logo</h1>
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

    )
}

export default Navbar;