import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = ({ theme }) => {
  return (
    <footer className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} py-40`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h4 className="text-3xl font-bold">React Store</h4>
            <p className="mt-2 text-sm">
              Your one-stop shop for quality apparel.
            </p>
          </div>
          <div className="flex flex-wrap gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-2">Navigation</h5>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/shop" className="hover:underline">Shop</Link></li>
                <li><Link to="/cart" className="hover:underline">Cart</Link></li>
                <li><Link to="/about" className="hover:underline">About</Link></li>
                <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-2">Legal</h5>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-600"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-400"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-pink-600"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t pt-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} React Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};