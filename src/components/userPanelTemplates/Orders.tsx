function Orders() {
  return (
    <div className="space-y-8">
      {/* فیلتر و سرچ سفارشات */}
      <section className="flex justify-between items-center rounded-2xl p-5 border border-gray-200 shadow">
        <select className="border border-gray-700 rounded-lg px-2 py-1 w-40">
          <option selected>همه وضعیت‌ها</option>
          <option>جاری</option>
          <option>تحویل شده</option>
          <option>مرجوع شده</option>
          <option>لغو شده</option>
        </select>

        <input type="text" placeholder="جستجوی سفارش..." className="border border-gray-200 rounded-lg px-2 py-1" />
      </section>

      {/* لیست سفارشات */}
      <section className="rounded-2xl p-5 border border-gray-200 shadow">
        <h2 className="font-Morabba text-lg text-blue-700 pb-5">لیست سفارشات</h2>

        <div className="rounded-2xl border border-gray-200 text-sm">
          {/* جزئیات سفارش */}
          <div className="flex items-center justify-between py-2 pl-2 bg-blue-700/8 rounded-t-2xl border-b border-b-gray-200">
            <section className="flex items-center">
              <div className="flex flex-col items-start gap-1 border-l border-l-gray-300 px-4">
                <span className="text-gray-500">شماره سفارش</span>
                <span>1611</span>
              </div>
              <div className="flex flex-col items-start gap-1 border-l border-l-gray-300 px-4">
                <span className="text-gray-500">تاریخ سفارش</span>
                <span>54455</span>
              </div>
              <div className="flex flex-col items-start gap-1 px-4">
                <span className="text-gray-500">مبلغ کل</span>
                <span>451522</span>
              </div>
            </section>

            <section className="space-x-4">
              <span className="bg-green-500/15 text-green-600 px-2 py-0.5 rounded-full">تحویل شده</span>
              <button className="text-blue-700 cursor-pointer">جزئیات سفارش</button>
            </section>
          </div>

          {/* سفارش‌ها */}
          <div className="p-2">
            <section className="flex items-center justify-between p-2 border-b border-b-gray-200">
              <div className="flex items-center gap-3">
                <img src="/images/tablet.webp" alt="Orders" className="w-14 h-14" />
                <div className="flex flex-col items-start gap-1">
                  <p className="text-base">تبلت اپل مدل آی‌پد</p>
                  <span className="text-gray-500">رنگ:مشکی . تعداد:1عدد</span>
                </div>
              </div>

              <span className="text-base">1,100,000 تومان</span>
            </section>

            <section className="p-2">
              <span className="text-blue-700 cursor-pointer">دانلود فاکتور</span>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Orders
