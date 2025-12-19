import { Icon } from "@iconify/react"
import CommentForm from "./CommentForm"

const rates = [
    { id: 1, star: 5, value: 45, number: 127 },
    { id: 2, star: 4, value: 20, number: 155 },
    { id: 3, star: 3, value: 16, number: 54 },
    { id: 4, star: 2, value: 36, number: 58 },
    { id: 5, star: 1, value: 10, number: 12 }
]

function CommentsBox() {
    return (
        <div className="detail-box p-4">
            <div className="mb-6">
                <h2 className="detail-title mb-4">امتیاز و نظرات کاربران</h2>
                <p className="text-gray-500 text-sm">برای ثبت نظر، از طریق دکمه افزودن دیدگاه جدید استفاده نمایید. اگر این محصول را قبلا خریده باشید، نظر شما به عنوان خریدار ثبت خواهد شد.</p>
            </div>

            <div className="flex md:flex-row flex-col gap-4">
                {/* امتیازات */}
                <section className="flex flex-col items-center gap-4 detail-box p-4 h-fit static md:sticky md:top-20">
                    <span className="text-4xl font-medium">4.80</span>

                    <span className="text-gray-400">48 نظر</span>

                    <div className="flex">
                        <Icon className="text-xl text-yellow-400" icon="solar:star-bold" />
                        <Icon className="text-xl text-yellow-400" icon="solar:star-bold" />
                        <Icon className="text-xl text-yellow-400" icon="solar:star-bold" />
                        <Icon className="text-xl text-yellow-400" icon="solar:star-bold" />
                        <Icon className="text-xl text-yellow-400" icon="solar:star-bold" />
                    </div>

                    <div>
                        {rates.map(rate => (
                            <div className="flex items-center gap-2" key={rate.id}>
                                <span>{rate.star}</span>
                                <div className="w-48 bg-gray-200 rounded-full h-2">
                                    <div className="bg-brand h-2 rounded-full bg-sky-500" style={{ width: `${rate.value}%` }}></div>
                                </div>
                                <span>{rate.number}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="w-full">
                    <CommentForm />
                </section>
            </div>
        </div>
    )
}

export default CommentsBox
