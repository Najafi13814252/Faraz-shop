import { Icon } from "@iconify/react";
import Link from "next/link";

type Props = {
    category: string;
    currentSort: string;
}

export default function SortingFilter({ category, currentSort }: Props) {

    const options = [
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
                        <li key={option.value} className={currentSort === option.value ? 'text-sky-500' : ''}>
                            <Link href={`/product-category/${category}?sort=${option.value}`}>
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
