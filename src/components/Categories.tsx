"use client"

import categories from "@/data/categories";
import { Icon } from "@iconify/react";

type HeadCategory = {
    id: number
    icon: string
    name: string
}

const headCategories: HeadCategory[] = [
    { id: 1, icon: 'solar:hamburger-menu-outline', name: 'دسته‌بندی‌ها' },
    { id: 2, icon: 'solar:chat-round-line-outline', name: 'پرسش‌های متداول' },
    { id: 3, icon: 'solar:buildings-2-outline', name: 'درباره ما' },
    { id: 4, icon: 'solar:sale-outline', name: 'جشنواره تخفیف' },
    { id: 5, icon: 'solar:fire-minimalistic-outline', name: 'پرفروش‌ترین‌ها' }
]


export default function Categories() {
    return (
        <div className="mx-5 mt-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-12">
                    {headCategories.map(category => (
                        <button key={category.id} className="flex items-center gap-2 cursor-pointer">
                            <Icon className="text-xl text-sky-600" icon={category.icon} />
                            <span className="text-gray-600">{category.name}</span>
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-2 bg-sky-100 px-4 py-2 rounded-xl text-sky-600 cursor-pointer">
                    <span className="font-medium">021-12345</span>
                    <Icon className="text-2xl" icon="solar:phone-calling-rounded-outline" />
                </div>
            </div>
        </div>
    )
}
