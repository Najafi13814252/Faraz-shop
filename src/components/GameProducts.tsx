import products from "@/data/products";
import Card from "./Card";
import SectionProducts from "./SectionProducts";

export default function GameProducts() {
    return (
        <SectionProducts title="کنسول‌های بازی در فراز شاپ">
            <Card products={products.filter(card => card.category === "game")} />
        </SectionProducts>
    )
}
