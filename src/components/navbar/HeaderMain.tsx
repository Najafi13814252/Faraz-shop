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
    { id: 1, icon: 'solar:hamburger-menu-outline', iconColor: 'text-gray-800', name: 'دسته‌بندی‌ کالاها' },
    { id: 2, icon: 'solar:chat-round-line-line-duotone', iconColor: 'text-green-500', name: 'پرسش‌های متداول' },
    { id: 3, icon: 'solar:info-circle-line-duotone', iconColor: 'text-blue-500', name: 'درباره ما' },
    { id: 4, icon: 'solar:sale-line-duotone', iconColor: 'text-rose-500', name: 'جشنواره تخفیف' },
    { id: 5, icon: 'solar:fire-line-duotone', iconColor: 'text-orange-500', name: 'پرفروش‌ترین‌ها' },
    { id: 6, icon: 'solar:wallet-money-line-duotone', iconColor: 'text-pink-500', name: 'خرید اقساطی' }
]

export default function Navbar() {

    const [isShowCategory, setIsShowCategory] = useState(false)
    const [isShowNavbar, setIsShowNavbar] = useState(true)

    const prevScroll = useRef(0)

    const handleCategoryClick = (id: number) => {
        if (id === 1) {
            setIsShowCategory(prev => !prev);
        } else {
            setIsShowCategory(false);
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const current = window.pageYOffset

            if (current > prevScroll.current) {
                // اسکرول به پایین
                setIsShowNavbar(false)
            } else {
                // اسکرول به بالا
                setIsShowNavbar(true)
            }

            prevScroll.current = current
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <>
            {isShowNavbar && (
                <nav className={`hidden lg:block bg-white mx-3 pb-4 z-50 transform transition-transform
                    ${isShowNavbar ? "translate-y-0" : "-translate-y-full"}
                `}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-12">
                            {headCategories.map(category => (
                                <button key={category.id} className="flex items-center gap-2 cursor-pointer" onClick={() => handleCategoryClick(category.id)}>
                                    <Icon className={`text-xl ${category.iconColor}`} icon={category.icon} />
                                    <span className="text-gray-800 text-sm">{category.name}</span>
                                    {category.id === 1 && (
                                        <Icon className="text-lg text-gray-500 relative top-0.5" icon="solar:alt-arrow-down-outline" />
                                    )}
                                </button>
                            ))}
                        </div>
                        <div className="hidden xl:flex items-center gap-2 bg-sky-100/90 px-4 py-2 rounded-lg text-sky-500 cursor-pointer">
                            <span className="font-medium">021-12345</span>
                            <Icon className="text-2xl" icon="solar:phone-calling-rounded-outline" />
                        </div>
                    </div>
                    {isShowCategory && (
                        <div>
                            <Categories />
                        </div>
                    )}
                </nav>
            )}
        </>
    )
}
