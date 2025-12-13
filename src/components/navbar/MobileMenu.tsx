import { Icon } from "@iconify/react"

function MobileMenu() {
    return (
        <div className="flex sm:hidden items-center gap-3">
            <button className="p-2 btn-base">
                <Icon className="text-xl text-gray-700" icon="solar:magnifer-outline" />
            </button>

            <button className="p-2 btn-base">
                <Icon className="text-xl text-sky-500" icon="solar:phone-calling-rounded-outline" />
            </button>
        </div>
    )
}

export default MobileMenu
