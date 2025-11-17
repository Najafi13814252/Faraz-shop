import Image from "next/image"
import Link from "next/link"

export default function CategoriesByShape() {

    type CategoryShape = {
        id: number
        img: string
        title: string
        route: string
    }

    const categories: CategoryShape[] = [
        { id: 1, img: '/images/mobile.webp', title: 'موبایل', route: '/product-category/mobile' },
        { id: 2, img: '/images/laptop.webp', title: 'لپ تاپ', route: '/' },
        { id: 3, img: '/images/watch.webp', title: 'ساعت هوشمند', route: '/' },
        { id: 4, img: '/images/tablet.webp', title: 'تبلت', route: '/' },
        { id: 5, img: '/images/airpod.webp', title: 'هندزفری و ایرپاد', route: '/' },
        { id: 6, img: '/images/game.webp', title: 'کنسول بازی', route: '/' }
    ]

    return (
        <>
            <div className="flex flex-col gap-12 mt-10">
                <h2 className="mx-auto text-2xl font-medium">دسته‌بندی کالاها در فراز شاپ</h2>
                <div className="flex justify-between items-centers">
                    {categories.map(category => (
                        <Link href={category.route} className="flex flex-col items-center gap-4 cursor-pointer" key={category.id}>
                            <Image className="bg-sky-50 p-2 outline-[3px] outline-offset-[3px] outline-sky-600 rounded-full hover:scale-110 hover:outline-[3.5px] duration-200" src={category.img} width="130" height="130" alt="CategoryByShape" />
                            <span className="text-lg font-medium">{category.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
