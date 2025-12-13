import { Step } from "@/components/CategoriesOnMobile"

interface Category {
    id: number
    name: string
}

interface Filter {
    id: number
    label: string
}

export function useBreadcrumbMenu(
    step: Step,
    selectedCategory: Category | undefined,
    selectedFilter: Filter | undefined
) {
    const crumbs = []

    switch (step) {
        case "categories":
            crumbs.push({ label: 'دسته‌بندی', step: 'categories' })
            break

        case "filters":
            crumbs.push({ label: 'دسته‌بندی', step: 'categories' })
            if (selectedCategory) {
                crumbs.push({ label: selectedCategory.name, step: "filters" })
            }
            break

        case "subFilters":
            crumbs.push({ label: "دسته‌بندی", step: "categories" })
            if (selectedCategory) {
                crumbs.push({ label: selectedCategory.name, step: "filters" })
            }
            if (selectedFilter) {
                crumbs.push({ label: selectedFilter.label, step: "subFilters" })
            }
            break
    }
    return crumbs
}