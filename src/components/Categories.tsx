"use client"

import categories from "@/data/categories";
import { Icon } from "@iconify/react";
import { useState } from "react";


export default function Categories() {

    const [categoryId, setCategoryId] = useState(1)
    const [showSubCategory, setShowSubCategory] = useState(false)

    return (
        <div className="mr-10 mt-4">
            <div className="flex items-center gap-12">
                {categories.map(category => (
                    <div key={category.id} className="flex items-center gap-3 relative">
                        <button className="flex items-center gap-2 group cursor-pointer" onClick={() => { setCategoryId(category.id), category.id === categoryId ? setShowSubCategory(show => show = !show) : setShowSubCategory(true) }}>
                            <Icon className={`text-2xl ${category.id === categoryId && showSubCategory ? "rotate-0" : "rotate-[30deg] "} group-hover:rotate-0 duration-200 ${category.iconColor}`} icon={category.icon} />
                            <span className="text-gray-800">{category.name}</span>
                        </button>
                        <Icon className="text-gray-500 text-sm relative top-0.5" icon="solar:alt-arrow-down-outline" />

                        {showSubCategory && (
                            <ul className="absolute top-full right-0 z-50 mt-2 border border-gray-300 shadow-lg bg-white rounded-xl">
                                {category.id === categoryId && category.subCategory.map(sub => (
                                    <button key={sub.id} className="pr-4 pl-8 py-3 w-full flex items-center gap-2 rounded-xl cursor-pointer hover:bg-sky-100 hover:text-sky-500 duration-200">
                                        <Icon className="text-lg" icon={sub.icon} />
                                        <span className="whitespace-nowrap">{sub.name}</span>
                                    </button>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
