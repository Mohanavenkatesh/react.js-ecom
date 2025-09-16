import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="p-5 mb-10 rounded-xl">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start flex-wrap">
          <div className="flex-1 min-w-[200px] mb-4 md:mb-0">
            <h1 className="font-bold text-lg mb-2">ShopEase</h1>
            <p className="text-sm text-gray-600">
              Your one-stop shop for the latest trends and best deals.
            </p>
          </div>
          <div className="flex-1 min-w-[150px] mb-4 md:mb-0">
            <h1 className="font-semibold mb-2">Quick Links</h1>
            <ul>
              <li>
                <Link to='/' className="hover:underline block">Home</Link>
              </li>
              <li>
                <Link to='/About' className="hover:underline block">About Us</Link>
              </li>
              <li>
                <Link to='/Products' className="hover:underline block">Products</Link>
              </li>
              <li>
                <Link to='/Content' className="hover:underline block">Contact</Link>
              </li>
              <li>
                <Link to='/Faq' className="hover:underline block">FAQ</Link>
              </li>
              <li>
                <Link to='/cart' className="hover:underline block">Cart</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[150px] mb-4 md:mb-0">
            <h1 className="font-semibold mb-2">Social Media</h1>
            <ul>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline block">Facebook</a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline block">Instagram</a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline block">Twitter</a>
              </li>
              <li>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:underline block">Pinterest</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline block">LinkedIn</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 min-w-[150px]">
            <h1 className="font-semibold mb-2">Help</h1>
            <ul>
              <li>
                <a href="/shipping" className="hover:underline block">Shipping Info</a>
              </li>
              <li>
                <a href="/returns" className="hover:underline block">Returns & Exchanges</a>
              </li>
              <li>
                <a href="/support" className="hover:underline block">Customer Support</a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline block">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:underline block">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer