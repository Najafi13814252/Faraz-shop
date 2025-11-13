import { Icon } from "@iconify/react";

export default function Categories() {

    type Category = {
        id: number
        title: string
        icon: string
        iconColor: string
    }

    const categories: Category[] = [
        { id: 1, title: 'موبایل', icon: 'solar:smartphone-2-linear', iconColor: 'text-purple-500' },
        { id: 2, title: 'لپ‌تاپ', icon: 'solar:laptop-outline', iconColor: 'text-sky-500' },
        { id: 3, title: 'ساعت و بند هوشمند', icon: 'solar:watch-square-outline', iconColor: 'text-green-500' },
        { id: 4, title: 'گیمینگ', icon: 'solar:gamepad-outline', iconColor: 'text-rose-500' },
        { id: 5, title: 'پرفروش‌ترین‌ها', icon: 'solar:fire-outline', iconColor: 'text-orange-500' }
    ]

    return (
        <div className="flex gap-4 mr-14 mt-5">
            <button className="flex items-center gap-2 pl-4 text-gray-800 cursor-pointer border-l-2 border-l-gray-300">
                <Icon className="text-xl" icon="solar:widget-2-outline" />
                <span>دسته بندی‌ها</span>
            </button>
            <div className="flex items-center gap-10">
                {categories.map(category => (
                    <button className="flex items-center gap-2 group cursor-pointer" key={category.id}>
                        <Icon className={`text-2xl rotate-[30deg] group-hover:rotate-0 duration-200 ${category.iconColor}`} icon={category.icon} />
                        <span className="text-gray-800">{category.title}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}
