"use client"

import { Icon } from "@iconify/react";
import Image from "next/image";
import Countdown from "react-countdown";
import { Swiper, SwiperSlide } from "swiper/react";

export default function DiscountProducts() {

    type Products = {
        id: number
        img: string
        name: string
        price: number
        off: number
    }

    const products: Products[] = [
        { id: 1, img: '/images/product_1.webp', name: 'گوشی موبایل اپل iPhone 17 Pro Max ZA/A ظرفیت 256 گیگابایت رم 12 گیگابایت - Not Active رجیستر شده', price: 259600000, off: 7 },
        { id: 2, img: '/images/product_2.webp', name: 'لپ تاپ 14.2 اینچی اپل مدل MacBook Pro MX2H3 2024 M4 (پارت نامبر LL/A) پک اصلی نات اکتیو', price: 209000000, off: 10 },
        { id: 3, img: '/images/product_3.webp', name: 'ساعت هوشمند اپل واچ (SE (Gen 3 سایز 40 میلی متر 2025', price: 32700000, off: 10 },
        { id: 4, img: '/images/product_4.webp', name: 'کنسول بازی سونی مدل Playstation 5 استاندارد اسپایدرمن ادیشن حافظه 825 گیگابایت', price: 60000000, off: 7 },
        { id: 5, img: '/images/product_1.webp', name: 'گوشی موبایل اپل iPhone 17 Pro Max ZA/A ظرفیت 256 گیگابایت رم 12 گیگابایت - Not Active رجیستر شده', price: 259600000, off: 7 },
        { id: 6, img: '/images/product_2.webp', name: 'لپ تاپ 14.2 اینچی اپل مدل MacBook Pro MX2H3 2024 M4 (پارت نامبر LL/A) پک اصلی نات اکتیو', price: 209000000, off: 10 },
        { id: 7, img: '/images/product_3.webp', name: 'ساعت هوشمند اپل واچ (SE (Gen 3 سایز 40 میلی متر 2025', price: 32700000, off: 10 },
        { id: 8, img: '/images/product_4.webp', name: 'کنسول بازی سونی مدل Playstation 5 استاندارد اسپایدرمن ادیشن حافظه 825 گیگابایت', price: 60000000, off: 7 }
    ]

    return (
        <>
            <div className="my-8">
                <div className="border-4 w-full h-full border-red-500 rounded-lg p-3">
                    <div className="flex justify-between items-center p-2 bg-red-500 text-white rounded-lg">
                        <div className="flex items-center gap-1">
                            <Icon className="text-5xl" icon="solar:sale-outline" />
                            <span className="font-medium text-3xl">فروش ویژه</span>
                        </div>

                        <button className="flex items-center font-medium text-white cursor-pointer">
                            نمایش همه
                            <Icon className="text-2xl" icon="solar:alt-arrow-left-outline" />
                        </button>
                    </div>

                    <Swiper className="my-10" slidesPerView={6}>
                        {products.map(product => (
                            <SwiperSlide className="py-2" key={product.id}>
                                <div className="flex flex-col items-center gap-4 px-3 border-l border-l-gray-300">
                                    <div className="pb-1 relative -top-3 font-medium border-b-4 border-b-red-500 w-full text-center rounded text-red-500">
                                        <Countdown
                                            date={Date.now() + 1000 * 3600 * 5}
                                            renderer={({ hours, minutes, seconds, completed }) => {
                                                if (completed) {
                                                    return <span>تمام شد!</span>;
                                                } else {
                                                    return (
                                                        <span>
                                                            {hours.toLocaleString("fa-IR")}:
                                                            {minutes.toLocaleString("fa-IR")}:
                                                            {seconds.toLocaleString("fa-IR")}
                                                        </span>
                                                    );
                                                }
                                            }}
                                        />
                                    </div>
                                    <Image src={product.img} width="186" height="186" alt="Product" />

                                    <span className="line-clamp-2 text-sm">{product.name}</span>

                                    <div className="flex justify-between items-center w-full">
                                        <span className="bg-red-500 text-white px-2 rounded-2xl">{product.off.toLocaleString("fa-IR")}%</span>

                                        <div className="flex flex-col items-end gap-1">
                                            <span className="">{product.price.toLocaleString("fa-IR")} تومان</span>
                                            <span className="line-through text-gray-500 text-xs">{(product.price - (product.price * product.off / 100)).toLocaleString("fa-IR")} تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}
