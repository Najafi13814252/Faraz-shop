import Orders from "@/components/userPanelTemplates/Orders"
import Overview from "@/components/userPanelTemplates/Overview"

const overview = [
    { id: 1, title: 'جاری', value: 3 },
    { id: 2, title: 'تحویل شده', value: 0 },
    { id: 3, title: 'مرجوع شده', value: 6 },
    { id: 4, title: 'لغو شده', value: 5 }
]

function OrdersPage() {
  return (
    <div className="w-full flex flex-col gap-8">
      <Overview overview={overview}/>

      <Orders />
    </div>
  )
}

export default OrdersPage
