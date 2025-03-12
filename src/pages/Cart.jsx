import React from 'react';

export const Cart = ({ array, setarray, theme }) => {

  const removeItem = (id) => {
    setarray(array.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    setarray(
      array.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  return (
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}>
      <div className="max-w-md mx-auto p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
        {array.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul>
            {array.map((item) => (
              <li
                key={item.id}
                className="flex flex-col justify-between items-start py-2 border-b"
              >
                <div className="border p-4 rounded-lg shadow-md w-full">
                  <img src={item.men_item_1} alt={item.name} className="object-cover rounded-md" />
                  <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-blue-600 font-bold mt-1">₹{item.price}</p>

                  {/* Quantity Controls and Remove Button */}
                  <div className="flex items-center space-x-2 mt-4">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className={`px-2 py-1 rounded ${theme === 'light'
                        ? 'bg-gray-200 text-black'
                        : 'bg-gray-700 text-white'
                        }`}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className={`px-2 py-1 rounded ${theme === 'light'
                        ? 'bg-gray-200 text-black'
                        : 'bg-gray-700 text-white'
                        }`}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className={`ml-auto px-2 py-1 rounded ${theme === 'light'
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-red-400 text-black hover:bg-red-500'
                        }`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-between items-center mt-4 font-semibold">
          <span>Total:</span>
          <span>
            ₹
            {array
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </span>
        </div>
        <button className={`mt-4 w-full inline-block font-semibold py-2 px-6 rounded-md ${theme === 'light' ? 'bg-black text-white hover:bg-gray-900' : 'bg-white text-black hover:bg-gray-100'}`}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};