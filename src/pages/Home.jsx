import React from 'react'
// banner
import bannerimgdesktop from '../assets/home/banner/desktop-banner-by-mohan.avif'
import bannerimgmobile from '../assets/home/banner/mobile-banner-by-mohan.avif'
// categories
import categoryimg1 from '../assets/home/category/bracelets.avif'
import categoryimg2 from '../assets/home/category/earrings.avif'
import categoryimg3 from '../assets/home/category/necklaces.avif'
import categoryimg4 from '../assets/home/category/rings.avif'
import categoryimg5 from '../assets/home/category/earrings-2.avif'
import categoryimg6 from '../assets/home/category/rings-2.avif'
import EmblaCarousel from '../components/Carousel'
import Carousel from '../components/Carousel'


const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
                {/* banner image */}
                <img className='hidden md:block' src={bannerimgdesktop} alt="bannerimg" />
                <img className='block md:hidden' src={bannerimgmobile} alt="bannerimg" />
                {/* categories */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                        <img src={categoryimg1} alt="bracelets" />
                        <img src={categoryimg2} alt="earrings" />
                        <img src={categoryimg3} alt="necklaces" />
                        <img src={categoryimg4} alt="rings" />
                    </div>
                </div>

                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-4">
                        <img src={categoryimg5} alt="bracelets" />
                        <img src={categoryimg6} alt="bracelets" />
                    </div>
                </div>
                {/* Best Sellers  */}
                <div>
                    {/* <Carousel/> */}
                </div>
            </div>
        </div>
    )
}

export default Home