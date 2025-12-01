'use client'

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
    category: string
    showSort: boolean
    onClose: () => void
}

export default function SortingFilter({ category, showSort, onClose }: Props) {

    const searchParams = useSearchParams();
    const currentSort = searchParams.get("sort") || "default";

    const options = [
        { label: "همه‌ کالاها", value: "default" },
        { label: "بیشترین قیمت", value: "highPrice" },
        { label: "کمترین قیمت", value: "lowPrice" },
        { label: "بیشترین تخفیف", value: "discount" }
    ]


    return (
        <div className={`${showSort ? 'bg-gray-500/50 backdrop-blur-xs w-full h-screen fixed z-50 top-0' : 'hidden lg:block'}`} onClick={onClose}>
            <div className={`${showSort ? 'relative top-1/3 right-1/4 w-fit px-10 py-4' : 'p-4'} bg-white flex items-center justify-between border border-gray-300 rounded-2xl`}>
                <div className={`${showSort ? 'flex-col' : ''} flex items-center gap-4`}>
                    <div className="flex items-center gap-2 text-gray-900 font-medium">
                        <Icon className="text-2xl" icon="solar:sort-from-top-to-bottom-outline" />
                        <span>مرتب سازی:</span>
                    </div>
                    <ul className={`${showSort ? 'flex-col' : ''} flex items-center gap-8 text-gray-700 text-sm`}>
                        {options.map(option => (
                            <li key={option.value} onClick={onClose}>
                                <Link href={`/product-category/${category}?sort=${option.value}`} className={currentSort === option.value ? 'text-sky-500' : ''}>
                                    {option.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <span>3,500 کالا</span> */}
            </div>
        </div>
    )
}
