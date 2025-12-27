import { Icon } from "@iconify/react"
import RangeSlider from "../RangeSlider"

function PriceFilter({openItems, onChangeToggle}: {
    openItems: {[key: string]: boolean}
    onChangeToggle: (key: string) => void
}) {
    return (
        <div className="flex flex-col">
            <button onClick={() => onChangeToggle("price")} className="flex items-center justify-between border-b border-b-gray-200 pb-4 cursor-pointer">
                <span>محدوده قیمت</span>
                <Icon className={`text-xl text-gray-500 transition-transform duration-500 ${openItems.price ? "rotate-180" : ""}`} icon="solar:alt-arrow-down-outline" />
            </button>

            {/* Smoother dropdown */}
            <div className={`overflow-hidden transition-all duration-500 ${openItems.price ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col gap-4 pt-4">
                    <RangeSlider initialMin={0} initialMax={400000000} min={0} max={400000000} step={100} />

                    <button className="bg-sky-500 text-white rounded-xl py-2 cursor-pointer hover:bg-sky-600 duration-200">
                        فیلتر
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PriceFilter
