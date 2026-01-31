"use client"

import { useState } from "react";

import categories from "@/data/categories";
import Icon, { IconName } from "./ui/Icon";

export default function Categories() {

    const [showFilters, setShowFilters] = useState(categories[0]?.id)

    const selectedCategory = categories.find(c => c.id === showFilters)

    return (
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm mt-2 flex">
            {/* categories */}
            <div className="flex flex-col gap-2 pl-4 p-2 border-l border-gray-200">
                {categories.map(caterory => (
                    <div key={caterory.id} className={`flex items-center gap-2 cursor-pointer p-2 rounded-xl duration-200 hover:bg-gray-100 ${showFilters === caterory.id ? 'bg-blue-700 text-white pointer-events-none' : ''}`} onClick={() => setShowFilters(caterory.id)}>
                        <div className="bg-gray-50 shadow-inner rounded-full p-2">
                            {/* <Icon className="text-2xl text-blue-700" icon={caterory.icon} /> */}
                            <Icon name={caterory.icon as IconName} className="text-blue-700" />
                        </div>
                        <span>{caterory.name}</span>
                    </div>
                ))}
            </div>

            {/* filters */}
            <div className="grid grid-cols-3 px-6 pt-6 w-[43rem] rounded-l-2xl bg-gray-100">
                {selectedCategory?.categoryFilters?.map(filter => (
                    <div key={filter.id} className="flex flex-col">
                        <span className="border-r-4 border-blue-700 pr-2 text-lg rounded font-medium">{filter.label}</span>

                        {/* sub filters */}
                        <div className="flex flex-col gap-4 mt-1">
                            {filter.subFilter.map(sub => (
                                <span key={sub.id} className="text-lg cursor-pointer duration-200 text-gray-700">{sub.label}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
