// data/iphone-17-content.ts

import { ProductContent } from "@/types/productContent"

export const productContent: ProductContent = {
  sections: [
    {
      type: "heading",
      level: 2,
      bold: true,
      content: "معرفی گوشی آیفون 17"
    },
    {
      type: "text",
      content:
        "آیفون 17 نسل جدید گوشی‌های اپل است که با تمرکز بر عملکرد، طراحی باریک‌تر و هوش مصنوعی پیشرفته معرفی شده است."
    },
    {
      type: "image",
      src: "/images/slideBanner-2.webp",
      alt: "نمای کلی آیفون 17"
    },
    {
      type: "heading",
      level: 3,
      bold: true,
      content: "طراحی و کیفیت ساخت"
    },
    {
      type: "text",
      content:
        "در آیفون 17 از فریم آلومینیومی تقویت‌شده و شیشه مقاوم‌تر استفاده شده که هم وزن دستگاه را کاهش داده و هم مقاومت آن را افزایش می‌دهد."
    },
    {
      type: "image",
      src: "/images/slideBanner-2.webp",
      alt: "طراحی بدنه آیفون 17"
    },
    {
      type: "heading",
      level: 3,
      content: "ویژگی‌های کلیدی"
    },
    {
      type: "text",
      content:
        "• پردازنده A19 با مصرف انرژی کمتر\n• نمایشگر OLED با نرخ نوسازی 120 هرتز\n• دوربین بهبودیافته برای عکاسی در شب\n• باتری با عمر بیشتر نسبت به نسل قبل"
    }
  ]
}
