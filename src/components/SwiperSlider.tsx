"use client"

import Card from "./Card";
import SectionProducts from "./SectionProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import { Icon } from "@iconify/react";

import 'swiper/css';
import { useState } from "react";


interface Props {
    products: Products[]
    discountBox?: boolean
    title: string
}

export default function SwiperSlider({ products, discountBox, title }: Props) {
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)
    return (
        <div className="relative">
            <SectionProducts discountBox={discountBox} title={title}>
                <Swiper
                    className="my-6"
                    slidesPerView={5}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".button-next-slide",
                        prevEl: ".button-prev-slide"
                    }}
                    onSwiper={(swiper) => {
                        setIsBeginning(swiper.isBeginning)
                        setIsEnd(swiper.isEnd)
                    }}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning)
                        setIsEnd(swiper.isEnd)
                    }}
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
                <button className={`button-prev-slide  navigation-swiper-slider right-1.5 ${isBeginning ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <Icon className="text-2xl" icon="solar:alt-arrow-right-outline" />
                </button>

                <button className={`button-next-slide  navigation-swiper-slider left-1.5 ${isEnd ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <Icon className="text-2xl" icon="solar:alt-arrow-left-outline" />
                </button>
            </SectionProducts>
        </div>
    )
}
