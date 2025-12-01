"use client"

import SideFilter from '@/components/SideFilter'
import SortingFilter from '@/components/SortingFilter'
import { Icon } from '@iconify/react'
import { use, useState } from 'react'
import { useSearchParams } from 'next/navigation'

type Props = {
    children: React.ReactNode
    params: Promise<{ category: string }>
}

export default function CtegoryProductLayout({ children, params }: Props) {

    const [showSide, setShowSide] = useState(false)
    const [showSort, setShowSort] = useState(false)

    const { category } = use(params)

    const searchParams = useSearchParams()
    const currentSort = searchParams.get('sort') || "default"

    const sortLabels: Record<string, string> = {
        default: "همه کالاها",
        highPrice: "بیشترین قیمت",
        lowPrice: "کمترین قیمت",
        discount: "بیشترین تخفیف"
    }
    const categoryLabels: Record<string, string> = {
        mobile: "موبایل",
        laptop: "لپ تاپ",
        watch: "ساعت هوشمند",
        tablet: "تبلت",
        airpod: "هندزفری و ایرپاد",
        game: "کنسول بازی"
    }

    return (
        <div className="sm:mx-10 my-5">
            <div className="flex flex-col gap-10">
                <div className="w-full flex">
                    {/* side filter */}
                    <SideFilter category={category} showSide={showSide} onClose={() => setShowSide(false)} />


                    {/* product table */}
                    <div className="w-full sm:w-4/5 flex flex-col gap-2 mr-0 sm:mr-5 mt-2">
                        {/* breadcrumb */}
                        <div className="mr-2 my-2 flex items-center gap-1">
                            <span className='text-gray-500'>فراز شاپ</span>
                            <Icon className='text-gray-500' icon="solar:alt-arrow-left-outline" />
                            {categoryLabels[category]}
                        </div>

                        {/* product filter  */}
                        <SortingFilter category={category} showSort={showSort} onClose={() => setShowSort(false)} />

                        <div className='grid grid-cols-2 divide-x divide-gray-200 lg:hidden border border-gray-300 rounded-xl mx-2'>
                            <button className="flex items-center justify-center gap-2 py-3" onClick={() => setShowSide(true)}>
                                <Icon className="text-xl" icon="solar:filter-outline" />
                                <span className='text-sm'>فیلترها</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 py-3" onClick={() => setShowSort(true)}>
                                <Icon className="text-2xl" icon="solar:sort-from-top-to-bottom-outline" />
                                <span className='text-sm'>ترتیب: {sortLabels[currentSort!]}</span>
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
