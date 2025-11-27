import Image from "next/image"
import Link from "next/link"

export default function CategoriesByShape() {

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

    return (
        <>
            <div className="flex flex-col gap-6 md:gap-12 mt-10">
                <h2 className="mx-auto text-base md:text-2xl font-medium">دسته‌بندی کالاها در فراز شاپ</h2>
                <div className="flex items-center justify-between p-2 md:p-0 gap-12 overflow-x-scroll overflow-y-hidden md:overflow-visible">
                    {categories.map(category => (
                        <Link href={`/product-category/${category.categoryName}`} className="flex flex-col flex-shrink-0 items-center gap-4 cursor-pointer" key={category.id}>
                            <Image className="bg-sky-50 p-2 outline-[3px] outline-offset-[3px] outline-sky-600 rounded-full hover:scale-110 hover:outline-[3.5px] duration-200 w-20 h-20 md:w-32 md:h-32" src={category.img} width="128" height="128" alt="CategoryByShape" />
                            <span className="text-xs md:text-base font-medium">{category.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
