import products from "@/data/products"
import SwiperSlider from "./SwiperSlider";

export default function DiscountProducts() {
    const watchProducts = products.filter(p => p.category === "watch")
    return (
        <SwiperSlider products={watchProducts} title="ساعت‌ هوشمند"/>
    )
}

