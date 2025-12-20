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
        let lastScroll = 0

        const handleScroll = () => {
            const now = Date.now()
            if (now - lastScroll < 150) return

            const current = window.pageYOffset

            if (current > prevScroll.current) {
                setIsShowNavbar(false)
            } else {
                setIsShowNavbar(true)
            }

            prevScroll.current = current
            lastScroll = now
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="relative">
            <div className={`
                hidden md:block sticky top-[60px] z-40 mx-3 overflow-hidden transition-[max-height] duration-100
                ${isShowNavbar ? "max-h-[200px]" : "max-h-0"}
            `}>
                <nav
                    className={`
            bg-white pb-4
            transform transition-transform duration-200 ease-in-out
            ${isShowNavbar ? "translate-y-0" : "-translate-y-full"}
            `}
                >
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
                </nav>
            </div>
            {isShowCategory && isShowNavbar && (
                <div className="absolute top-[60px] right-0 w-fit z-50">
                    <Categories />
                </div>
            )}
        </div>
    )
}
