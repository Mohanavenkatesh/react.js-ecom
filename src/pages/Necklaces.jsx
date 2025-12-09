import React from 'react'
import ProductCard from '../components/common/ProductCard'
import img2 from '../assets/home/category/necklaces-2.avif'

const necklaces = [
  {
    image: img2,
    title: "Endless Love Locket Necklaces",
    price: "Rs. 2,900.00",
    originalPrice: "Rs. 3,500.00",
    badges: ["Best Seller"],
    colors: ["#e6c288", "#d1d5db"]
  },
  {
    image: img2,
    title: "Dainty Bubble Letter Necklace",
    price: "Rs. 2,700.00",
    originalPrice: "Rs. 3,200.00",
    badges: ["Selling Fast"],
    colors: ["#e6c288", "#d1d5db"]
  },
  {
    image: img2,
    title: "Bubble Letter Necklace",
    price: "Rs. 2,800.00",
    originalPrice: "Rs. 3,500.00",
    badges: ["New"],
    colors: ["#e6c288", "#d1d5db"]
  }
]

const Necklaces = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-8 mt-16 text-center md:text-left">Necklaces</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
        {necklaces.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  )
}

export default Necklaces