import React from 'react'
import ProductCard from '../components/common/ProductCard'
import img4 from '../assets/home/category/bracelets.avif'

const newArrivals = [
  {
    image: img4,
    title: "Chunky Gold Chain Bracelet",
    price: "Rs. 3,200.00",
    originalPrice: "Rs. 4,000.00",
    badges: ["New Arrival"],
    colors: ["#e6c288"]
  },
  {
    image: img4,
    title: "Pearl & Gold Charm Bracelet",
    price: "Rs. 2,800.00",
    originalPrice: "Rs. 3,500.00",
    badges: ["New Arrival"],
    colors: ["#e6c288", "#d1d5db"]
  },
  {
    image: img4,
    title: "Minimalist Cuff Bracelet",
    price: "Rs. 2,500.00",
    originalPrice: "Rs. 3,100.00",
    badges: ["Selling Fast"],
    colors: ["#e6c288", "#d1d5db", "#bfa5d9"]
  }
]

const NewArrivals = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-8 mt-16 text-center md:text-left">New Arrivals</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
        {newArrivals.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  )
}

export default NewArrivals