import { Icon } from "@iconify/react"

function StepCategories({categories, onStepCategories}: {
    categories: Categories[],
    onStepCategories: (id: number) => void
}) {
    return (
        <div className="step-menu">
            <div className="flex flex-col gap-8 pt-4">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className="flex gap-2 relative cursor-pointer"
                        onClick={() => onStepCategories(category.id)}
                    >
                        <Icon className={`text-2xl ${category.iconColor}`} icon={category.icon} />
                        <span>{category.name}</span>
                        <Icon className="absolute left-0" icon="solar:alt-arrow-left-outline" />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default StepCategories
