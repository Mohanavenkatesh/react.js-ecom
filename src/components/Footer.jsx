import React from 'react'

export const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-100 py-12">
                <div className="container mx-auto px-4 md:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
                        {/* Shop Section */}
                        <div>
                            <h3 className="font-bold mb-4">Shop</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-gray-500">Ladies</a></li>
                                <li><a href="#" className="hover:text-gray-500">Men</a></li>
                                <li><a href="#" className="hover:text-gray-500">Baby</a></li>
                                <li><a href="#" className="hover:text-gray-500">Kids</a></li>
                                <li><a href="#" className="hover:text-gray-500">Home</a></li>
                                <li><a href="#" className="hover:text-gray-500">Magazine</a></li>
                            </ul>
                        </div>

                        {/* Corporate Info */}
                        <div>
                            <h3 className="font-bold mb-4">Corporate Info</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-gray-500">Career at H&M</a></li>
                                <li><a href="#" className="hover:text-gray-500">About H&M Group</a></li>
                                <li><a href="#" className="hover:text-gray-500">Sustainability H&M Group</a></li>
                                <li><a href="#" className="hover:text-gray-500">Press</a></li>
                                <li><a href="#" className="hover:text-gray-500">Investor relations</a></li>
                                <li><a href="#" className="hover:text-gray-500">Corporate governance</a></li>
                            </ul>
                        </div>

                        {/* Help Section */}
                        <div>
                            <h3 className="font-bold mb-4">Help</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-gray-500">Customer Service</a></li>
                                <li><a href="#" className="hover:text-gray-500">My H&M</a></li>
                                <li><a href="#" className="hover:text-gray-500">Find a store</a></li>
                                <li><a href="#" className="hover:text-gray-500">Legal & privacy</a></li>
                                <li><a href="#" className="hover:text-gray-500">Contact</a></li>
                                <li><a href="#" className="hover:text-gray-500">Secure shopping</a></li>
                                <li><a href="#" className="hover:text-gray-500">Cookie Notice</a></li>
                                <li><a href="#" className="hover:text-gray-500">Cookie Settings</a></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="font-bold mb-4">Sign up now</h3>
                            <p className="text-gray-500 mb-4">
                                Be the first to know about exclusive offers, latest fashion news & style tips!
                            </p>
                            <a href="#" className="text-black font-medium hover:text-gray-500">Read more →</a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mt-8 text-gray-600">
                        <a href="#" className="hover:text-black"><i className="fab fa-instagram text-xl"></i></a>
                        <a href="#" className="hover:text-black"><i className="fab fa-tiktok text-xl"></i></a>
                        <a href="#" className="hover:text-black"><i className="fab fa-spotify text-xl"></i></a>
                        <a href="#" className="hover:text-black"><i className="fab fa-youtube text-xl"></i></a>
                        <a href="#" className="hover:text-black"><i className="fab fa-pinterest text-xl"></i></a>
                        <a href="#" className="hover:text-black"><i className="fab fa-facebook text-xl"></i></a>
                    </div>

                    {/* Copyright Info */}
                    <div className="text-center text-gray-500 text-xs mt-8">
                        <p>
                            The content of this site is copyright-protected and is the property of H&M Hennes & Mauritz AB.
                        </p>
                        <div className="flex justify-center items-center mt-4">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                alt="H&M Logo"
                                className="h-6 mr-2"
                            />
                        </div>
                        <p className="mt-2 font-bold">INDIA | Rs.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
