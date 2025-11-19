const filterProducts:Filters[] = [
    // Mobile
    {
        id: 1,
        category: 'mobile',
        filters: [
            // by brand
            {
                id: 1,
                label: 'برند',
                subFilter: [
                    { id: 1, label: 'گوشی سامسونگ' },
                    { id: 2, label: 'گوشی اپل' },
                    { id: 3, label: 'گوشی شیائومی' }
                ]
            },
            // by category
            {
                id: 2,
                label: 'رده‌بندی',
                subFilter: [
                    { id: 1, label: 'پرچم دار' },
                    { id: 2, label: 'میان رده' },
                    { id: 3, label: 'اقتصادی' }
                ]
            },
            // by memory
            {
                id: 3,
                label: 'حافظه',
                subFilter: [
                    { id: 1, label: 512 },
                    { id: 2, label: 256 },
                    { id: 3, label: 128 },
                    { id: 4, label: 64 }
                ]
            },
        ]
    },
    // Laptop
    {
        id: 1,
        category: 'laptop',
        filters: [
            // by brand
            {
                id: 1,
                label: 'برند',
                subFilter: [
                    { id: 1, label: ' لپ‌تاپ اپل(مک‌ بوک)' },
                    { id: 2, label: 'لپ‌تاپ ایسوس' },
                    { id: 3, label: 'لپ‌تاپ لنوو' },
                    { id: 4, label: 'لپ‌تاپ ایسر' },
                    { id: 5, label: 'لپ‌تاپ اچ پی' }
                ]
            },
            // by usage
            {
                id: 2,
                label: 'کاربرد',
                subFilter: [
                    { id: 1, label: 'لپ‌تاپ گیمینگ' },
                    { id: 2, label: 'لپ‌تاپ دانشجویی' },
                    { id: 3, label: 'لپ‌تاپ لمسی' },
                    { id: 4, label: 'لپ‌تاپ صنعتی' }
                ]
            },
            // by processor
            {
                id: 3,
                label: 'پردازنده',
                subFilter: [
                    { id: 1, label: "corei3" },
                    { id: 2, label: 'corei5' },
                    { id: 3, label: 'corei7' },
                    { id: 4, label: 'corei9' }
                ]
            },
        ]
    },
]

export default filterProducts