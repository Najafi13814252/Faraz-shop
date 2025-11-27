"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import 'swiper/css';

export default function Sliders() {
    return (
        <div className="md:mt-7">
            <Swiper slidesPerView={1}>
                <SwiperSlide>
                    <Image className="w-full aspect-auto md:h-auto h-40 object-cover" src="/images/banner_SlideBanner_1.webp" width="1080" height="720" alt="Slider_Banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-full aspect-auto md:h-auto h-40 object-cover" src="/images/banner_SlideBanner_2.webp" width="1080" height="720" alt="Slider_Banner" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
