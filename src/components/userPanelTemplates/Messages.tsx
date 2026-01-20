function Messages() {
    return (
        <div className="p-4 rounded-xl shadow border border-gray-200 space-y-6">
            <h2>پیام‌های من (2)</h2>

            <section>
                <div className="border border-blue-200 shadow rounded-xl p-4 space-y-1">
                    <p className="text-lg text-green-500">امیر رضایی عزیز سفارش شما با پیگیری #1222 در حال ارسال است</p>
                    <div className="flex items-center  justify-between">
                        <p className="text-gray-500">1404/9/3 | 12:00</p>
                        <button className="px-4 py-2 rounded-md bg-blue-700/10 text-blue-700">پیگیری سفارش</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Messages
