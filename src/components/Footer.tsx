"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

interface Item {
    id: number;
    title?: string;
    icon_name?: string;
}

interface Links {
    quick: Item[];
    useful: Item[];
    concat: Item[];
    apps: Item[];
}

const links: Links = {
    quick: [
        { id: 1, title: "صفحه اصلی" },
        { id: 2, title: "درباره ما" },
        { id: 3, title: "دوره‌های پیشنهادی" },
        { id: 4, title: "مدرسین" },
    ],
    useful: [
        { id: 1, title: "ارتباط با ما" },
        { id: 2, title: "دوره‌ها" },
        { id: 3, title: "دروس" },
        { id: 4, title: "ایجاد حساب کاربری" },
    ],
    concat: [
        { id: 1, title: "Farazshop@gmail.com", icon_name: "solar:letter-opened-outline" },
        { id: 2, title: "4567 123 9812+", icon_name: "solar:phone-calling-outline" },
        { id: 3, title: "ایران", icon_name: "solar:map-point-outline" },
    ],
    apps: [
        { id: 1, icon_name: "akar-icons:instagram-fill" },
        { id: 2, icon_name: "akar-icons:linkedinv2-fill" },
        { id: 3, icon_name: "akar-icons:x-fill" },
        { id: 4, icon_name: "akar-icons:whatsapp-fill" },
    ],
};

const mobileFooter: Item[] = [
    { id: 1, title: "خانه", icon_name: "solar:home-angle-bold" },
    { id: 2, title: "جستجو", icon_name: "solar:minimalistic-magnifer-outline" },
    { id: 3, title: "دسته‌بندی‌ها", icon_name: "solar:widget-2-outline" },
    { id: 4, title: "آموزش‌های من", icon_name: "solar:notebook-outline" },
    { id: 5, title: "پروفایل", icon_name: "solar:user-outline" },
];

export default function Footer() {
    return (
        <>
            <footer className="mt-10 w-full py-10 md:pr-20 bg-sky-700">
                <div className="flex flex-col md:flex-row gap-16 md:gap-36 items-center text-white">
                    {/* introduction */}
                    <div className="flex flex-col gap-6">
                        <Image className="bg-white px-4 py-2 rounded-2xl" src="/images/logo.webp" width="200" height="200" alt="Logo" />

                        <p className="w-full md:w-80">
                            بنیاد تعالی آموزشی نواندیش با هدف ارتقاء دانش و مهارت‌های تخصصی در سازمان‌ها و
                            شرکت‌ها، با بهره‌گیری از اساتید مجرب و محتوای به‌روز، بستری حرفه‌ای برای آموزش و
                            توسعه منابع انسانی فراهم کرده است.
                            ما همراه شما هستیم در مسیر رشد، یادگیری و تعالی سازمانی.
                        </p>

                        <div className="flex items-center gap-4">
                            {links.apps.map((app) => (
                                <div
                                    key={app.id}
                                    className="flex items-center p-2 rounded-full bg-sky-800 cursor-pointer hover:scale-125 duration-200"
                                >
                                    {app.icon_name && <Icon className="text-main-100 text-xl" icon={app.icon_name} />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* lists */}
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-40 w-full">
                        {/* quick links */}
                        <li className="flex flex-col gap-1">
                            <span className="mb-3">لینک‌های سریع</span>
                            {links.quick.map((qu) => (
                                <ul
                                    key={qu.id}
                                    className="flex items-center gap-2 cursor-pointer hover:text-main-200 duration-200"
                                >
                                    <Icon icon="solar:arrow-left-bold-duotone" />
                                    <span>{qu.title}</span>
                                </ul>
                            ))}
                        </li>

                        {/* useful links */}
                        <li className="flex flex-col gap-1">
                            <span className="mb-3">لینک‌های کاربردی</span>
                            {links.useful.map((use) => (
                                <ul
                                    key={use.id}
                                    className="flex items-center gap-2 cursor-pointer hover:text-main-200 duration-200"
                                >
                                    <Icon icon="solar:arrow-left-bold-duotone" />
                                    <span>{use.title}</span>
                                </ul>
                            ))}
                        </li>

                        {/* contact us */}
                        <li className="flex flex-col gap-3">
                            <span className="mb-3">ارتباط با ما</span>
                            {links.concat.map((us) => (
                                <ul key={us.id} className="flex items-center gap-2">
                                    {us.icon_name && <Icon icon={us.icon_name} />}
                                    <span>{us.title}</span>
                                </ul>
                            ))}
                        </li>
                    </ul>
                </div>
            </footer>

            {/* mobile footer */}
            <div className="fixed bottom-0 w-full flex md:hidden justify-between items-center py-2 px-4 z-20 bg-white shadow-lg border-t border-t-gray-200">
                {mobileFooter.map((menu) => (
                    <button
                        key={menu.id}
                        className="flex flex-col items-center gap-1 text-main-100 cursor-pointer"
                    >
                        <Icon className="text-xl" icon={menu.icon_name!} />
                        <span className="text-xs">{menu.title}</span>
                    </button>
                ))}
            </div>
        </>
    );
}