import React from 'react'
import { Link } from 'react-router-dom'


import { useState } from "react";
import { Menu, X } from "lucide-react"; // need to install via terminal npm install lucide-react


export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="bg-blue-600 p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to={'/'}><h1 className="text-white text-2xl font-bold">React Store</h1></Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 text-white font-medium">
                        <Link to={'/'}><li><a href="#" className="hover:text-gray-200">Home</a></li></Link>
                        <Link to={'/Shop'}><li><a href="#" className="hover:text-gray-200">Shop</a></li></Link>
                        <Link to={'/Cart'}><li><a href="#" className="hover:text-gray-200">Cart</a></li></Link>
                        <Link to={'/About'}><li><a href="#" className="hover:text-gray-200">About</a></li></Link>
                        <Link to={'/Contact'}><li><a href="#" className="hover:text-gray-200">Contact</a></li></Link>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="md:hidden bg-blue-700 text-white space-y-4 p-4 text-center">
                        <Link to={'/'}><li><a href="#" className="block py-2" onClick={() => setIsOpen(false)}>Home</a></li></Link>
                        <Link to={'/Shop'}><li><a href="#" className="block py-2" onClick={() => setIsOpen(false)}>Shop</a></li></Link>
                        <Link to={'/Cart'}><li><a href="#" className="block py-2" onClick={() => setIsOpen(false)}>Cart</a></li></Link>
                        <Link to={'/About'}><li><a href="#" className="block py-2" onClick={() => setIsOpen(false)}>About</a></li></Link>
                        <Link to={'/Contact'}><li><a href="#" className="block py-2" onClick={() => setIsOpen(false)}>Contact</a></li></Link>
                    </ul>
                )}
            </nav>







        </div>
    )
}
