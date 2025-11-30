import SideFilter from '@/components/SideFilter'
import SortingFilter from '@/components/SortingFilter'

type Props = {
    children: React.ReactNode
    params: { category: string }
}

export default function CtegoryProductLayout({ children, params }: Props) {
    return (
        <div className="mx-2 sm:mx-10 my-5">
            <div className="flex flex-col gap-10">
                <div className="w-full flex">
                    {/* side filter */}
                    <SideFilter category={params.category}/>


                    {/* product table */}
                    <div className="w-full sm:w-4/5 flex flex-col gap-2 mr-0 sm:mr-5 mt-2">
                        {/* breadcrumb */}
                        <div className="mr-2 my-2">فراز شاپ / موبایل</div>

                        {/* product filter  */}
                        <SortingFilter category={params.category}/>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
