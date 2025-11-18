import products from "@/data/products"
import SwiperSlider from "./SwiperSlider"

export default function DiscountProducts() {
    const discountedProducts = products.filter(p => p.off !== 0)
    return (
        <SwiperSlider products={discountedProducts} discountBox={true} title="فروش ویژه"/>
    )
}
