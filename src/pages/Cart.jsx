import React from 'react'

export const Cart = () => {

    const cartItems = [
        { id: 1, name: "Product 1", price: 29.99, quantity: 1 },
        { id: 2, name: "Product 2", price: 49.99, quantity: 2 },
    ];


    return (
        <div>

            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li
                                key={item.id}
                                className="flex justify-between items-center py-2 border-b"
                            >
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                </div>
                                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                <button className="text-red-500 hover:text-red-700">
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="flex justify-between items-center mt-4 font-semibold">
                    <span>Total:</span>
                    <span>
                        $
                        {cartItems
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
