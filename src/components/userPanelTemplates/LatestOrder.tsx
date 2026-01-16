const orderTabel = [
    { id: 1, image: '/images/tablet.webp', name: 'تپلت مدل آی-پد', data: '1402/11/11', order_num: '#ORD-7842', price: 170000000, status: 'ok' },
    { id: 2, image: '/images/watch.webp', name: 'ساعت هوشمند شیائومی', data: '1402/11/11', order_num: '#ORD-7839', price: 170000000, status: 'paying' },
    { id: 3, image: '/images/laptop.webp', name: 'گوشی موبایل سامسونگ', data: '1402/11/11', order_num: '#ORD-7835', price: 170000000, status: 'cancel' }
]

function LatestOrder() {
    return (
        <div className="rounded-xl border border-gray-100 p-4 shadow">
            <section>
                <h2 className="font-Morabba text-lg text-blue-700">سفارش‌های اخیر</h2>

                <div className="relative mt-4 overflow-x-auto rounded-lg border border-gray-200">
                    <table className="w-full">
                        <thead>
                            <tr className="text-right">
                                <th className="py-2 pr-2 bg-gray-200">نام محصول</th>
                                <th className="py-2 bg-gray-200">تاریخ</th>
                                <th className="py-2 bg-gray-200">مبلغ (تومان)</th>
                                <th className="py-2 bg-gray-200">شماره سفارش</th>
                                <th className="py-2 bg-gray-200">وضعیت</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderTabel.map((order, index) => (
                                <tr key={order.id} className={`bg-white ${orderTabel.length - 1 === index ? 'border-none' : 'border-b border-b-gray-200'}`}>
                                    <td className="flex items-center gap-2 pr-2 py-0.5">
                                        <img src={order.image} alt="Orders" className="w-14 h-14" />
                                        <p>{order.name}</p>
                                    </td>
                                    <td>{order.data}</td>
                                    <td>{(order.price).toLocaleString()}</td>
                                    <td>{order.order_num}</td>
                                    <td>{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default LatestOrder
