import React from 'react'

export const Cart = ({ array, setarray, theme }) => {


    return (
        <div className={theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}>

            <div className="max-w-md mx-auto  p-6 rounded-lg shadow-md">

                <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

                {array.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                    <ul>
                        {array.map((item) => (
                            <li
                                key={item.id}
                                className="flex justify-between items-center py-2 border-b"
                            >

                                <div className="border p-4 rounded-lg shadow-md">
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
                <button className={`mt-4 w-full inline-block font-semibold py-2 px-6 rounded-md ${theme === 'light' ? 'bg-black text-white hover:bg-gray-900' : 'bg-white text-black hover:bg-gray-100'}`}>
                    Proceed to Checkout
                </button>
            </div>


        </div>
    )
}
