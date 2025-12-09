import React from 'react'
import bannerimgdesktop from '../../assets/home/banner/desktop-banner-by-mohan-2.webp'
import bannerimgmobile from '../../assets/home/banner/mobile-banner-by-mohan-2.webp'

const Hero = () => {
    return (
        <div className="relative w-full flex justify-center">
            {/* Background Images */}
            <div className="w-full">
                <img className='hidden md:block w-full h-auto object-cover' src={bannerimgdesktop} alt="Shine for the Season Banner" />
                <img className='block md:hidden w-full h-auto object-cover' src={bannerimgmobile} alt="Shine for the Season Banner" />
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">

                {/* Arc Text: GIFTS MADE TO GLOW */}
                <div className="mb-2">
                    <svg width="300" height="60" viewBox="0 0 300 60" className="overflow-visible">
                        <path id="curve" d="M 50,60 A 200,200 0 0,1 250,60" fill="transparent" />
                        <text fill="white" fontSize="12" letterSpacing="2" fontWeight="500" textAnchor="middle">
                            <textPath href="#curve" startOffset="50%">
                                GIFTS MADE TO GLOW
                            </textPath>
                        </text>
                    </svg>
                </div>

                {/* Main Heading with Sparkles */}
                <div className="relative mb-6">
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none">
                        Shine for <br /> the Season
                    </h1>
                    {/* Decorative Sparkles */}
                    <svg className="absolute -top-4 -left-8 w-6 h-6 md:w-8 md:h-8 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" />
                    </svg>
                    <svg className="absolute bottom-2 -right-8 w-5 h-5 md:w-6 md:h-6 text-white animate-pulse delay-75" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" />
                    </svg>
                </div>

                {/* Subtext */}
                <p className="text-xs md:text-sm font-light tracking-widest uppercase mb-8">
                    Save 25% on Holiday Glam
                </p>

                {/* Liquid Glass Button */}
                <button className="px-8 py-3 text-sm md:text-base font-medium tracking-wide text-gray-900 bg-white/30 backdrop-blur-2xl border border-white/50 rounded-full shadow-lg hover:bg-white/40 transition-all duration-300 ring-1 ring-white/30">
                    SHOP AND SAVE
                </button>
            </div>
        </div>
    )
}

export default Hero
