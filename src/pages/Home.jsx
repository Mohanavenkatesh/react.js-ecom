import React from 'react';
import HomePage from '../js/HomePage';
import { Link } from 'react-router-dom';

export const Home = ({ array, setarray, theme, toggleTheme }) => {

  const addToCart = (item) => {
    setarray([...array, item]);
  };

  return (
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}>
      <div>
        {/* Hero Section */}
        <section className={`text-center py-80 px-6`}>
          <h1 className="text-4xl font-bold">Welcome to React Store</h1>
          <p className="mt-2 text-lg">Find the best T-shirts, hoodies, and polo shirts at unbeatable prices.</p>
          <a href="/shop" className={`mt-4 inline-block font-semibold py-2 px-6 rounded-md ${theme === 'light' ? 'bg-black text-white hover:bg-gray-900' : 'bg-white text-black hover:bg-gray-100'}`}>Shop Now</a>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {HomePage.map((item) => (
              <div className='flex justify-center'>
                <div>
                  <img src={item.menImg} alt="" />
                  <Link to='/Kids'>Kids</Link>
                </div>
                <div>
                  <img src={item.menImg} alt="" />
                  <Link to='/Men'>Kids</Link>

                </div>
                <div>
                  <img src={item.womenImg} alt="" />
                  <Link to='/Women'>Kids</Link>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={`py-12 text-center ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <div className={`mt-6 max-w-2xl mx-auto text-lg space-y-4 ${theme === 'light' ? 'text-black' : 'text-gray-300'}`}>
            <p><strong>✔️ High-Quality Products:</strong> Crafted with the best materials.</p>
            <p><strong>🚚 Fast Shipping:</strong> Quick delivery to your doorstep.</p>
            <p><strong>💳 Secure Payments:</strong> Multiple payment options available.</p>
            <p><strong>📞 24/7 Support:</strong> Our team is here to assist you anytime.</p>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="container mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          <div className={`mt-6 max-w-2xl mx-auto text-lg ${theme === 'light' ? 'text-black' : 'text-gray-300'}`}>
            <p className="italic">"Amazing quality and super fast delivery! Highly recommend!" - A Happy Customer</p>
          </div>
        </section>
      </div>
    </div>
  );
};