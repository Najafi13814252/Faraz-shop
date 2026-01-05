type Categories = {
    id: number
    name: string
    icon: string
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
