import React from 'react';

export const Cart = ({ array, setarray, theme }) => {
  return (
    <div
      className={`min-h-screen ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'
        } p-5`}
    >
      <h1 className="text-3xl font-bold text-center my-8">Your Cart</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {array.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg  overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={item.kidsImg}
              alt="Cart Item"
              className="w-full  object-cover"
            />
            <div className="p-2">
              <h1 className="font-bold">{item.Name}</h1>
              <p className="text-gray-500">  MRP inclusive of all taxes</p>
              <h1 className="font-bold">{item.Price}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
