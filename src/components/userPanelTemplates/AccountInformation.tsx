function AccountInformation() {
  return (
    <div className="p-4 rounded-xl shadow border border-gray-200 space-y-6">
        <h2>اطلاعات حساب کاربری</h2>

        <form className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="family">نام و نام‌خانوادگی</label>
                <input type="text" id="family" className="bg-blue-700/7 border border-gray-200 px-2 py-1.5 rounded-md" placeholder="پارسا وصالی"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="mobile">شماره موبایل</label>
                <input type="text" id="mobile" className="bg-blue-700/7 border border-gray-200 px-2 py-1.5 rounded-md" placeholder="09655928434"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email">ایمیل</label>
                <input type="email" id="email" className="bg-blue-700/7 border border-gray-200 px-2 py-1.5 rounded-md" placeholder="parsa@gmail.com"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="pass">رمز عبور</label>
                <input type="password" id="pass" className="bg-blue-700/7 border border-gray-200 px-2 py-1.5 rounded-md" placeholder="123456"/>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="birthday">تاریخ تولد</label>
                <input type="date" id="birthday" className="bg-blue-700/7 border border-gray-200 px-2 py-1.5 rounded-md"/>
            </div>
        </form>
        <button className="px-6 py-2 bg-blue-700 text-white rounded-md cursor-pointer">ذخیره تغییرات</button>
    </div>
  )
}

export default AccountInformation
