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
    <div>

      {/* Kids */}
      <div
        className={`container mx-auto `}
      >
        <h1 className="text-3xl font-bold text-center ">Kids Section</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {KidsPage.map((kidsitem) => (
            <div
              key={kidsitem.id}
              className="bg-gray-100  shadow-lg  overflow-hidden transition-transform transform "
            >
              <img
                src={kidsitem.kidsImg}
                alt="Kids Item"
                className="w-full  object-cover"
              />
              <div className="">
                 <h1 className="font-bold">{kidsitem.Name}</h1>
              <p className="text-gray-500">  MRP inclusive of all taxes</p>
              <h1  className="font-bold">{kidsitem.Price}</h1>
              </div>
             

              <div className=" flex justify-center">
                <button
                  onClick={() => addToCart(kidsitem)}
                  className="button-86 w-full max-w-[150px]"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* MenPage */}
      {/* {MenPage.map((item) => (
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
      ))} */}

      {/* WomensPage */}
      {/* {WomenPage.map((item) => (
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
      ))} */}
    </div>
  );
};
