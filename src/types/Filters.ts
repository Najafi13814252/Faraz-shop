type Filters = {
    id: number
    category: string
    filters: {
        id: number
        label: string
        subFilter: {
            id: number
            label: string | number
        }[]
    }[]
}