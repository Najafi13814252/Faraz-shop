import { Icon } from "@iconify/react"

import CommentsList from "./CommentsList"

function CommentForm() {
    return (
        <div className="flex flex-col gap-6">
            {/* comment */}
            <section>
                <form className="flex flex-col gap-3">
                    <label htmlFor="comment">نظر:</label>
                    <textarea rows={6} className="w-full bg-gray-50 rounded-lg border border-gray-200 p-2 placeholder:text-sm" placeholder="متن نظر" id="comment"></textarea>
                </form>
            </section>

            {/* rate */}
            <section className="flex items-center gap-2">
                <span>امتیاز شما:</span>
                <div className="flex gap-1.5">
                    <Icon className="text-xl text-yellow-400" icon="solar:star-outline" />
                    <Icon className="text-xl text-yellow-400" icon="solar:star-outline" />
                    <Icon className="text-xl text-yellow-400" icon="solar:star-outline" />
                    <Icon className="text-xl text-yellow-400" icon="solar:star-outline" />
                    <Icon className="text-xl text-yellow-400" icon="solar:star-outline" />
                </div>
            </section>

            {/* point */}
            <section>
                <form className="flex md:flex-row flex-col md:items-center gap-4 w-full">
                    <div className="flex flex-col gap-3 w-full md:w-1/2">
                        <label htmlFor="+">نکات مثبت:</label>
                        <input type="text" className="w-full bg-gray-50 rounded-lg border border-gray-200 p-2 placeholder:text-sm" id="+" placeholder="نقات قوت را وارد کنید" />
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-1/2">
                        <label htmlFor="-">نکات منفی:</label>
                        <input type="text" className="w-full bg-gray-50 rounded-lg border border-gray-200 p-2 placeholder:text-sm" id="-" placeholder="نقات ضعف را وارد کنید" />
                    </div>
                </form>
            </section>

            <button className="bg-sky-600 text-white px-20 py-3 font-medium w-full md:w-fit rounded-lg cursor-pointer">ثبت نظر</button>

            <hr className="text-gray-300"/>

            <CommentsList />
        </div>
    )
}

export default CommentForm
