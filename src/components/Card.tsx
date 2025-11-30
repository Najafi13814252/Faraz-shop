"use client"

import Image from "next/image"
import Countdown from "react-countdown"

interface Props {
    product: Products
    children?: React.ReactNode
    hCard?: boolean
    onCategory?: boolean
}

export default function Card({ product, children, hCard, onCategory }: Props) {
    return (
        <div className="p-2" key={product.id}>
            <div className={`flex flex-col items-center gap-4 p-3 border border-gray-300 rounded-2xl cursor-pointer hover:bg-gray-100 duration-200 ${hCard ? "sm:h-[26rem] h-full" : "h-[24rem]"}`}>
                {product.off !== 0 ? (
                    <div className="flex justify-between pb-0.5 font-medium border-b-4 border-b-red-500 w-full text-center rounded text-red-500">
                        <span>جشنواره</span>
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
                ) : (<div className="h-7"></div>)}
                <div className={`gap-2 ${onCategory ? 'flex items-start sm:flex sm:flex-col sm:items-center' : 'flex flex-col items-center'}`}>
                    <Image src={product.img} className={`${onCategory ? 'w-32 h-32 sm:w-44 sm:h-44' : 'w-44 h-44'}`} width="176" height="176" alt="Product" />

                    <div className="flex flex-col gap-5">
                        <span className="line-clamp-2 text-sm">{product.name}</span>

                        {children}

                        {product.off !== 0 ? (
                            <div className="flex justify-between items-center w-full">
                                <span className="bg-red-500 text-white px-2 rounded-lg">{product.off.toLocaleString("fa-IR")}%</span>

                                <div className="flex flex-col items-end gap-1">
                                    <span>{product.price.toLocaleString("fa-IR")} تومان</span>
                                    <span className="line-through text-gray-500 text-xs">{(product.price - (product.price * product.off / 100)).toLocaleString("fa-IR")} تومان</span>
                                </div>
                            </div>
                        ) : (<span className="w-full text-left">{product.price.toLocaleString("fa-IR")} تومان</span>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
