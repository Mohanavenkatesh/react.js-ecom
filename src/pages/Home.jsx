

import React from 'react'
import items from "../js/items";

export const Home = ({ array, setarray }) => {


    const addToCart = (item) => {

        setarray([...array, item]);

    };


    return (
        <div>
            <div>
                {/* Hero Section */}
                <section className="bg-blue-600 text-white text-center py-40 px-6">
                    <h1 className="text-4xl font-bold">Welcome to React Store</h1>
                    <p className="mt-2 text-lg">Find the best T-shirts, hoodies, and polo shirts at unbeatable prices.</p>
                    <a href="/shop" className="mt-4 inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-md hover:bg-gray-200">Shop Now</a>
                </section>

                {/* Featured Products */}
                <section className="container mx-auto p-6 text-center">
                    <h2 className="text-3xl font-bold text-blue-600">Featured Products</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Sample Product Card */}
                        {items.map((item) => (
                            <div className="border p-4 rounded-lg shadow-md">
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
                </section>

                {/* Why Choose Us */}
                <section className="bg-gray-100 py-12 text-center">
                    <h2 className="text-3xl font-bold text-blue-600">Why Choose Us?</h2>
                    <div className="mt-6 max-w-2xl mx-auto text-lg space-y-4">
                        <p><strong>✔️ High-Quality Products:</strong> Crafted with the best materials.</p>
                        <p><strong>🚚 Fast Shipping:</strong> Quick delivery to your doorstep.</p>
                        <p><strong>💳 Secure Payments:</strong> Multiple payment options available.</p>
                        <p><strong>📞 24/7 Support:</strong> Our team is here to assist you anytime.</p>
                    </div>
                </section>

                {/* Customer Reviews */}
                <section className="container mx-auto p-6 text-center">
                    <h2 className="text-3xl font-bold text-blue-600">What Our Customers Say</h2>
                    <div className="mt-6 max-w-2xl mx-auto text-lg">
                        <p className="italic">"Amazing quality and super fast delivery! Highly recommend!" - A Happy Customer</p>
                    </div>
                </section>
            </div>
        </div>
    )
}
