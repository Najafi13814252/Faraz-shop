import CommentsBox from "@/components/product/comments/CommentsBox"
import BuyCard from "@/components/product/hero/BuyCard"
import Gallery from "@/components/product/hero/Gallery"
import ProductInfo from "@/components/product/hero/ProductInfo"
import { ProductIntroduction } from "@/components/product/ProductIntroduction"
import QuetionsBox from "@/components/product/questions/QuetionsBox"
import { SpecsTable } from "@/components/product/SpecsTable"
import { productContent } from "@/data/product-content"
import { productSpecs } from "@/data/product-specs"

function Product() {
  return (
    <>
      <div className="mx-4 md:mx-10 my-5">
        <div className="w-full flex flex-col md:flex-row items-start gap-4">
          {/* Hero */}
          <div className="w-full md:w-3/4 flex flex-col gap-10">
            <div className="flex flex-col md:flex-row">
              <Gallery />
              <ProductInfo />
            </div>
            <div className="flex flex-col gap-10 bg-white z-20">
              <div className="md:hidden w-full md:w-1/4 h-fit p-4 bg-gray-50 border border-gray-200 rounded-2xl">
                <BuyCard />
              </div>
              <ProductIntroduction sections={productContent.sections} />
              <SpecsTable specs={productSpecs} />
              <CommentsBox />
              <QuetionsBox />
            </div>
          </div>

          <div className="hidden md:block w-full md:w-1/4 h-fit p-4 bg-gray-50 border border-gray-200 rounded-2xl sticky top-20">
            <BuyCard />
          </div>
        </div>
      </div>

      <div className="w-full md:hidden fixed bottom-[3.55rem]">
        <section className="bg-white flex flex-row-reverse justify-between items-center gap-4 px-4 py-4 border border-gray-300">
          <div className="flex items-center justify-end">
            {/* تعداد */}
            {/* <div>0</div> */}
            {/* قیمت */}
            <div className="flex flex-col items-end gap-2">
              {/* تخفیف */}
              <div className="flex items-center gap-2 ">
                <span className="line-through text-gray-400">{(213000000).toLocaleString("fa-IR")}</span>
                <span className="bg-rose-500 text-white px-2 rounded-2xl">{(10).toLocaleString("fa-IR")}%</span>
              </div>
              {/* قیمت با احتساب تخفیف */}
              <span className="text-2xl font-semibold text-gray-700">{(191700000).toLocaleString("fa-IR")} <span className="text-sm text-gray-600 font-normal">تومان</span></span>
            </div>
          </div>
          <button className="bg-sky-500 text-white font-medium rounded-md px-4 py-3.5 cursor-pointer">افزودن به سبد خرید</button>
        </section>
      </div>
    </>
  )
}

export default Product
