import React from "react";
import { Link } from "react-router-dom";
import HomePage from '../js/HomePage';

export const Shop = ({ array, setarray, theme }) => {



  return (
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}>
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

    </div>
  );
};
