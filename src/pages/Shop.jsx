import React from "react";
import { Link } from "react-router-dom";
import items from "../js/items";

export const Shop = ({ array, setarray }) => {
  const addToCart = (item) => {
    setarray([...array, item]);
  };

  return (
    <div>
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600">Shop Our Collection</h1>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          Explore our latest collection of high-quality T-shirts, hoodies, and polo shirts.
          Find the perfect fit for your style!
        </p>

        {/* Product Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div  className="border p-4 rounded-lg shadow-md">
              <img src={item.men_item_1} className=" object-cover rounded-md" />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-blue-600 font-bold mt-1">₹{item.price}</p>
              <button
                onClick={() => addToCart(item)}
                className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Links */}
      <div className="mt-6 flex justify-center space-x-6">
        <Link to={"/Men"} className="text-blue-500 hover:underline">Men</Link>
        <Link to={"/Women"} className="text-blue-500 hover:underline">Women</Link>
        <Link to={"/Kids"} className="text-blue-500 hover:underline">Kids</Link>
      </div>
    </div>
  );
};
