import { Icon } from "@iconify/react"

function BuyCard() {
    return (
        <div className="text-sm">
            <section className="flex flex-col gap-5 border-b border-b-gray-300 pb-5">
                <div className="flex items-center gap-2">
                    <div className="bg-sky-500/10 rounded-full p-1">
                        <Icon className="text-2xl text-sky-500" icon="material-symbols-light:package-2-outline-sharp" />
                    </div>
                    <span>آماده ارسال به سراسر کشور</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="bg-purple-500/10 rounded-full p-1">
                        <Icon className="text-2xl text-purple-500" icon="material-symbols-light:delivery-truck-bolt-outline-rounded" />
                    </div>
                    <span>ارسال امروز به <span className="text-purple-500">تهران و کرج</span></span>
                </div>

                <div className="flex items-center gap-1">
                    <span className="bg-green-600/10 text-green-600 px-3 py-1 rounded-full">نقدی</span>
                    <span className="bg-green-600/10 text-green-600 px-3 py-1 rounded-full">اقساطی</span>
                </div>
            </section>

            <section className="hidden md:flex flex-col gap-4 py-5 border-b border-b-gray-300">
                <div className="flex items-center justify-end">
                    {/* تعداد */}
                    {/* <div>0</div> */}
                    {/* قیمت */}
                    <div className="flex flex-col items-end gap-2">
                        {/* تخفیف */}
                        <div className="flex items-center gap-2 ">
                            <span className="line-through text-gray-400">{(213000000).toLocaleString()}</span>
                            <span className="bg-rose-500 text-white px-2 py-1 rounded-lg">{(10).toLocaleString("fa-IR")}%</span>
                        </div>
                        {/* قیمت با احتساب تخفیف */}
                        <span className="text-2xl font-semibold text-gray-700">{(191700000).toLocaleString()} <span className="text-sm text-gray-600 font-normal">تومان</span></span>
                    </div>
                </div>
                <button className="bg-sky-600 text-white font-medium rounded-md py-3.5 cursor-pointer">افزودن به سبد خرید</button>
                <div className="flex items-center gap-2 font-medium text-xs text-orange-600">
                    <Icon className="text-xl" icon="solar:shield-check-outline" />
                    <span>گارانتی 18 ماهه و تضمین سلامت فراز شاپ</span>
                </div>
            </section>

            <section className="mt-5">
                <button className="w-full flex gap-4 bg-linear-to-r from-green-500 to-green-600 px-2 py-3 rounded-md cursor-pointer">
                    <img src="/images/aghsat.png" className="w-12" alt="Aghsat" />
                    <div className="flex flex-col items-start gap-2 text-white font-medium text-sm">
                        <span>خرید اقساطی به همراه دسته چک!</span>
                        <span className="text-xs">انتخاب و پرداخت با کارمزد 4.5%</span>
                    </div>
                </button>
            </section>
        </div>
    )
}

export default BuyCard
