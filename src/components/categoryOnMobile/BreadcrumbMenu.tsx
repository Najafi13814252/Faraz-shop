import { Icon } from "@iconify/react"

function BreadcrumbMenu({breadcrumb, onRoot, dispatch}: {
    breadcrumb: {label: string, step: string}[],
    onRoot: () => void,
    dispatch: (action: {type: string}) => void
}) {
    return (
        <div className="text-sm flex items-center gap-1 pb-2 border-b border-b-gray-300 z-10">
            <div className="flex items-center gap-1" onClick={onRoot}>
                منو
                <Icon icon="solar:alt-arrow-left-outline" />
            </div>
            {breadcrumb.map((item, index) => (
                <span key={index} className="flex items-center gap-1 text-sm cursor-pointer" onClick={() => dispatch({ type: item.step })}>
                    {item.label}
                    {index < breadcrumb.length - 1 && <Icon icon="solar:alt-arrow-left-outline" />}
                </span>
            ))}
        </div>
    )
}

export default BreadcrumbMenu
