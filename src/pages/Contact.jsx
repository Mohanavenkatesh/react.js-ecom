import React from 'react'

export const Contact = () => {
  return (
    <div>
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-600">Get in Touch With Us</h1>
        <p className="text-gray-700 mt-2">Have any questions or need assistance? We're here to help!</p>

        <div className="mt-6 space-y-4">
          <p className="text-lg font-medium">📍 <strong>Address:</strong> 123 Street Name, Chennai, India</p>
          <p className="text-lg font-medium">📧 <strong>Email:</strong> support@yourstore.com</p>
          <p className="text-lg font-medium">📞 <strong>Phone:</strong> +91 98765 43210</p>
          <p className="text-lg font-medium">🕒 <strong>Business Hours:</strong> Mon - Fri: 9 AM - 6 PM | Sat - Sun: 10 AM - 4 PM</p>
        </div>

        {/* Contact Form */}
        <form className="mt-6 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded-md" required />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded-md" required />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded-md" rows="4" required></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Send Message</button>
        </form>

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
