import products from "@/data/products"
import SwiperSlider from "./SwiperSlider";

export default function DiscountProducts() {
    const gameProducts = products.filter(p => p.category === "game")
    return (
        <SwiperSlider products={gameProducts} title="کنسول‌های بازی"/>
    )
}
