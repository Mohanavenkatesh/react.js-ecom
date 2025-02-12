import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div>


            <footer className="bg-gray-900 text-white py-6">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        {/* Logo & About */}
                        <div>
                            <h2 className="text-xl font-bold">E-Shop</h2>
                            <p className="text-gray-400 mt-2">
                                The best place to buy premium T-shirts, Hoodies, and Polo Shirts.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold">Quick Links</h3>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Shop
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="text-lg font-semibold">Follow Us</h3>
                            <div className="flex justify-center md:justify-start gap-4 mt-2">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500">
                        &copy; {new Date().getFullYear()} E-Shop. All rights reserved.
                    </div>
                </div>
            </footer>



        </div>
    )
}
