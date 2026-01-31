import Icon from "../ui/Icon"

function SearchBox() {
    return (
        <div className="w-full md:w-80 hidden sm:block">
            <form className="flex items-center gap-2 flex-1 p-1 border border-gray-300 bg-gray-50 rounded-full">
                <div className="bg-gray-900 p-2 rounded-full">
                    <Icon name="search" className="text-white"/>
                </div>
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
