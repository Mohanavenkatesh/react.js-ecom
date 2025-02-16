import React from 'react'

export const Cart = ({ array, setarray }) => {


    return (
        <div>

            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
                {array.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                    <ul>
                        {array.map((item) => (
                            <li
                                key={item.id}
                                className="flex justify-between items-center py-2 border-b"
                            > <div className="border p-4 rounded-lg shadow-md">
                                    <img src={item.men_item_1} className=" object-cover rounded-md" />
                                    <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                    <p className="text-blue-600 font-bold mt-1">₹{item.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="flex justify-between items-center mt-4 font-semibold">
                    <span>Total:</span>
                    <span>
                        $
                        {array
                            .reduce((total, item) => total + item.price * item.quantity, 0)
                            .toFixed(2)}
                    </span>
                </div>
                <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
                    Proceed to Checkout
                </button>
            </div>


        </div>
    )
}
