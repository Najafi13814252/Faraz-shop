import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Cart() {
  return (
    <div className="bg-gray-50 border border-gray-200 p-4 flex flex-col gap-8 rounded-3xl">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">سبد خرید <span className="text-gray-400  text-base">(2 کالا)</span></h2>
        <div className="flex items-center gap-1 text-red-600 text-lg">
          <Icon className="text-xl" icon="solar:trash-bin-trash-outline" />
          حذف همه
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          {/* عکس و تعداد */}
          <div>
            <Image src="/images/product_1.webp" className="w-44 h-44" width="176" height="176" alt="Product" />
          </div>

          {/* اطلاعانت و قیمت */}
          <div className="flex flex-col gap-4">
            <span className="font-medium">لپ تاپ 15.3 اینچی اپل مدل MacBook Air MXD13 2024 LLA-M3-16GB RAM-512GB SSD</span>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 flex rounded-full bg-blue-700"></span>
              <span>آبی</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Icon className="text-2xl" icon="material-symbols-light:verified-user-outline-rounded" />
              <span>گارانتی 18 ماهه</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Icon className="text-2xl" icon="material-symbols-light:delivery-truck-speed-outline-rounded" />
              <span>ارسال 1 روز کاری</span>
            </div>
            <span className="text-xl font-medium">{(125000000).toLocaleString()} تومان</span>
          </div>
        </div>
        <Icon className="text-2xl" icon="solar:close-circle-outline" />
      </div>
    </div>
  )
}
