import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-gray-700 mb-6 text-center">
        We'd love to hear from you! Reach out to us using the information below or fill out our contact form.
      </p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
        <p>Email: <a href="mailto:support@shopease.com" className="text-blue-600 hover:underline">support@shopease.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a></p>
        <p>Address: 123 Market Street, Suite 100, ShopCity, SC 12345</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Contact Form</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">Name</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">Email</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="message">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2"
              id="message"
              name="message"
              rows="4"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact