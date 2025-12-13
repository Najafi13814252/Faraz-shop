import { Icon } from "@iconify/react"

const features = [
    { id: 1, title_1: 'حافظه داخلی', title_2: '128 گیگابایت' },
    { id: 2, title_1: 'حافظه RAM', title_2: '6 گیگابایت' },
    { id: 3, title_1: 'سایز صفحه‌نمایش', title_2: '6.88 اینچ' },
    { id: 4, title_1: 'ظرفیت باتری', title_2: '5200 میلی‌آمپر‌ساعت' },
    { id: 5, title_1: 'نسخه سیستم‌عامل', title_2: 'Android 14' },
    { id: 6, title_1: 'رزولوشن دوربین اصلی', title_2: '50 مگاپیکسل' }
]

function ProductInfo() {
    return (
        <div>
            <div className="flex flex-col gap-6">
                {/* اسم محصول */}
                <section className="flex flex-col gap-4 border-b border-b-gray-200 pb-4">
                    <h1 className="font-medium text-lg">گوشی موبایل اپل مدل iPhone 16 Pro ZAA دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت</h1>
                    <span className="text-gray-500 text-sm">Samsung Galaxy Watch5 44mm Smartwatch</span>
                </section>

                {/* اطلاعات محصول */}
                <section className="flex flex-col gap-4">
                    {/* امتیازات */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                            <Icon className="text-yellow-400" icon="solar:star-bold" />
                            <span>4.6</span>
                            <span className="text-gray-400 text-xs">(امتیاز ۳۰۸ خریدار)</span>
                        </div>
                        <button className="flex items-center gap-1 bg-gray-100 text-gray-700 rounded-full px-2 py-1.5 text-xs">
                            <span>185 دیدگاه</span>
                            <Icon icon="solar:alt-arrow-left-outline" />
                        </button>
                        <button className="flex items-center gap-1 bg-gray-100 text-gray-700 rounded-full px-2 py-1.5 text-xs">
                            <span>74 پرسش</span>
                            <Icon icon="solar:alt-arrow-left-outline" />
                        </button>
                    </div>

                    {/* رنگ */}
                    <div className="flex flex-col gap-4">
                        <span className="font-medium">رنگ: نارنجی</span>
                        <div className="flex items-center gap-2 border border-gray-300 rounded-full px-2 py-1 w-fit">
                            <div className="w-5 h-5 rounded-full bg-orange-500"></div>
                            <span className="text-sm">نارنجی</span>
                        </div>
                    </div>
                </section>

                {/* ویژگی‌های محصول */}
                <section className="flex flex-col gap-4">
                    <span className="font-medium">ویژگی‌ها</span>

                    <div className="grid grid-cols-3 gap-2">
                        {features.map(feature => (
                            <div className="bg-gray-200/60 rounded-md px-4 py-3 flex flex-col gap-1.5 text-xs" key={feature.id}>
                                <span className="text-gray-500">{feature.title_1}</span>
                                <span className="text-gray-800">{feature.title_2}</span>
                            </div>
                        ))}
                    </div>

                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-full h-px my-8 bg-neutral-quaternary border-0 bg-gray-200/60" />
                        <div className="absolute px-3 font-medium text-heading bg-white">
                            <button className="px-4 py-3 flex items-center gap-2 border border-gray-300 rounded-lg text-xs">
                                مشاهده همه ویژگی‌ها
                                <Icon className="text-base" icon="solar:alt-arrow-left-outline" />
                            </button>
                        </div>
                    </div>
                </section>

                <section className="px-4 border-2 border-dashed border-gray-200 rounded-2xl">
                    <div className="flex items-center gap-4">
                        <Icon className="text-7xl text-sky-600" icon="solar:info-circle-bold" />
                        <p className="text-xs max-w-lg text-sky-700">امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد. تمام گوشی‌های دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع کنید.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProductInfo
