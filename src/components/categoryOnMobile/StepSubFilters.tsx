function StepSubFilters({ selectedFilter }: {
    selectedFilter: {
        id: number;
        label: string;
        subFilter: {
            id: number;
            label: string | number;
        }[];
    } | undefined
}) {
    return (
        <div className="step-menu">
            <div className="flex items-start flex-col gap-8 pt-4">
                {selectedFilter?.subFilter?.map(sub => (
                    <button key={sub.id} className="cursor-pointer">
                        {sub.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default StepSubFilters
