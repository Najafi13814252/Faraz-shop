import { Icon } from "@iconify/react";

export default function Stepper() {
    return (
        <section className="mb-4">
            <ol className="flex items-center w-full text-sm font-medium text-center text-body sm:text-base">
                <li className="flex gap-1 md:w-full items-center text-blue-700 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-default after:border-px after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
                    <Icon className="text-4xl" icon="solar:cart-large-minimalistic-bold" />
                    <span className="whitespace-nowrap">سبد خرید</span>
                </li>
                <li className="flex gap-1 md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-default after:border-px after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
                    <Icon className="text-4xl" icon="solar:bill-list-outline" />
                    <span className="whitespace-nowrap">اطلاعات پرداخت</span>
                </li>
                <li className="flex items-center gap-1">
                    <Icon className="text-2xl" icon="solar:card-outline" />
                    <span className="whitespace-nowrap">اتمام خرید</span>
                </li>
            </ol>
        </section>
    )
}
