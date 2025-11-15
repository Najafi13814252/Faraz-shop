import Categories from "@/components/Categories";
import CategoriesByShape from "@/components/CategoriesByShape";
import DiscountProducts from "@/components/DiscountProducts";
import WatchProducts from "@/components/WatchProducts";
import Sliders from "@/components/Sliders";
import Image from "next/image";
import GameProducts from "@/components/GameProducts";

export default function Home() {
  return (
    <>
      <Categories />
      <Sliders />
      <div className="px-16 flex flex-col gap-10">
        <CategoriesByShape />
        <DiscountProducts />
        <div className="flex items-center gap-6">
          <Image className="aspect-auto rounded-2xl" src="/images/banner_1.webp" width="2048" height="653" alt="Banner" />
          <Image className="aspect-auto rounded-2xl" src="/images/banner_2.webp" width="2048" height="653" alt="Banner" />
        </div>
        <WatchProducts />
        <Image className="w-full aspect-auto rounded-2xl" src="/images/banner_3.webp" width="2048" height="377" alt="Banner" />
        <GameProducts />
      </div>
    </>
  )
}
