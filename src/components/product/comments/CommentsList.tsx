import { Icon } from "@iconify/react"

function CommentsList() {
  return (
    <>
      <div className="hidden md:flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Icon className="text-2xl" icon="solar:sort-from-top-to-bottom-broken" />
            <span className="text-gray-700">مرتب‌سازی:</span>
          </div>
          <ul className="flex items-center gap-3">
            <li className="text-sky-500 cursor-pointer">جدیدترین</li>
            <li className="cursor-pointer">بیشترین پاسخ</li>
          </ul>
        </div>
        <span className="text-gray-700">13 نظر</span>
      </div>

      <div className="border border-gray-200 shadow-md rounded-xl p-4 whitespace-nowrap md:whitespace-normal">
        <div className="flex flex-col gap-6">
          <section>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex justify-center text-white font-medium text-xl">م</div>
              <div className="flex flex-col gap-1 relative bottom-1">
                <span className="text-lg font-medium">مریم رضایی</span>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <Icon icon="solar:clock-circle-outline" />
                  <span>2 ساعت پیش</span>
                </div>
              </div>
            </div>
            <div className="flex pt-6">
              <Icon className="text-lg text-yellow-400" icon="solar:star-bold" />
              <Icon className="text-lg text-yellow-400" icon="solar:star-bold" />
              <Icon className="text-lg text-yellow-400" icon="solar:star-bold" />
              <Icon className="text-lg text-yellow-400" icon="solar:star-bold" />
              <Icon className="text-lg text-gray-300" icon="solar:star-bold" />
            </div>
          </section>

          <p className="truncate md:whitespace-normal">این گوشی مناسب است و از نظر کیفیت و متریال با مدل‌های مشابه برابری می‌کند. طراحی زیبا و امکانات کامل آن واقعاً راضی‌کننده است.</p>

          <section className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Icon className="text-2xl text-green-500" icon="material-symbols:check-rounded" />
              <span>کیفیت ساخت بالا</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon className="text-xl text-red-500" icon="material-symbols:close-rounded" />
              <span>قیمت بالا</span>
            </div>
          </section>

          <section className="flex items-center justify-between border-t border-t-gray-300 pt-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-orange-500"></div>
              <div>نارنجی</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500">
                <Icon className="text-2xl" icon="solar:like-outline" />
                <span>12</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Icon className="text-2xl" icon="solar:dislike-outline" />
                <span>2</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default CommentsList
