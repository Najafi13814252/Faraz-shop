import { Icon } from "@iconify/react"
import Link from "next/link"

function MobileMenu() {
    return (
        <div className="flex sm:hidden w-full items-center justify-between gap-3 border-b border-b-gray-200 pb-4">
            <button className="p-2.5 btn-base bg-gray-800">
                <Icon className="text-2xl text-white" icon="solar:magnifer-outline" />
            </button>

            <Link href="/">
                <h1 className="text-4xl font-black font-Morabba text-black">بلک <span className="text-blue-700">شاپ</span></h1>
            </Link>

            <button className="p-2.5 rounded-full border border-blue-700">
                <Icon className="text-2xl text-blue-700" icon="solar:phone-calling-rounded-outline" />
            </button>
        </div>
    )
}

export default MobileMenu
