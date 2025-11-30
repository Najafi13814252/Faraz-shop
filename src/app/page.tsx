import Navbar from "@/components/Navbar";
import CategoriesByShape from "@/components/CategoriesByShape";
import DiscountProducts from "@/components/DiscountProducts";
import WatchProducts from "@/components/WatchProducts";
import Sliders from "@/components/Sliders";
import Image from "next/image";
import GameProducts from "@/components/GameProducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Sliders />
      <div className="px-2 md:px-16 flex flex-col gap-10">
        <CategoriesByShape />
        <DiscountProducts />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Image className="aspect-auto rounded-2xl" src="/images/banner_1.webp" width="685" height="200" alt="Banner" />
          <Image className="aspect-auto rounded-2xl" src="/images/banner_2.webp" width="685" height="200" alt="Banner" />
        </div>
        <WatchProducts />
        <Image className="aspect-auto rounded-2xl" src="/images/banner_3.webp" width="2048" height="377" alt="Banner" />
        <GameProducts />
      </div>
    </>
  )
}
