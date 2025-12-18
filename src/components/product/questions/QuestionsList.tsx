import { Icon } from "@iconify/react"
import Questions from "./Questions"

function QuestionsList() {
    return (
        <div>
            <section className="flex items-center justify-between text-sm bg-sky-50 border border-gray-200 p-4 rounded-xl">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <Icon className="text-2xl" icon="solar:sort-from-top-to-bottom-broken" />
                        <span className="text-gray-700">مرتب‌سازی:</span>
                    </div>
                    <ul className="flex items-center gap-3">
                        <li className="bg-sky-500 text-white px-5 py-2 rounded-lg cursor-pointer">جدیدترین</li>
                        <li className="bg-white px-5 py-2 rounded-lg cursor-pointer">محبوب‌ترین</li>
                        <li className="bg-white px-5 py-2 rounded-lg cursor-pointer">دارای پاسخ</li>
                    </ul>
                </div>
                <span className="text-gray-700"><span className="text-sky-500 font-medium">14</span> سوال</span>
            </section>

            <Questions />
        </div>
    )
}

export default QuestionsList
