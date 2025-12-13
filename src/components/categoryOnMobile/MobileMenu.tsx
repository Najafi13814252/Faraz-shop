"use client"

import { useReducer, useState } from "react"

import { Icon } from "@iconify/react"

import categories from "@/data/categories"

import { useBreadcrumbMenu } from "@/Hooks/useBreadcrumbMenu"
import { headCategories } from "../navbar/HeaderMain"
import BreadcrumbMenu from "./BreadcrumbMenu"
import StepCategories from "./StepCategories"
import StepFilters from "./StepFilters"
import StepSubFilters from "./StepSubFilters"


export type Step = "root" | "categories" | "filters" | "subFilters"
type Action = { type: string }

export default function MobileMenu({ onClose }: { onClose: () => void }) {

    const stepReducer = (step: Step, action: Action) => {
        switch (action.type) {
            case "root":
                return "root";
            case "categories":
                return "categories";
            case "filters":
                return "filters";
            case "subFilters":
                return "subFilters";
            default:
                return step;
        }
    }
    const [step, dispatch] = useReducer(stepReducer, "root")

    const [currentCategory, setCurrentCategory] = useState<number | null>(null)
    const [currentFilter, setCurrentFilter] = useState<number | null>(null)
    const [isShowCategory, setIsShowCategory] = useState<boolean>(false)

    const selectedCategory = categories.find(c => c.id === currentCategory)
    const selectedFilter = selectedCategory?.categoryFilters.find(f => f.id === currentFilter)

    const breadcrumb = useBreadcrumbMenu(step, selectedCategory, selectedFilter)

    const backToRoot = () => {
        setIsShowCategory(false)
        dispatch({ type: 'root' })
    }
    const goToCategories = (id: number) => {
        setCurrentCategory(id)
        dispatch({ type: "filters" })
    }
    const goToFilters = (id: number) => {
        setCurrentFilter(id)
        dispatch({ type: "subFilters" })
    }

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
                                    className="flex gap-2 relative"
                                    onClick={() => {
                                        setIsShowCategory(true)
                                        dispatch({ type: "categories" })
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

                    {isShowCategory && (
                        <div className="flex flex-col">
                            <BreadcrumbMenu breadcrumb={breadcrumb} onRoot={backToRoot} dispatch={dispatch} />

                            {/* STEP 2 — لیست category ها */}
                            {step === "categories" && (
                                <StepCategories categories={categories} onStepCategories={goToCategories} />
                            )}

                            {/* STEP 3 — فیلترهای دسته‌بندی */}
                            {step === "filters" && (
                                <StepFilters selectedCategory={selectedCategory} onStepFilters={goToFilters}/>
                            )}

                            {/* STEP 4 — ساب فیلترها */}
                            {step === "subFilters" && (
                                <StepSubFilters selectedFilter={selectedFilter}/>
                            )}
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
