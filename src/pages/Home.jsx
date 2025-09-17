import React from 'react'
// banner
import bannerimgdesktop from '../assets/home/banner/desktop-banner-by-mohan.avif'
import bannerimgmobile from '../assets/home/banner/mobile-banner-by-mohan.avif'
// categories
import categoryimg5 from '../assets/home/category/earrings-2.avif'
import categoryimg6 from '../assets/home/category/rings-2.avif'
import BestSellers from '../components/home/best-sellers/BestSellers'

import AsSeenIn from '../components/home/as-seen-in/AsSeenIn'
import Category from '../components/home/category/Category'




const Home = () => {
    return (
        <div>
            {/* banner image */}
            <div className='flex justify-center xl:w-full'>
                <img className='hidden md:block' src={bannerimgdesktop} alt="bannerimg" />
                <img className='block md:hidden' src={bannerimgmobile} alt="bannerimg" />
            </div>

            <div className="container mx-auto px-5">

                {/* categories */}
                <div>
                    <h1 className='mt-16 mb-1 text-3xl'> Curated by Category </h1>
                    <p className='mt-0 mb-7 underline hover:underline'>Shop All Jewelry</p>
                    <Category />
                </div>



                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-4">
                        <img src={categoryimg5} alt="categoryimg5" />
                        <img src={categoryimg6} alt="categoryimg6" />
                    </div>
                </div>
                {/* Best Sellers  */}
                <div>
                    <h1 className='mt-16 mb-1 text-3xl'> Best Sellers </h1>
                    <p className='mt-0 mb-7 underline hover:underline'> Shop All Best Sellers</p>                    <BestSellers />
                </div>
                <div>
                    <h1 className='mt-16 mb-1 text-3xl'>As Seen In</h1>
                    <AsSeenIn />
                </div>
            </div>
        </div>
    )
}

export default Home;