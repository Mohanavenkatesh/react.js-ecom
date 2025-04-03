import React, { useState } from "react";
import HomePage from "../js/HomePage";
import { Link } from "react-router-dom";
import "../css/MordenBtn.css";
import { X, Truck, Percent, HandCoins, Scissors } from "lucide-react";
import kidBanner from "../imgs/kidsBanner.avif";
import menBanner from "../imgs/menBanner.avif";
import womenBanner from "../imgs/womenBanner.avif";
import "../css/Home.css";
import { ShoppingCart } from "lucide-react";


export const Home = ({ array, setarray, theme, toggleTheme }) => {
  const addToCart = (item) => {
    setarray([...array, item]);
  };

  const features = [
    {
      icon: <Truck className="h-12 w-12 text-green-400" />,
      title: "Worldwide shipping",
      description: "We ship across globe",
    },
    {
      icon: <Percent className="h-12 w-12 text-green-400" />,
      title: "Bulk Orders",
      description: "Get flat 10% discount on bulk orders",
    },
    {
      icon: <HandCoins className="h-12 w-12 text-green-400" />,
      title: "Budget-Friendly Price",
      description: "Quality approved unbeatable prices",
    },
    {
      icon: <Scissors className="h-12 w-12 text-green-400" />,
      title: "Blouse, Fall & Edging Services",
      description: "Get your saree drape-ready",
    },
  ];

  const collections = [
    {
      image: "../imgs/collection1.avif",
      category: "Sarees",
      name: "Linen Sequin Work Sarees",
      price: "₹1,500.00",
    },
    {
      image: "../imgs/collection2.avif",
      category: "Sarees",
      name: "Plaid Checkered Semi Cottons",
      price: "₹1,300.00",
    },
    {
      image: "../imgs/collection3.avif",
      category: "Sarees",
      name: "Mul Cottons",
      price: "₹980.00",
    },
    {
      image: "../imgs/collection4.avif",
      category: "Sarees",
      name: "Tissue Cottons",
      price: "₹999.00",
    },
  ];

  const categoryCollections = [
    {
      image: "../imgs/workwear.avif",
      title: "Work Wear",
      description: "Shop from our comfortable range of cottons and semi-linen workwear drapes.",
    },
    {
      image: "../imgs/festive.avif",
      title: "Festive Collection",
      description: "Shop from our affordable range of festive collection sarees for any occasions, from small functions to big events.",
    },
    {
      image: "../imgs/casual.avif",
      title: "Casual Wears & Blouse Materials",
      description: "Shop from our range of comfortable drapes for casual wears and printed blouse materials as well.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className='md:px-20'>
        <Link to={'/Shop'}><img className='mb-5 ' src={kidBanner} alt="" /></Link>
        <div className='w-36 md:w-52 my-5'>
          <h1 className='md:text-4xl mb-2'>Kids Wear</h1>
          <p className='mb-2'>Jump into spring</p>
          <Link to={'/Shop'}><button className='button-86'>Shop Now</button></Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-900 py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center"
          >
            {feature.icon}
            <h3 className="text-white text-lg font-semibold mt-4">
              {feature.title}
            </h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Collections Section */}
      <div className="bg-gray-900 py-12 px-4 text-center">
        <h2 className="text-white text-2xl mb-6">Our Top New Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
              <img src={item.image} alt={item.name} className="mb-4 w-full h-60 object-cover rounded" />
              <p className="text-gray-400">{item.category}</p>
              <h3 className="text-white text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-yellow-400 mt-2">★★★★★</p>
              <p className="text-white mt-2">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Category Collections Section */}
      <div className="bg-green-900 py-12 px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryCollections.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
              <img src={item.image} alt={item.title} className="mb-4 w-full h-60 object-cover rounded" />
              <h3 className="text-white text-lg font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.description}</p>
              <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg">Shop Now →</button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-900 text-white flex justify-between items-center p-4">
      <p className="text-lg font-semibold">Get 10% off on bulk orders.</p>
      <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
        <ShoppingCart size={16} /> SHOP NOW
      </button>
    </div>

       {/* Collections Section - 2 */}
       <div className="bg-gray-900 py-12 px-4 text-center">
        <h2 className="text-white text-2xl mb-6">Our Top New Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
              <img src={item.image} alt={item.name} className="mb-4 w-full h-60 object-cover rounded" />
              <p className="text-gray-400">{item.category}</p>
              <h3 className="text-white text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-yellow-400 mt-2">★★★★★</p>
              <p className="text-white mt-2">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 py-10 px-6 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 italic">"This product exceeded my expectations. The quality is top-notch and the service was excellent!"</p>
        <h3 className="mt-4 font-semibold text-gray-900">John Doe</h3>
        <p className="text-gray-500 text-sm">Verified Customer</p>
      </div>
    </div>
    </div>
  );
};
