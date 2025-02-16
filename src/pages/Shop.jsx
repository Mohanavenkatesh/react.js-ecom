import React from 'react'
import { Link } from 'react-router-dom'

export const Shop = () => {
  return (
    <div>


      <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600">Shop Our Collection</h1>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          Explore our latest collection of high-quality T-shirts, hoodies, and polo shirts. Find the perfect fit for your style!
        </p>

        {/* Product Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Product Cards */}
          <div className="border p-4 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Product" className="w-full rounded-md" />
            <h3 className="text-lg font-semibold mt-2">Premium T-Shirt</h3>
            <p className="text-gray-600">Soft cotton, available in multiple colors.</p>
            <p className="text-blue-600 font-bold mt-1">₹999</p>
            <button className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Add to Cart</button>
          </div>

          <div className="border p-4 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Product" className="w-full rounded-md" />
            <h3 className="text-lg font-semibold mt-2">Stylish Hoodie</h3>
            <p className="text-gray-600">Warm and cozy, perfect for winter.</p>
            <p className="text-blue-600 font-bold mt-1">₹1,499</p>
            <button className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Add to Cart</button>
          </div>

          <div className="border p-4 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Product" className="w-full rounded-md" />
            <h3 className="text-lg font-semibold mt-2">Classic Polo Shirt</h3>
            <p className="text-gray-600">Perfect for casual or semi-formal wear.</p>
            <p className="text-blue-600 font-bold mt-1">₹1,199</p>
            <button className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Add to Cart</button>
          </div>
        </div>
      </div>


      <Link to={'/Men'}><li>Men</li></Link>
      <Link to={'/Women'}><li>Women</li></Link>
      <Link to={'/Kids'}><li>Kids</li></Link>



    </div>
  )
}
