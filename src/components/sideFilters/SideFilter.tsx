"use client";

import { useState } from "react";

import { Icon } from "@iconify/react";

import categories from "@/data/categories";
import PriceFilter from "./PriceFilter";
import OtherFilters from "./OtherFilters";

export default function SideFilter({ category, showSide, onClose }: { category: string, showSide: boolean, onClose: () => void }) {
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
        price: false,
    });

    const toggle = (key: string) => {
        setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const productFilters = categories.filter((p) => p.category === category)[0]

    return (
        <div className={`${showSide ? 'fixed top-0 overflow-scroll w-full h-screen z-50 lg:w-1/5 lg:h-full lg:static lg:overflow-visible lg:z-0' : 'hidden lg:flex flex-col gap-8 w-1/5 h-full'} bg-white flex flex-col gap-8 border border-gray-300 rounded-2xl p-4`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Icon className="text-xl" icon="solar:filter-outline" />
                    <span className="font-medium text-xl">فیلترها</span>
                </div>

                {showSide && (
                    <button className="cursor-pointer" onClick={onClose}>
                        <Icon className="text-4xl text-pink-500" icon="solar:close-square-bold" />
                    </button>
                )}
            </div>

            {/* PRICE DROPDOWN */}
            <PriceFilter openItems={openItems} onChangeToggle={toggle}/>

            {/* OTHER FILTERS */}
            <OtherFilters productFilters={productFilters} openItems={openItems} onChangeToggle={toggle}/>
        </div>
    );
}