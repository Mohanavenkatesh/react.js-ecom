import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // need to install via terminal npm install lucide-react

export const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div>
      <nav className={`p-4 shadow-md ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link to={'/'}><h1 className="text-2xl font-bold">React Store</h1></Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium">
            <Link to={'/'}><li><a href="#" className="hover:text-gray-500">Home</a></li></Link>
            <Link to={'/Shop'}><li><a href="#" className="hover:text-gray-500">Shop</a></li></Link>
            <Link to={'/Cart'}><li><a href="#" className="hover:text-gray-500">Cart</a></li></Link>
            <Link to={'/About'}><li><a href="#" className="hover:text-gray-500">About</a></li></Link>
            <Link to={'/Contact'}><li><a href="#" className="hover:text-gray-500">Contact</a></li></Link>
          </ul>

          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="ml-4">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className={`md:hidden space-y-4 p-4 text-center ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'}`}>
            <Link to={'/'}><li><a href="#" className="block py-2" onClick={() => setIsOpen(false)}>Home</a></li></Link>
            <Link to={'/Shop'}><li><a href="#" className="block py-2" onClick={() => setIsOpen(false)}>Shop</a></li></Link>
            <Link to={'/Cart'}><li><a href="#" className="block py-2" onClick={() => setIsOpen(false)}>Cart</a></li></Link>
            <Link to={'/About'}><li><a href="#" className="block py-2" onClick={() => setIsOpen(false)}>About</a></li></Link>
            <Link to={'/Contact'}><li><a href="#" className="block py-2" onClick={() => setIsOpen(false)}>Contact</a></li></Link>
          </ul>
        )}
      </nav>
    </div>
  );
};