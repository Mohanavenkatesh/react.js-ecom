import React from 'react'
import ProductCard from '../components/common/ProductCard'
import img1 from '../assets/home/category/earrings-2.avif'
import img2 from '../assets/home/category/necklaces-2.avif'
import img3 from '../assets/home/category/rings-2.avif'

const products = [
  {
    image: img1,
    title: "Staggered Baguette Birthstone Huggies",
    price: "Rs. 2,200.00",
    originalPrice: "Rs. 2,900.00",
    badges: ["Selling Fast"],
    colors: ["#7fa0d2", "#bfa5d9", "#f4c6e3"]
  },
  {
    image: img2,
    title: "Endless Love Locket Necklaces",
    price: "Rs. 2,900.00",
    originalPrice: "Rs. 3,500.00",
    badges: ["Back in Stock", "Best Seller"],
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
    badges: ["Selling Fast"],
    colors: ["#e6c288", "#d1d5db"]
  },
  {
    image: img1,
    title: "Diamond Bow Studs",
    price: "Rs. 1,900.00",
    originalPrice: "Rs. 2,500.00",
    badges: ["Best Seller"],
    colors: ["#e6c288", "#d1d5db"]
  },
  {
    image: img1,
    title: "Diamond Bow Hoops",
    price: "Rs. 1,800.00",
    originalPrice: "Rs. 2,400.00",
    badges: ["Best Seller"],
    colors: ["#e6c288", "#d1d5db"]
  },
  {
    image: img3,
    title: "Diamond Ribbon Bow Huggies",
    price: "Rs. 2,200.00",
    originalPrice: "Rs. 2,800.00",
    badges: ["Selling Fast"],
    colors: ["#e6c288", "#d1d5db"]
  },
  {
    image: img3,
    title: "Pave Bow Charm Hoops",
    price: "Rs. 2,200.00",
    originalPrice: "Rs. 2,900.00",
    badges: ["Just Dropped!"],
    colors: ["#e6c288", "#d1d5db"]
  }
]

const Shop = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-8 mt-16 text-center md:text-left">Shop All</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  )
}

export default Shop