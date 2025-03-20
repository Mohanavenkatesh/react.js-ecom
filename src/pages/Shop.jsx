import React from "react";
import { Link } from "react-router-dom";
import KidsPage from '../js/KidsPage'
import MenPage from "../js/MenPage";
import WomenPage from "../js/Women";

export const Shop = ({ array, setarray, theme }) => {

  const addToCart = (item) => {
    setarray([...array, item]);
  };

  return (
    <div className={theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}>

      {/* Kids */}
      {KidsPage.map((item) => (
        <div>
          <div className="container mx-auto px-5">
            <h1 className="text-2xl py-5">Kids Section</h1>
            <div className="">
              {KidsPage.map((item) => (
                <div className='md:flex  justify-center '>
                  <div className='p-5  md:p-4'>
                    <img src={item.kidsImg1} alt="" className='' />
                    <div className='flex justify-center mt-5'>
                      <Link className='button-86' to='/Shop'><a href="" onClick={addToCart}>Add to Cart</a></Link>
                    </div>
                  </div>
                  <div className='p-5  md:p-4'>
                    <img src={item.kidsImg2} alt="" className='' />

                    <div className='flex justify-center mt-5'>
                      <Link className='button-86' to='/Shop'><a href="" onClick={addToCart}>Add to Cart</a></Link>
                    </div>

                  </div>
                  <div className='p-5  md:p-4'>
                    <img src={item.kidsImg3} alt="" className='' />

                    <div className='flex justify-center mt-5'>
                      <Link className='button-86' to='/Shop'><a href="" onClick={addToCart}>Add to Cart</a></Link>
                    </div>
                  </div>
                  <div className='p-5  md:p-4'>
                    <img src={item.kidsImg4} alt="" className='' />

                    <div className='flex justify-center mt-5'>
                      <Link className='button-86' to='/Shop'><a href="" onClick={addToCart}>Add to Cart</a></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>





        </div>
      ))}


      {/* MenPage */}
      {MenPage.map((item) => (
        <div>
          <div className="container mx-auto px-5">
            <h1 className="text-2xl py-5">Mens Section</h1>
            <div className="">
              {MenPage.map((item) => (
                <div className='md:flex  justify-center '>
                  <div className='p-5  md:p-4'>
                    <img src={item.MenImg1} alt="" className='' />
                    <div className='flex justify-center mt-5'>
                      <Link className='button-86' to='/Shop'><a href="" onClick={addToCart}>Add to Cart</a></Link>
                    </div>
                  </div>
                  <div className='p-5  md:p-4'>
                    <img src={item.MenImg2} alt="" className='' />

                    <div className='flex justify-center mt-5'>
                      <Link className='button-86' to='/Shop'><a href="" onClick={addToCart}>Add to Cart</a></Link>
                    </div>

                  </div>
                  <div className='p-5  md:p-4'>
                    <img src={item.MenImg3} alt="" className='' />

                    <div className='flex justify-center mt-5'>
                      <Link className='button-86' to='/Shop'><a href="" onClick={addToCart}>Add to Cart</a></Link>
                    </div>
                  </div>
                  <div className='p-5  md:p-4'>
                    <img src={item.MenImg4} alt="" className='' />

                    <div className='flex justify-center mt-5'>
                      <Link className='button-86' to='/Shop'><a href="" onClick={addToCart}>Add to Cart</a></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>





        </div>
      ))}

      {/* WomensPage */}
      {WomenPage.map((item) => (
        <div>
          <div className="container mx-auto px-5">
            <h1 className="text-2xl py-5">Mens Section</h1>
            <div className="">
              {WomenPage.map((item) => (
                <div className='md:flex  justify-center '>
                  <div className='p-5  md:p-4'>
                    <img src={item.WomenImg1} alt="" className='' />
                    <div className='flex justify-center mt-5'>
                      <Link className='button-86' to='/Shop'><a href="" onClick={addToCart}>Add to Cart</a></Link>
                    </div>
                  </div>
                  <div className='p-5  md:p-4'>
                    <img src={item.WomenImg2} alt="" className='' />

                    <div className='flex justify-center mt-5'>
                      <Link className='button-86' to='/Shop'><a href="" onClick={addToCart}>Add to Cart</a></Link>
                    </div>

                  </div>
                  <div className='p-5  md:p-4'>
                    <img src={item.WomenImg3} alt="" className='' />

                    <div className='flex justify-center mt-5'>
                      <Link className='button-86' to='/Shop'><a href="" onClick={addToCart}>Add to Cart</a></Link>
                    </div>
                  </div>
                  <div className='p-5  md:p-4'>
                    <img src={item.WomenImg4} alt="" className='' />

                    <div className='flex justify-center mt-5'>
                      <Link className='button-86' to='/Shop'><a href="" onClick={addToCart}>Add to Cart</a></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>





        </div>
      ))}
    </div>
  );
};
