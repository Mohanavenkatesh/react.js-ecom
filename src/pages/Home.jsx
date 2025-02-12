import React from 'react'
import images from '../Imges'
import { Link } from 'react-router-dom'
import  Women  from "../imgs/Women/Women.avif";
import  Men  from "../imgs/Women/Men.avif";
import  Kids  from "../imgs/Women/Kids.avif";



import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Home = () => {
    return (
        <div>

            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 3000 }}
                loop={true}
                pagination={{ clickable: true }}
                className="h-full"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="relative  ">
                        <img
                            src={Women}
                            alt="T-shirt"
                            className="w-full h-full object-cover" height={300}
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <h2 className="text-white text-3xl md:text-5xl font-bold">
                                Premium T-Shirts Collection
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="relative w-full ">
                        <img
                            src={Men}
                            alt="Hoodie"
                            className="w-full h-full object-cover" height={300}
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <h2 className="text-white text-3xl md:text-5xl font-bold">
                                Stylish Hoodies for Every Season
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="relative w-full ">
                        <img
                            src={Kids}
                            alt="Polo Shirt"
                            className="w-full h-full object-cover" height={300}
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <h2 className="text-white text-3xl md:text-5xl font-bold">
                                Comfortable Polo Shirts
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div >

                {

                    images.map((homepageimg) =>

                        <div className='flex gap-5 flex-wrap flex-col justify-center items-center '>




                            <div className='flex gap-5 p-5'>
                                <h1>Free shipping above Rs.1999</h1>
                                <h1>Free & flexible 15 days return</h1>
                                <h1>Estimated delivery time: 2-7 days</h1>
                            </div>

                            <Link to={"/Women"}><img src={homepageimg.img1} alt="" width={900} /></Link>
                            <button>Shop Now</button>
                            <Link to={"/Men"}> <img src={homepageimg.img2} alt="" width={900} /></Link>
                            <button>Shop Now</button>

                            <Link to={"/Kids"}> <img src={homepageimg.img3} alt="" width={900} /></Link>
                            <button>Shop Now</button>



                        </div>

                    )
                }
            </div>






        </div>
    )
}
