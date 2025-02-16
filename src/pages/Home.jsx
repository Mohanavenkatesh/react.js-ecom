import React from 'react'
import  Hero_images from "../Js/Hero_Imges";
import { Link } from 'react-router-dom'


export const Home = () => {
    return (
        <div>
            <div >
                {
                    Hero_images.map((hero_img) =>

                        <div className='flex gap-5 flex-wrap flex-col justify-center items-center '>

                            <div className='flex gap-5 p-5'>

                                <h1>Free shipping above Rs.1999</h1>
                                <h1>Free & flexible 15 days return</h1>
                                <h1>Estimated delivery time: 2-7 days</h1>

                            </div>

                            <div>
                                <div className='p-5'>
                                    <Link to={"/Men"}><img src={hero_img.img1} alt="" width={1300} /></Link>
                                    <Link to={"/Men"}><button className='bg-black text-white p-1 my-3 w-full'>Shop Now</button></Link>
                                </div>



                                <div className='p-5'>
                                    <Link to={"/Women"}> <img src={hero_img.img3} alt="" width={1300} /></Link>
                                    <Link to={"/Women"}> <button className='bg-black text-white p-1 my-3 w-full'>Shop Now</button> </Link>
                                </div>

                                <div className='p-5'>

                                    <Link to={"/Kids"}> <img src={hero_img.img2} alt="" width={1300} /></Link>
                                    <Link to={"/Kids"}> <button className='bg-black text-white p-1 my-3 w-full'>Shop Now</button></Link>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    )
}
