import Image from "next/image"

export default function CategoriesByShape() {

    type CategoryShape = {
        id: number
        img: string
        title: string
    }

    const categories: CategoryShape[] = [
        { id: 1, img: '/images/mobile.webp', title: 'موبایل' },
        { id: 2, img: '/images/laptop.webp', title: 'لپ تاپ' },
        { id: 3, img: '/images/watch.webp', title: 'ساعت هوشمند' },
        { id: 4, img: '/images/airpod.webp', title: 'هندزفری و ایرپاد' },
        { id: 5, img: '/images/game.webp', title: 'کنسول بازی' }
    ]

    return (
        <>
            <div className="flex flex-col gap-12 mt-10">
                <h2 className="mx-auto text-2xl font-medium">دسته‌بندی کالاها در فراز شاپ</h2>
                <div className="flex justify-between items-centers">
                    {categories.map(category => (
                        <button className="flex flex-col items-center gap-4 cursor-pointer" key={category.id}>
                            <Image className="bg-sky-50 p-2 outline-[3px] outline-offset-[3px] outline-sky-600 rounded-full hover:scale-110 hover:outline-[3.5px] duration-200" src={category.img} width="130" height="130" alt="CategoryByShape" />
                            <span className="text-lg font-medium">{category.title}</span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}
