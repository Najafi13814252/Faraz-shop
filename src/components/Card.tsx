"use client"

import Image from "next/image"
import Countdown from "react-countdown"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Card({ products }: { products: Products[] }) {
    return (
        <Swiper className="my-10" slidesPerView={6}>
            {products.map(product => (
                <SwiperSlide className="py-2" key={product.id}>
                    <div className="flex flex-col items-center gap-4 px-3 border-l border-l-gray-300">
                        {product.off !== 0 ? (
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
                        ) : (<div className="h-8"></div>)}
                        <Image src={product.img} width="186" height="186" alt="Product" />

                        <span className="line-clamp-2 text-sm">{product.name}</span>

                        {product.off !== 0 ? (
                            <div className="flex justify-between items-center w-full">
                            <span className="bg-red-500 text-white px-2 rounded-2xl">{product.off.toLocaleString("fa-IR")}%</span>

                            <div className="flex flex-col items-end gap-1">
                                <span className="">{product.price.toLocaleString("fa-IR")} تومان</span>
                                <span className="line-through text-gray-500 text-xs">{(product.price - (product.price * product.off / 100)).toLocaleString("fa-IR")} تومان</span>
                            </div>
                        </div>
                        ) : (<span className="w-full text-left">{product.price.toLocaleString("fa-IR")} تومان</span>)}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
