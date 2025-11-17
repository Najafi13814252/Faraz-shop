const categories: Categories[] = [
    {
        id: 1,
        name: 'موبایل',
        icon: 'solar:iphone-outline',
        iconColor: 'text-purple-500',
        subCategory: [
            { id: 1, name: 'اپل', icon: 'simple-icons:apple' },
            { id: 2, name: 'سامسونگ', icon: 'simple-icons:samsung' },
            { id: 3, name: 'شیائومی', icon: 'simple-icons:xiaomi' },
            { id: 4, name: 'هواوی', icon: 'simple-icons:huawei' },
            { id: 5, name: 'شیائومی', icon: 'simple-icons:xiaomi' }
        ]
    },
    {
        id: 2,
        name: 'تبلت',
        icon: 'solar:tablet-outline',
        iconColor: 'text-yellow-500',
        subCategory: [
            { id: 1, name: 'اپل', icon: 'simple-icons:apple' },
            { id: 2, name: 'سامسونگ', icon: 'simple-icons:samsung' }
        ]
    },
    {
        id: 3,
        name: 'لپ‌تاپ',
        icon: 'solar:laptop-outline',
        iconColor: 'text-sky-500',
        subCategory: [
            { id: 1, name: 'مک بوک', icon: 'simple-icons:apple' },
            { id: 2, name: 'لنوو', icon: 'simple-icons:lenovo' },
            { id: 3, name: 'ایسوس', icon: 'simple-icons:asus' },
            { id: 4, name: 'اچ پی', icon: 'simple-icons:hp' },
            { id: 5, name: 'دل', icon: 'simple-icons:dell' },
            { id: 6, name: 'ایسر', icon: 'simple-icons:acer' }
        ]
    },
    {
        id: 4,
        name: 'ساعت و بند هوشمند',
        icon: 'solar:watch-square-outline',
        iconColor: 'text-green-500',
        subCategory: [
            { id: 1, name: 'اپل', icon: 'simple-icons:apple' },
            { id: 2, name: 'سامسونگ', icon: 'simple-icons:samsung' },
            { id: 3, name: 'شیائومی', icon: 'simple-icons:xiaomi' },
        ]
    },
    {
        id: 5,
        name: 'هدفون بی‌سیم',
        icon: 'solar:airbuds-outline',
        iconColor: 'text-orange-500',
        subCategory: [
            { id: 1, name: 'اپل', icon: 'simple-icons:apple' },
            { id: 2, name: 'سامسونگ', icon: 'simple-icons:samsung' },
            { id: 3, name: 'شیائومی', icon: 'simple-icons:xiaomi' },
        ]
    },
    {
        id: 6,
        name: 'گیمینگ',
        icon: 'solar:gamepad-outline',
        iconColor: 'text-rose-500',
        subCategory: [
            { id: 1, name: 'پلی استیشن', icon: 'simple-icons:playstation' },
            { id: 2, name: 'ایکس باکس', icon: 'simple-icons:xbox' },

        ]
    }
]

export default categories