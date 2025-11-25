type Categories = {
    id: number
    name: string
    icon: string
    iconColor: string
    filterBorder: string
    filterBg: string
    hoverColor: string
    category: string
    categoryFilters: {
        id: number
        label: string
        subFilter: {
            id: number
            label: string | number
        }[]
    }[]
}
