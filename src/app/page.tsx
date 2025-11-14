import Categories from "@/components/Categories";
import CategoriesByShape from "@/components/CategoriesByShape";
import DiscountProducts from "@/components/DiscountProducts";
import Sliders from "@/components/Sliders";

export default function Home() {
  return (
    <>
      <Categories />
      <Sliders />
      <div className="mx-28 flex flex-col gap-10">
        <CategoriesByShape />
        <DiscountProducts />
      </div>
    </>
  )
}
