import products from "@/data/products"
import Card from "./Card";
import SectionProducts from "./SectionProducts";

export default function DiscountProducts() {
    return (
        <SectionProducts discountBox={true} title="فروش ویژه">
            <Card products={products.filter(card => card.off !== 0)}/>
        </SectionProducts>
    )
}
