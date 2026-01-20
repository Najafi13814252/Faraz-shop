const addresses = [
    { id: 1, name: 'منزل', girandeh: 'امیر رضایی', address: 'کرج، باغستان، گلستان 12، پلاک 3، واحد 6', phone: '02633373199', code: '3174459625', default: true },
    { id: 2, name: 'محل کار', girandeh: 'امیر رضایی', address: 'کرج، باغستان، گلستان 12، پلاک 3، واحد 6', phone: '02633373199', code: '3174459625', default: false }
]

function Addresses() {
    return (
        <div className="p-4 rounded-xl shadow border border-gray-200 space-y-6">
            <section className="flex items-center justify-between">
                <h2>آدرس‌های من (2)</h2>
                <span>آدرس جدید</span>
            </section>

            <section className="grid grid-cols-2 gap-4">
                {addresses.map(address => (
                    <div key={address.id} className={`border shadow rounded-xl p-4 ${address.default ? 'border-blue-700' : 'border-gray-200'}`}>
                        <div className="flex items-center justify-between">
                            <span>{address.name}</span>
                            <div className="space-x-2">
                                {address.default && (
                                    <span className="bg-blue-700 text-white text-xs px-2 py-0.5 rounded-full">پیش‌فرض</span>
                                )}
                                <button className="text-blue-700">ادیت</button>
                                <button className="text-red-500">حذف</button>
                            </div>
                        </div>

                        <div className="pt-2 space-y-1">
                            <p>{address.girandeh}</p>
                            <p>{address.address}</p>
                            <p>{address.phone}</p>
                            <p>{address.code}</p>
                        </div>

                        {!address.default && (
                            <button className="bg-gray-200 text-gray-600 rounded-md w-full py-2 mt-4 cursor-pointer text-sm">تنظیم بعنوان پیشفرض</button>
                        )}
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Addresses
