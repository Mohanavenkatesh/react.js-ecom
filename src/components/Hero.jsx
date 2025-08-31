import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Men from '../assets/banner/men-banner.avif'
import Kids from '../assets/banner/kids-banner.avif'
import Women from '../assets/banner/women-banner.avif'


export default function Hero() {
    return (
        <div className="w-full ">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 rounded-lg">
                        <img className='' src={Men} alt="menimg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 rounded-lg">
                        <img className='' src={Kids} alt="menimg" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 rounded-lg">
                        <img className='' src={Women} alt="menimg" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
