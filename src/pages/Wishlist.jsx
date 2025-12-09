import React from 'react'
import ProductCard from '../components/common/ProductCard'
import img1 from '../assets/home/category/earrings-2.avif'
import img2 from '../assets/home/category/necklaces-2.avif'

const wishlistItems = [
  {
    image: img1,
    title: "Staggered Baguette Birthstone Huggies",
    price: "Rs. 2,200.00",
    originalPrice: "Rs. 2,900.00",
    badges: ["Selling Fast"],
    colors: ["#7fa0d2", "#bfa5d9"]
  },
  {
    image: img2,
    title: "Dainty Bubble Letter Necklace",
    price: "Rs. 2,700.00",
    originalPrice: "Rs. 3,200.00",
    badges: [],
    colors: ["#e6c288"]
  }
]

const Wishlist = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-8 mt-16 text-center md:text-left">My Wishlist</h1>
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          {wishlistItems.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-gray-600">Your wishlist is empty.</p>
        </div>
      )}
    </div>
  )
}

export default Wishlist