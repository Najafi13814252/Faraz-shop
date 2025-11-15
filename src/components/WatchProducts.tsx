import products from "@/data/products";
import Card from "./Card";
import SectionProducts from "./SectionProducts";

export default function MobileProducts() {
  return (
    <SectionProducts title="ساعت‌ها در فراز شاپ">
        <Card products={products.filter(card => card.category === "watch")}/>
    </SectionProducts>
  )
}
