import React from 'react'
import images from '../Imges'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>

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
