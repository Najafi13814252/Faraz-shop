import LatestOrder from "@/components/userPanelTemplates/LatestOrder"
import Overview from "@/components/userPanelTemplates/Overview"

const overview = [
    { id: 1, title: 'سفارش‌ها', value: 3, desc: '2 سفارش در حال ارسال' },
    { id: 2, title: 'موجودی کیف پول', value: 0, desc: '15% افزایش نسبت به ماه گذشته' },
    { id: 3, title: 'علاقه‌مندی‌ها', value: 6, desc: '8% افزایش نسبت به ماه گذشته' },
    { id: 4, title: 'تیکت‌ها', value: 5, desc: '2 تیکت در حال بررسی' }
]

function UserPanel() {
  return (
    <div className="w-full flex flex-col gap-8">
      <Overview overview={overview}/>

      <LatestOrder />
    </div>
  )
}

export default UserPanel
