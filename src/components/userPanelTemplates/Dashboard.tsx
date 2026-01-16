"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const menu = [
    {id: 1, title: 'داشبورد', link: '/user-panel'},
    {id: 2, title: 'سفارش‌ها', link: '/user-panel/orders'},
    {id: 3, title: 'علاقه‌مندی‌ها', link: '/b'},
    {id: 4, title: 'آدرس‌ها', link: '/c'},
    {id: 5, title: 'پیام‌ها', link: '/d'},
    {id: 6, title: 'اطلاعات حساب', link: '/e'},
    {id: 7, title: 'خروج', link: '/f'}
]

function Dashboard() {

    const path = usePathname()

    return (
        <div className="w-full p-4 rounded-2xl border border-gray-200 text-xl sticky top-48">
            {/* پروفایل */}
            <section className="mb-2 space-y-0.5">
                <p className="font-Morabba text-blue-700">پارسا رضایی</p>
                <p className="text-base text-gray-500">03696547893</p>
            </section>

            <hr className="text-gray-100"/>

            {/* منوها */}
            <section className="space-y-5 my-2">
                {menu.map(item => (
                    <div className={`${item.id === 7 ? 'text-red-500 hover:text-red-500' : 'text-black'} ${path === item.link ? 'text-blue-700 rounded border-r-4 pr-4 border-r-blue-700 relative left-5' : ''} w-fit py-1 cursor-pointer hover:text-blue-700 duration-200`} key={item.id}>
                        <Link href={item.link}>{item.title}</Link>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Dashboard
