import React from 'react'
import ProductCard from '../components/common/ProductCard'
import img3 from '../assets/home/category/rings-2.avif'

const rings = [
  {
    image: img3,
    title: "Art Deco Diamond Ring",
    price: "Rs. 2,700.00",
    originalPrice: "Rs. 3,600.00",
    badges: ["Back in Stock", "Selling Fast"],
    colors: ["#e6c288", "#d1d5db"]
  },
  {
    image: img3,
    title: "Art Deco Curve Diamond Ring",
    price: "Rs. 2,500.00",
    originalPrice: "Rs. 3,200.00",
    badges: ["Back in Stock"],
    colors: ["#e6c288"]
  },
  {
    image: img3,
    title: "Pave Diamond Curve Ring",
    price: "Rs. 2,700.00",
    originalPrice: "Rs. 3,600.00",
    badges: ["Best Seller"],
    colors: ["#e6c288"]
  },
  {
    image: img3,
    title: "Pear Diamond Curve Ring",
    price: "Rs. 2,500.00",
    originalPrice: "Rs. 3,700.00",
    badges: ["Back in Stock"],
    colors: ["#e6c288"]
  }
]

const Rings = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-8 mt-16 text-center md:text-left">Rings</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
        {rings.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  )
}

export default Rings