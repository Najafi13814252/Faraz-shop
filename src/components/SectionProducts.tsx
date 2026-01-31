import Icon from "./ui/Icon";


export default function SectionProducts({ children, discountBox, title }: { children: React.ReactNode, discountBox?: boolean, title: string }) {
    return (
        <section className="my-8">
            <div className={`w-full h-full rounded-4xl ${discountBox ? "border-[3px] border-gary-900 p-3 bg-gray-50" : "bg-gray-50 border-2 border-blue-700 px-3 py-1"}`}>
                <div className={`flex justify-between items-center ${discountBox ? "bg-gray-900 text-white p-2 rounded-full" : "text-blue-700 border-b border-gray-300 px-2 pt-2 pb-3.5"}`}>
                    {discountBox ? (<div className="flex items-center gap-1">
                        <Icon name="discount" size={36} className="text-white"/>
                        <span className="font-medium text-lg md:text-2xl font-Morabba">{title}</span>
                    </div>) : (<span className="font-medium text-lg md:text-xl font-Morabba">{title}</span>)}

                    <button className="flex items-center font-medium cursor-pointer">
                        نمایش همه
                        <Icon name="arrow_left" size={18} className="md:text-2xl" />
                    </button>
                </div>

                {children}
            </div>
        </section>
    )
}
