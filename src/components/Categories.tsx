"use client"

import categories from "@/data/categories";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Categories() {

    const [showFilters, setShowFilters] = useState(1)

    const selectedCategory = categories.find(c => c.id === showFilters)

    return (
        <div className="bg-white border border-gray-200 rounded-2xl shadow mt-2 flex w-fit absolute top-full right0 z-30">
            {/* categories */}
            <div className="flex flex-col gap-2 pl-4 p-2 border-l border-gray-200">
                {categories.map(caterory => (
                    <div key={caterory.id} className={`flex items-center gap-2 cursor-pointer p-2 rounded-xl duration-200 hover:bg-gray-100 ${showFilters === caterory.id ? `${caterory.iconColor} ${caterory.filterBg} pointer-events-none` : 'text-gray-800'}`} onClick={() => setShowFilters(caterory.id)}>
                        <div className="bg-gray-50 shadow-inner rounded-full p-2">
                            <Icon className={`text-2xl ${caterory.iconColor}`} icon={caterory.icon} />
                        </div>
                        <span>{caterory.name}</span>
                    </div>
                ))}
            </div>

            {/* filters */}
            <div className={`flex gap-20 px-2 pt-6 w-[43rem] rounded-l-2xl ${selectedCategory?.filterBg}`}>
                {selectedCategory?.categoryFilters?.map(filter => (
                    <div key={filter.id} className="flex flex-col">
                        <span className={`border-r-4 pr-2 rounded ${selectedCategory.filterBorder}`}>{filter.label}</span>

                        <div className="flex flex-col gap-4 mt-2 relative right-3">
                            {filter.subFilter.map(sub => (
                                <span key={sub.id} className={`text-sm cursor-pointer duration-200 hover:${selectedCategory.iconColor} ${selectedCategory.hoverColor}`}>{sub.label}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
