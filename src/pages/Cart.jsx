import React from 'react';
import { Link } from 'react-router-dom';

export const Cart = ({ array, setarray, theme }) => {


  return (
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}>
      {array.map((item) => (
        <div className='md:flex  justify-center '>
          <div className='p-5  md:p-4'>
            <img src={item.kidsImg1} alt="" className='' />

          </div>
          <div className='p-5  md:p-4'>
            <img src={item.kidsImg2} alt="" className='' />

            <div className='flex justify-center mt-5'>
              <Link className='button-86' to='/Shop'><a href="">Shop Now</a></Link>
            </div>

          </div>
          <div className='p-5  md:p-4'>
            <img src={item.kidsImg3} alt="" className='' />

            <div className='flex justify-center mt-5'>
              <Link className='button-86' to='/Shop'><a href="">Shop Now</a></Link>
            </div>
          </div>
          <div className='p-5  md:p-4'>
            <img src={item.kidsImg4} alt="" className='' />

            <div className='flex justify-center mt-5'>
              <Link className='button-86' to='/Shop'><a href="">Shop Now</a></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};