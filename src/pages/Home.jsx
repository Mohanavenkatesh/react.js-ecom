import React from 'react';
import HomePage from '../js/HomePage';
import { Link } from 'react-router-dom';
import '../css/MordenBtn.css';
import { useState } from "react";
import { X } from "lucide-react";
import kidBanner from "../imgs/kidsBanner.avif";
import menBanner from "../imgs/menBanner.avif";
import womenBanner from "../imgs/womenBanner.avif";
import '../css/Home.css'

export const Home = ({ array, setarray, theme, toggleTheme }) => {
  const addToCart = (item) => {
    setarray([...array, item]);
  };


  return (
    <div className="bg-gray-100 min-h-screen p-5">

      <div className='md:px-20'>
        <Link to={'/Shop'}><img className='mb-5 ' src={kidBanner} alt="" /></Link>
        <div className='w-36 md:w-52 my-5'>
          <h1 className='md:text-4xl mb-2'>Kids Wear</h1>
          <p className='mb-2'>Jump into spring</p>
          <Link to={'/Shop'}><button className='button-86'>Shop Now</button></Link>
        </div>
      </div>

      <div className='md:px-20'>
        <Link to={'/Shop'}><img className='mb-5 ' src={menBanner} alt="" /></Link>
        <div className='w-36 md:w-52 my-5'>
          <h1 className='md:text-4xl mb-2'>Kids Wear</h1>
          <p className='mb-2'>Jump into spring</p>
          <Link to={'/Shop'}><button className='button-86'>Shop Now</button></Link>
        </div>
      </div>

      <div className='md:px-20'>
        <Link to={'/Shop'}><img className='mb-5 ' src={womenBanner} alt="" /></Link>
        <div className='w-36 md:w-52 my-5'>
          <h1 className='md:text-4xl mb-2'>Kids Wear</h1>
          <p className='mb-2'>Jump into spring</p>
          <Link to={'/Shop'}><button className='button-86'>Shop Now</button></Link>
        </div>
      </div>



    </div>
  );
};
