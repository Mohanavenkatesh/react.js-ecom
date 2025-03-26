import React from 'react';
import HomePage from '../js/HomePage';
import { Link } from 'react-router-dom';
import '../css/MordenBtn.css';

export const Home = ({ array, setarray, theme, toggleTheme }) => {
  const addToCart = (item) => {
    setarray([...array, item]);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Featured Products */}
      <section className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>

        {/* Grid for Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {HomePage.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={item.kidsImg}
                alt="Kids"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <Link className="button-86" to="/Shop">
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
