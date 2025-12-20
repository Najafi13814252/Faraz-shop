import Image from "next/image"
import Link from "next/link"

type CategoryShape = {
    id: number
    img: string
    title: string
    categoryName: string
}

const categories: CategoryShape[] = [
    { id: 1, img: '/images/mobile.webp', title: 'موبایل', categoryName: 'mobile' },
    { id: 2, img: '/images/laptop.webp', title: 'لپ تاپ', categoryName: 'laptop' },
    { id: 3, img: '/images/watch.webp', title: 'ساعت هوشمند', categoryName: 'watch' },
    { id: 4, img: '/images/tablet.webp', title: 'تبلت', categoryName: 'tablet' },
    { id: 5, img: '/images/airpod.webp', title: 'هندزفری و ایرپاد', categoryName: 'airpod' },
    { id: 6, img: '/images/game.webp', title: 'کنسول بازی', categoryName: 'game' }
]

export default function CategoriesByShape() {
    return (
        <>
            <div className="flex flex-col gap-6 md:gap-8 mt-10">
                <h2 className="mx-auto text-base md:text-2xl font-medium">دسته‌بندی کالاها در فراز شاپ</h2>
                <div className="grid grid-cols-3 sm:flex sm:items-center sm:justify-between p-2 md:p-0 gap-6 overflow-x-scroll overflow-y-hidden md:overflow-visible">
                    {categories.map(category => (
                        <Link href={`/product-category/${category.categoryName}`} className="flex flex-col flex-shrink-0 items-center gap-3.5 cursor-pointer shadow-md rounded-3xl p-3 border border-gray-100 hover:scale-110 duration-200" key={category.id}>
                            <Image className="bg-sky-50 outline-[3px] outline-offset-[3px] outline-sky-200 rounded-2xl w-20 h-20 md:w-32 md:h-32" src={category.img} width={128} height={128} alt={category.title} />
                            <span className="text-xs md:text-base font-medium">{category.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
