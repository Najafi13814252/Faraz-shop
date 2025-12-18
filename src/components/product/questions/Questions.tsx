import { Icon } from "@iconify/react"

function Questions() {
    return (
        <div className="mt-4 border border-gray-200 shadow-md rounded-xl pt-4">
            <div className="flex flex-col gap-6">
                <section className="px-4">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex justify-center text-white font-medium text-xl">م</div>
                        <div className="flex flex-col gap-1 relative bottom-1">
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-medium">مریم رضایی</span>
                                <span className="bg-green-500/20 text-green-600 px-2 py-1 rounded-full text-xs font-medium">خریدار</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500 text-xs">
                                <Icon icon="solar:clock-circle-outline" />
                                <span>2 ساعت پیش</span>
                            </div>
                        </div>
                    </div>
                </section>

                <p className="font-medium px-4">این گوشی مناسب است و از نظر کیفیت و متریال با مدل‌های مشابه برابری می‌کند. طراحی زیبا و امکانات کامل آن واقعاً راضی‌کننده است.</p>

                <div className="flex items-center gap-4 text-gray-600 px-4">
                    <div className="flex items-center gap-1">
                        <Icon icon="solar:dialog-2-outline" />
                        <span className="text-xs">2 پاسخ</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Icon icon="solar:like-outline" />
                        <span className="text-xs">12 تایید</span>
                    </div>
                </div>

                <section className="bg-sky-50 rounded-b-xl p-5">
                    <div className="bg-white flex flex-col gap-2 p-4 rounded-lg shadow">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex justify-center text-white font-medium text-xl">م</div>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-medium relative bottom-1">محمد کریمی</span>
                                <span className="bg-orange-500/20 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">فروشنده</span>
                            </div>
                        </div>

                        <p className="text-sm">این الان کجاش خوبه به گرونی؟! انسانم آرزوست.</p>

                        <div className="flex items-center justify-between border-t border-t-gray-300 pt-4 mt-4 text-sm">
                            <span>پاسخ داده شده در 15/12/1403</span>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-gray-500">
                                    <Icon className="text-lg" icon="solar:like-outline" />
                                    <span>12</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500">
                                    <Icon className="text-lg" icon="solar:dislike-outline" />
                                    <span>2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Questions