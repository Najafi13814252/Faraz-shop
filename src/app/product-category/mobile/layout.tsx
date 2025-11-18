import SideFilter from '@/components/SideFilter'
import { Icon } from '@iconify/react'
import React, { Children } from 'react'

export default function CtegoryProductLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="mx-10 my-5">
            <div className="flex flex-col gap-10">
                <div className="w-full flex">
                    {/* side filter */}
                    <SideFilter />


                    {/* product table */}
                    <div className="w-4/5 flex flex-col gap-2 mr-5 mt-2">
                        {/* breadcrumb */}
                        <div className="mr-2 my-2">فراز شاپ / موبایل</div>

                        {/* product filter  */}
                        <div className="flex items-center justify-between border border-gray-300 rounded-2xl p-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-gray-900 font-medium">
                                    <Icon className="text-3xl" icon="solar:sort-from-top-to-bottom-outline" />
                                    <span>مرتب سازی:</span>
                                </div>
                                <ul className="flex items-center gap-8 text-gray-700">
                                    <li>پرفروش‌ترین</li>
                                    <li>بیشترین قیمت</li>
                                    <li>کمترین قیمت</li>
                                    <li>جدیدترین</li>
                                    <li>بیشترین تخفیف</li>
                                </ul>
                            </div>
                            <span>3,500 کالا</span>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
