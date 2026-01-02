"use client"

import { useEffect, useRef, useState } from "react";

import { Icon } from "@iconify/react";

import Categories from "../Categories";

type HeadCategory = {
    id: number
    icon: string
    iconColor: string
    name: string
}

export const headCategories: HeadCategory[] = [
    { id: 1, icon: 'solar:hamburger-menu-outline', iconColor: 'text-gray-400', name: 'دسته‌بندی‌ کالاها' },
    { id: 2, icon: 'solar:chat-round-line-line-duotone', iconColor: 'text-green-500', name: 'پرسش‌های متداول' },
    { id: 3, icon: 'solar:info-circle-line-duotone', iconColor: 'text-blue-500', name: 'درباره ما' },
    { id: 4, icon: 'solar:sale-line-duotone', iconColor: 'text-rose-500', name: 'جشنواره تخفیف' },
    { id: 5, icon: 'solar:fire-line-duotone', iconColor: 'text-orange-500', name: 'پرفروش‌ترین‌ها' },
    { id: 6, icon: 'solar:wallet-money-line-duotone', iconColor: 'text-pink-500', name: 'خرید اقساطی' }
]

export default function Navbar() {

    const [isShowCategory, setIsShowCategory] = useState(false)

    const handleCategoryClick = (id: number) => {
        if (id === 1) {
            setIsShowCategory(prev => !prev);
        } else {
            setIsShowCategory(false);
        }
    }

    return (
        <div className="relative">
            <nav className="bg-gray-950 p-2.5 rounded-full" >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        {headCategories.map(category => (
                            <button key={category.id} className="flex items-center gap-1.5 cursor-pointer" onClick={() => handleCategoryClick(category.id)}>
                                <Icon className={`text-xl ${category.iconColor}`} icon={category.icon} />
                                <span className="text-white">{category.name}</span>
                                {category.id === 1 && (
                                    <Icon className="text-lg text-gray-500 relative top-0.5" icon="solar:alt-arrow-down-outline" />
                                )}
                            </button>
                        ))}
                    </div>
                    <div className="hidden xl:flex items-center gap-2 bg-blue-700/30 px-4 py-2 rounded-full text-white cursor-pointer">
                        <span className="font-medium text-lg">021-12345</span>
                        <Icon className="text-2xl" icon="solar:phone-calling-rounded-outline" />
                    </div>
                </div>
            </nav>
            {isShowCategory && (
                <div className="absolute top-[60px] right-0 w-fit z-50">
                    <Categories />
                </div>
            )}
        </div>
    )
}
