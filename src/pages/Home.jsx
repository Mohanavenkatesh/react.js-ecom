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


        {/* Featured Products */}
        <section className="container mx-auto p-6 text-center">
          {/* <h2 className="text-3xl font-bold">Featured Products</h2> */}
          <div className="">
            {HomePage.map((item) => (
              <div className='md:flex  justify-center '>
                <div className='p-5  md:p-10'>
                  <img src={item.kidsImg} alt="" className='' />
                  <div className='flex justify-center mt-5'>
                    <Link className='button-86' to='/Shop'><a href="">Shop Now</a></Link>
                  </div>
                </div>
                <div className='p-5  md:p-10'>
                  <img src={item.menImg} alt="" className='' />

                  <div className='flex justify-center mt-5'>
                    <Link className='button-86' to='/Shop'><a href="">Shop Now</a></Link>
                  </div>

                </div>
                <div className='p-5  md:p-10'>
                  <img src={item.womenImg} alt="" className='' />

                  <div className='flex justify-center mt-5'>
                    <Link className='button-86' to='/Shop'><a href="">Shop Now</a></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};