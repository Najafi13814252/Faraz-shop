"use client"

import Card from "./Card";
import SectionProducts from "./SectionProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import { Icon } from "@iconify/react";

interface Props {
    products: Products[]
    discountBox?: boolean
    title: string
}

export default function SwiperSlider({products, discountBox, title}: Props) {
  return (
    <div className="relative">
            <SectionProducts discountBox={discountBox} title={title}>
                <Swiper
                    className="my-6"
                    slidesPerView={5}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.my-swiper-button-next',
                        prevEl: '.my-swiper-button-prev',
                    }}
                    watchSlidesProgress={true}
                    breakpoints={{
                        360: { slidesPerView: 1.2 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {products.map(product => (
                        <SwiperSlide key={product.id}>
                            <Card product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* دکمه‌های شخصی‌سازی شده */}
                <button className="hidden my-swiper-button-prev absolute right-1.5 top-1/2 -translate-y-1/2 z-10 p-2.5 border border-gray-200 bg-gray-50/90 hover:bg-white rounded-full shadow-lg md:flex items-center justify-center transition-all duration-300 hover:shadow-xl cursor-pointer">
                    <Icon className="text-2xl" icon="solar:alt-arrow-right-outline" />
                </button>

                <button className="hidden my-swiper-button-next absolute left-1.5 top-1/2 -translate-y-1/2 z-10 p-2.5 border border-gray-200 bg-gray-50/90 hover:bg-white rounded-full shadow-lg md:flex items-center justify-center transition-all duration-300 hover:shadow-xl cursor-pointer">
                    <Icon className="text-2xl" icon="solar:alt-arrow-left-outline" />
                </button>
            </SectionProducts>
        </div>
  )
}
