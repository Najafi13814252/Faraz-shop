'use client'

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
    category: string
}

export default function SortingFilter({ category }: Props) {

    const searchParams = useSearchParams();
    const currentSort = searchParams.get("sort") || "default";

    const options = [
        { label: "همه‌ محصولات", value: "default" },
        { label: "بیشترین قیمت", value: "highPrice" },
        { label: "کمترین قیمت", value: "lowPrice" },
        { label: "بیشترین تخفیف", value: "discount" }
    ]
    

    return (
        <div className="flex items-center justify-between border border-gray-300 rounded-2xl p-4">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-900 font-medium">
                    <Icon className="text-2xl" icon="solar:sort-from-top-to-bottom-outline" />
                    <span>مرتب سازی:</span>
                </div>
                <ul className="flex items-center gap-8 text-gray-700 text-sm">
                    {options.map(option => (
                        <li key={option.value}>
                            <Link href={`/product-category/${category}?sort=${option.value}`} className={currentSort === option.value ? 'text-sky-500' : ''}>
                                {option.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <span>3,500 کالا</span>
        </div>
    )
}
