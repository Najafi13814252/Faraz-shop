"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import 'swiper/css';

export default function Sliders() {
    return (
        <div>
            <Swiper slidesPerView={1}>
                <SwiperSlide>
                    <Image className="w-full aspect-auto md:h-auto h-40 object-cover" src="/images/slideBanner-1.webp" width="1080" height="720" alt="Slider_Banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="w-full aspect-auto md:h-auto h-40 object-cover" src="/images/slideBanner-2.webp" width="1080" height="720" alt="Slider_Banner" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
