import { Icon } from "@iconify/react"

function OtherFilters({ productFilters, openItems, onChangeToggle }: {
    productFilters: Categories
    openItems: { [key: string]: boolean }
    onChangeToggle: (key: string) => void
}) {
    return (
        <>
            {productFilters?.categoryFilters.map((filter, idx) => (
                <div key={filter.id} className="flex flex-col">
                    <button
                        onClick={() => onChangeToggle(filter.id.toString())}
                        className={`
                            flex items-center justify-between pb-4 cursor-pointer
                            ${idx === productFilters.categoryFilters.length - 1
                                ? openItems[filter.id]
                                    ? "border-b border-b-gray-200"
                                    : "border-b-0"
                                : "border-b border-b-gray-200"}
                        `}>
                        <span>{filter.label}</span>
                        <Icon
                            className={`text-xl text-gray-500 transition-transform duration-500 ${openItems[filter.id] ? "rotate-180" : ""
                                }`}
                            icon="solar:alt-arrow-down-outline"
                        />
                    </button>


                    {/* smoother animation */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ${openItems[filter.id]
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="flex flex-col gap-4 pt-4">
                            {filter.subFilter.map((sub) => (
                                <label key={sub.id} className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4" />
                                    {sub.label}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default OtherFilters
