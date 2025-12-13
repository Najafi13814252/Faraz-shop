import { Icon } from "@iconify/react"

function StepFilters({selectedCategory, onStepFilters}: {
    selectedCategory: Categories | undefined,
    onStepFilters: (id: number) => void
}) {
    return (
        <div className="step-menu">
            <div className="flex flex-col gap-8 pt-4">
                {selectedCategory?.categoryFilters.map(filter => (
                    <button
                        key={filter.id}
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => onStepFilters(filter.id)}
                    >
                        <span>{filter.label}</span>
                        <Icon icon="solar:alt-arrow-left-outline" />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default StepFilters
