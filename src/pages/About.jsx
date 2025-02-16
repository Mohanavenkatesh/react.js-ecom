import React from 'react'

export const About = () => {
  return (
    <div>
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600">About Us</h1>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
          Welcome to <strong>YourStore</strong>, your go-to destination for high-quality T-shirts, hoodies, and polo shirts.
          We are passionate about delivering stylish and comfortable apparel that suits every occasion.
        </p>

        <div className="mt-6 space-y-4 max-w-2xl mx-auto text-lg">
          <p><strong>🌍 Our Mission:</strong> To provide top-quality apparel with the perfect blend of fashion and comfort.</p>
          <p><strong>📦 Quality Products:</strong> We ensure that each piece of clothing is made with premium materials.</p>
          <p><strong>🚀 Fast Shipping:</strong> Enjoy quick and hassle-free delivery straight to your doorstep.</p>
          <p><strong>💬 Customer Support:</strong> Our team is always ready to assist you with any inquiries.</p>
        </div>

        {/* Team Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-blue-600">Meet Our Team</h2>
          <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
            Our dedicated team works tirelessly to bring you the best shopping experience. We believe in quality, commitment, and customer satisfaction.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-6 text-blue-600 text-xl">
          <a href="#" className="hover:text-blue-800">🔹 Facebook</a>
          <a href="#" className="hover:text-blue-800">🔹 Instagram</a>
          <a href="#" className="hover:text-blue-800">🔹 Twitter</a>
        </div>
      </div>
    </div>
  )
}
