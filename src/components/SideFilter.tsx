import { Icon } from "@iconify/react";
import RangeSlider from "./RangeSlider";

export default function SideFilter() {
    return (
        <div className="w-1/5 flex flex-col gap-4">
            {/* filter range */}
            <div className="flex flex-col gap-6 border border-gray-300 rounded-2xl p-4">
                <div className="flex gap-2 border-b border-b-gray-200">
                    <Icon className="text-2xl text-gray-500 relative top-0.5" icon="solar:banknote-2-outline" />
                    <span className="pb-4 font-medium text-lg">فیلتر بر اساس قیمت</span>
                </div>
                <RangeSlider initialMin={0} initialMax={400000000} min={0} max={400000000} step={100} priceCap={1000} />
                <button className="bg-sky-500 text-white rounded-xl py-2 cursor-pointer hover:bg-sky-600 duration-200">فیلتر</button>
            </div>

            {/* filter brand */}
            <div className="flex flex-col gap-6 border border-gray-300 rounded-2xl p-4">
                <div className="flex gap-2 border-b border-b-gray-200">
                    <Icon className="text-2xl text-gray-500 relative top-0.5" icon="solar:banknote-2-outline" />
                    <span className="pb-4 font-medium text-lg">فیلتر بر اساس برند</span>
                </div>
                <div className="flex items-center gap-2">
                    <input className="transition-all duration-500 ease-in-out w-4 h-4" type="checkbox" />
                    <label>سامسونگ</label>
                </div>

            </div>
        </div>
    )
}
