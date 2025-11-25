"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import RangeSlider from "./RangeSlider";
import categories from "@/data/categories";

export default function SideFilter({ category }: { category: string }) {
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
        price: false,
    });

    const toggle = (key: string) => {
        setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const productFilters = categories.filter((p) => p.category === category)[0]

    return (
        <div className="w-1/5 flex flex-col gap-8 h-full border border-gray-300 rounded-2xl p-4">
            <div className="flex items-center gap-2">
                <Icon className="text-xl" icon="solar:filter-outline"/>
                <span className="font-medium text-xl">فیلترها</span>
            </div>

            {/* PRICE DROPDOWN */}
            <div className="flex flex-col">
                <button onClick={() => toggle("price")} className="flex items-center justify-between border-b border-b-gray-200 pb-4 cursor-pointer">
                    <span>محدوده قیمت</span>
                    <Icon className={`text-xl text-gray-500 transition-transform duration-500 ${openItems.price ? "rotate-180" : ""}`} icon="solar:alt-arrow-down-outline" />
                </button>

                {/* Smoother dropdown */}
                <div className={`overflow-hidden transition-all duration-500 ${openItems.price ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="flex flex-col gap-4 pt-4">
                        <RangeSlider initialMin={0} initialMax={400000000} min={0} max={400000000} step={100} />

                        <button className="bg-sky-500 text-white rounded-xl py-2 cursor-pointer hover:bg-sky-600 duration-200">
                            فیلتر
                        </button>
                    </div>
                </div>
            </div>

            {/* OTHER FILTERS */}
            {productFilters?.categoryFilters.map((filter, idx) => (
                <div key={filter.id} className="flex flex-col">
                    <button
                        onClick={() => toggle(filter.id.toString())}
                        className={`
                            flex items-center justify-between pb-4 cursor-pointer
                            ${idx === productFilters.categoryFilters.length - 1 
                                ? openItems[filter.id] 
                                    ? "border-b border-b-gray-200"
                                    : "border-b-0"                 
                                : "border-b border-b-gray-200"}
                        `}>
                        <span>{filter.label}</span>
                        <Icon
                            className={`text-xl text-gray-500 transition-transform duration-500 ${
                                openItems[filter.id] ? "rotate-180" : ""
                            }`}
                            icon="solar:alt-arrow-down-outline"
                        />
                    </button>


                    {/* smoother animation */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ${openItems[filter.id]
                                ? "max-h-[500px] opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="flex flex-col gap-4 pt-4">
                            {filter.subFilter.map((sub) => (
                                <label key={sub.id} className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4" />
                                    {sub.label}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}