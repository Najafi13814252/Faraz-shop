"use client"

import SideFilter from '@/components/SideFilter'
import SortingFilter from '@/components/SortingFilter'
import { Icon } from '@iconify/react'
import { use, useState } from 'react'

type Props = {
    children: React.ReactNode
    params: Promise<{ category: string }>
}

export default function CtegoryProductLayout({ children, params }: Props) {

    const { category } = use(params)

    const [showSide, setShowSide] = useState(false)

    return (
        <div className="sm:mx-10 my-5">
            <div className="flex flex-col gap-10">
                <div className="w-full flex">
                    {/* side filter */}
                    <SideFilter category={category} showSide={showSide} onClose={() => setShowSide(false)}/>


                    {/* product table */}
                    <div className="w-full sm:w-4/5 flex flex-col gap-2 mr-0 sm:mr-5 mt-2">
                        {/* breadcrumb */}
                        <div className="mr-2 my-2">فراز شاپ / موبایل</div>

                        {/* product filter  */}
                        {/* <SortingFilter category={params.category}/> */}

                        <div className='grid grid-cols-2 divide-x-[1px] lg:hidden border border-gray-300 rounded-xl px-2'>
                            <button className="flex items-center justify-center gap-2 py-3" onClick={() => setShowSide(true)}>
                                <Icon className="text-xl" icon="solar:filter-outline" />
                                <span>فیلترها</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 py-3">
                                <Icon className="text-2xl" icon="solar:sort-from-top-to-bottom-outline" />
                                <span>ترتیب: همه کالاها</span>
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
