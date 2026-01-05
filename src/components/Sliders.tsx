"use client"

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import { Icon } from "@iconify/react";

const slides = [
    { id: 1, src: '/images/slideBanner-1.webp' },
    { id: 2, src: '/images/slideBanner-2.webp' },
    { id: 3, src: '/images/slideBanner-1.webp' },
    { id: 4, src: '/images/slideBanner-2.webp' }
]

export default function Sliders() {
    return (
        <div className="mt-5 md:mt-10 group relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                pagination={{
                    el: ".custom-pagination",
                    clickable: true
                }}
                navigation={{
                    nextEl: ".button-next-slide",
                    prevEl: ".button-prev-slide"
                }}
            >
                {slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <Image key={slide.id} className="w-full aspect-auto md:h-auto h-40 object-cover rounded-2xl cursor-pointer" src={slide.src} width="1080" height="720" alt="Slider_Banner" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="hidden md:block pointer-events-none absolute top-3/4 right-10 z-20">
                <button className="button-prev-slide pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                    <Icon className="text-4xl text-white/80" icon="solar:round-alt-arrow-right-bold" />
                </button>

                <button
                    className="button-next-slide pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                    <Icon className="text-4xl text-white/80" icon="solar:round-alt-arrow-left-bold" />
                </button>
            </div>

            <div className="custom-pagination bg-white/50 rounded-full w-fit mx-auto px-3 py-2 flex gap-2 justify-center relative bottom-8 z-20" />
        </div>
    )
}