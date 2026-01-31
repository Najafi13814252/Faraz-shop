"use client"

import { useState } from "react";

// import { Icon } from "@iconify/react";

import Categories from "../Categories";
import Icon, { IconName } from "../ui/Icon";

export const headCategories = [
    { id: 1, icon: 'menu', iconColor: 'text-gray-400', name: 'دسته‌بندی‌ کالاها' },
    { id: 2, icon: 'chat', iconColor: 'text-green-500', name: 'پرسش‌های متداول' },
    { id: 3, icon: 'info', iconColor: 'text-blue-500', name: 'درباره ما' },
    { id: 4, icon: 'discount', iconColor: 'text-rose-500', name: 'جشنواره تخفیف' },
    { id: 5, icon: 'fire', iconColor: 'text-orange-500', name: 'پرفروش‌ترین‌ها' },
    { id: 6, icon: 'wallet', iconColor: 'text-pink-500', name: 'خرید اقساطی' }
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
            <nav className="bg-gray-950 p-2.5 rounded-full hidden md:block">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        {headCategories.map(category => (
                            <button key={category.id} className="flex items-center gap-1.5 cursor-pointer" onClick={() => handleCategoryClick(category.id)}>
                                <Icon name={category.icon as IconName} size={20} className={`${category.iconColor}`}/>
                                <span className="text-white">{category.name}</span>
                                {category.id === 1 && (
                                    <Icon name="arrow_down" size={18} className="text-gray-500 relative top-0.5" />
                                )}
                            </button>
                        ))}
                    </div>
                    <div className="hidden xl:flex items-center gap-2 bg-blue-700/30 px-4 py-2 rounded-full text-white cursor-pointer">
                        <span className="font-medium text-lg">021-12345</span>
                        <Icon name="call" className="text-white"/>
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
