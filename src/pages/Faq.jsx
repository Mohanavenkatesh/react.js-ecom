import React from 'react'

const Faq = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">What is ShopEase?</h2>
          <p className="text-gray-700">
            ShopEase is your one-stop shop for the latest trends and best deals. We offer a wide variety of products to suit your needs.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">How do I place an order?</h2>
          <p className="text-gray-700">
            Simply browse our products, add your desired items to the cart, and proceed to checkout. Follow the on-screen instructions to complete your purchase.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">What payment methods do you accept?</h2>
          <p className="text-gray-700">
            We accept all major credit cards, PayPal, and ShopEase gift cards.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">How can I track my order?</h2>
          <p className="text-gray-700">
            After your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">What is your return policy?</h2>
          <p className="text-gray-700">
            We offer a 30-day return policy on most items. Please visit our Returns & Exchanges page for more details.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">How do I contact customer support?</h2>
          <p className="text-gray-700">
            You can reach our customer support team via the Contact page or by emailing support@shopease.com.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Faq