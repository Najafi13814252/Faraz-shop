"use client"

import { Icon } from "@iconify/react"
import categories from "@/data/categories"
import { headCategories } from "./Navbar"
import { useState } from "react"

export default function CategoriesOnMobile({ onClose }: { onClose: () => void }) {

    const [step, setStep] = useState<"root" | "categories" | "filters" | "subFilters">("root")
    const [currentCategory, setCurrentCategory] = useState<number | null>(null)
    const [currentFilter, setCurrentFilter] = useState<number | null>(null)

    const selectedCategory = categories.find(c => c.id === currentCategory)
    const selectedFilter = selectedCategory?.categoryFilters.find(f => f.id === currentFilter)

    return (
        <menu className="bg-gray-500/50 backdrop-blur-xs w-full p-1.5 z-50 fixed top-14 bottom-14 flex justify-between">

            <div className="w-5/6 h-full flex">
                <div className="bg-white w-full h-full rounded-md p-5 flex flex-col gap-8 relative">

                    {/* STEP 1 — لیست اصلی بالای navbar */}
                    {step === "root" && (
                        <>
                            {headCategories.map(hc => (
                                <button
                                    key={hc.id}
                                    className="flex gap-2 relative cursor-pointer"
                                    onClick={() => {
                                        if (hc.id === 1) setStep("categories")
                                    }}
                                >
                                    <Icon className={`text-xl ${hc.iconColor}`} icon={hc.icon} />
                                    <span className="text-sm">{hc.name}</span>
                                    {hc.id === 1 && (
                                        <Icon className="absolute left-0" icon="solar:alt-arrow-left-outline" />
                                    )}
                                </button>
                            ))}
                        </>
                    )}

                    {/* STEP 2 — لیست category ها */}
                    {step === "categories" && (
                        <div className="absolute top-1 right-0 p-4 w-full h-96 bg-white flex flex-col">
                            <div className="flex items-center gap-2 pb-2 border-b border-b-gray-300">
                                <button onClick={() => setStep("root")}>
                                    <Icon className="text-xl cursor-pointer" icon="solar:square-alt-arrow-right-outline" />
                                </button>
                                <span className="text-sm">دسته‌بندی</span>
                            </div>

                            <div className="flex flex-col gap-8 pt-4">
                                {categories.map(category => (
                                    <button
                                        key={category.id}
                                        className="flex gap-2 relative cursor-pointer"
                                        onClick={() => {
                                            setCurrentCategory(category.id)
                                            setStep("filters")
                                        }}
                                    >
                                        <Icon className={`text-2xl ${category.iconColor}`} icon={category.icon} />
                                        <span>{category.name}</span>
                                        <Icon className="absolute left-0" icon="solar:alt-arrow-left-outline" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 3 — فیلترهای دسته‌بندی */}
                    {step === "filters" && (
                        <div className="absolute top-1 right-0 p-4 w-full h-96 bg-white flex flex-col">
                            <div className="flex items-center gap-2 pb-2 border-b border-b-gray-300">
                                <button onClick={() => setStep("categories")}>
                                    <Icon className="text-xl cursor-pointer" icon="solar:square-alt-arrow-right-outline" />
                                </button>
                                <div className="text-sm flex items-center gap-1">
                                    <span>دسته‌بندی</span>
                                    <Icon icon="solar:alt-arrow-left-outline" />
                                    <span>{selectedCategory?.name}</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-8 pt-4">
                                {selectedCategory?.categoryFilters.map(filter => (
                                    <button
                                        key={filter.id}
                                        className="flex items-center justify-between cursor-pointer"
                                        onClick={() => {
                                            setCurrentFilter(filter.id)
                                            setStep("subFilters")
                                        }}
                                    >
                                        <span>{filter.label}</span>
                                        <Icon icon="solar:alt-arrow-left-outline" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 4 — ساب فیلترها */}
                    {step === "subFilters" && (
                        <div className="absolute top-1 right-0 p-4 w-full h-96 bg-white flex flex-col">
                            <div className="flex items-center gap-2 pb-2 border-b border-b-gray-300">
                                <button onClick={() => setStep("filters")}>
                                    <Icon className="text-xl cursor-pointer" icon="solar:square-alt-arrow-right-outline" />
                                </button>

                                <div className="text-sm flex items-center gap-1">
                                    <span>دسته‌بندی</span>
                                    <Icon icon="solar:alt-arrow-left-outline" />
                                    <span>{selectedCategory?.name}</span>
                                    <Icon icon="solar:alt-arrow-left-outline" />
                                    <span>{selectedFilter?.label}</span>
                                </div>
                            </div>

                            <div className="flex items-start flex-col gap-8 pt-4">
                                {selectedFilter?.subFilter?.map(sub => (
                                    <button key={sub.id} className="cursor-pointer">
                                        {sub.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>

            {/* close */}
            <button className="w-fit h-fit cursor-pointer" onClick={onClose}>
                <Icon className="text-5xl text-white" icon="solar:close-square-bold" />
            </button>
        </menu>
    )
}
