import React from 'react'

const About = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">About ShopEase</h1>
      <p className="text-gray-700 mb-4 text-center">
        Welcome to ShopEase, your one-stop shop for the latest trends and best deals! 
        We are dedicated to providing a seamless and enjoyable shopping experience for all our customers.
      </p>
      <div className="space-y-4">
        <p>
          <span className="font-semibold">Our Mission:</span> To make online shopping easy, affordable, and accessible for everyone. 
          We carefully curate our product selection to ensure quality and value, and we are always on the lookout for the newest trends.
        </p>
        <p>
          <span className="font-semibold">Why Shop With Us?</span> 
          <ul className="list-disc list-inside ml-4">
            <li>Wide variety of products to suit your needs</li>
            <li>Fast and reliable shipping</li>
            <li>Secure payment options</li>
            <li>Friendly customer support</li>
            <li>Easy returns and exchanges</li>
          </ul>
        </p>
        <p>
          <span className="font-semibold">Our Story:</span> 
          Founded in 2024, ShopEase started as a small team passionate about making shopping more convenient. 
          Today, we serve thousands of happy customers and continue to grow thanks to your support!
        </p>
      </div>
      <p className="mt-6 text-center text-gray-600">
        Thank you for choosing ShopEase. We look forward to serving you!
      </p>
    </div>
  )
}

export default About