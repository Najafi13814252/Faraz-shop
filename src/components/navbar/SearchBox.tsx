import { Icon } from "@iconify/react"

function SearchBox() {
    return (
        <div className="w-full sm:w-[20rem] md:w-[30rem] lg:w-[35rem] hidden sm:block">
            <form className="flex items-center gap-2 flex-1 px-3 py-2 bg-gray-100 rounded-lg">
                <Icon className="text-xl text-gray-500" icon="solar:magnifer-outline" />
                <input
                    type="text"
                    className="w-full bg-transparent focus:outline-none placeholder:text-sm"
                    placeholder="جستجو..."
                />
            </form>
        </div>
    )
}

export default SearchBox
