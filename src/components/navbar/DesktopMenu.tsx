import Link from "next/link"
import Icon from "../ui/Icon"

function DesktopMenu() {
    return (
        <div className="hidden sm:flex items-center gap-5">
            <button className="flex items-center gap-2 px-4 py-2.5 btn-base">
                <Icon name="login" className="rotate-180"/>
                <Link href="/user-panel">
                    <span className="text-sm relative bottom-0.5">ورود | ثبت‌نام</span>
                </Link>
            </button>

            <Link href="/shopping-cart">
                <button className="relative">
                    <div className="p-2 btn-base bg-gray-900">
                        <Icon name="cart" className="text-white"/>
                    </div>
                    <span className="absolute -right-2 -top-1 bg-blue-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow">
                        0
                    </span>
                </button>
            </Link>
        </div>
    )
}

export default DesktopMenu
