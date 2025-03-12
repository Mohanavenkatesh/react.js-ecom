import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = ({ theme }) => {
  return (
    <footer className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} py-40`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h4 className="text-2xl font-bold">React Store</h4>
            <p className="mt-2 text-sm">
              © {new Date().getFullYear()} React Store. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/shop" className="hover:underline">Shop</Link>
            <Link to="/cart" className="hover:underline">Cart</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};