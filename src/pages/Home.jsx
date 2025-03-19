import React from 'react';
import HomePage from '../js/HomePage';
import { Link } from 'react-router-dom';
import '../css/MordenBtn.css'

export const Home = ({ array, setarray, theme, toggleTheme }) => {

  const addToCart = (item) => {
    setarray([...array, item]);
  };

  return (
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}>
      <div>
        {/* Hero Section */}
        <section className="text-center py-80 px-6">
          <div>
            <h1 className="text-4xl font-bold">Welcome to React Store</h1>
            <p className="mt-2 text-lg">
              Find the best T-shirts, hoodies, and polo shirts at unbeatable prices.
            </p>
            <div className="flex justify-center mt-5">
              <a href="/shop" className="button-86 w-24">Shop Now</a>
            </div>
          </div>
        </section>



        {/* Featured Products */}
        <section className="container mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <div className="">
            {HomePage.map((item) => (
              <div className='md:flex  justify-center '>
                <div className='p-5  md:p-16'>
                  <img src={item.kidsImg} alt="" className='rounded-xl' />
                  <div className='flex justify-center mt-5'>
                    <Link className='button-86' to='/Kids'><a href="">Shop Now</a></Link>
                  </div>
                </div>
                <div className='p-5  md:p-16'>
                  <img src={item.menImg} alt="" className='rounded-xl' />

                  <div className='flex justify-center mt-5'>
                    <Link className='button-86' to='/Men'><a href="">Shop Now</a></Link>
                  </div>

                </div>
                <div className='p-5  md:p-16'>
                  <img src={item.womenImg} alt="" className='rounded-xl' />

                  <div className='flex justify-center mt-5'>
                    <Link className='button-86' to='/Women'><a href="">Shop Now</a></Link>
                  </div>
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