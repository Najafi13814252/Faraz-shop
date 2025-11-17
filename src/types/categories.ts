type Categories = {
    id: number
    name: string
    icon: string
    iconColor: string
    subCategory: {
        id: number
        name: string
        icon: string
    }[]
}