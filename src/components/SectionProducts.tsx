import { Icon } from "@iconify/react";

export default function SectionProducts({ children, discountBox, title }: { children: React.ReactNode, discountBox?: boolean, title: string }) {
    return (
        <section className="my-8">
            <div className={`w-full h-full rounded-lg p-3 ${discountBox ? "border-4 border-red-500" : "border-2 border-sky-700"}`}>
                <div className={`flex justify-between items-center ${discountBox ? "bg-red-500 text-white p-2 rounded-lg" : "text-sky-800 border-b border-gray-300 px-2 pt-2 pb-3.5"}`}>
                    {discountBox ? (<div className="flex items-center gap-1">
                        <Icon className="text-4xl" icon="solar:sale-outline" />
                        <span className="font-medium text-2xl">{title}</span>
                    </div>) : (<span className="font-medium text-xl">{title}</span>)}

                    <button className="flex items-center font-medium cursor-pointer">
                        نمایش همه
                        <Icon className="text-2xl" icon="solar:alt-arrow-left-outline" />
                    </button>
                </div>

                {children}
            </div>
        </section>
    )
}
