import BuyCard from "@/components/product/hero/BuyCard"
import Gallery from "@/components/product/hero/Gallery"
import ProductInfo from "@/components/product/hero/ProductInfo"
import { ProductIntroduction } from "@/components/product/ProductIntroduction"
import { SpecsTable } from "@/components/product/SpecsTable"
import { productContent } from "@/data/product-content"
import { productSpecs } from "@/data/product-specs"

function Product() {
  return (
    <div className="sm:mx-10 my-5">
      <div className="w-full flex gap-4">
        {/* Hero */}
        <div className="w-3/4 flex flex-col gap-10">
          <div className="flex">
            <Gallery />
            <ProductInfo />
          </div>
          <div className="flex flex-col gap-10">
            <ProductIntroduction sections={productContent.sections} />
            <SpecsTable specs={productSpecs} />
          </div>
        </div>


        <div className="w-1/4 h-fit p-4 bg-gray-50 border border-gray-200 rounded-2xl sticky top-20">
          <BuyCard />
        </div>
      </div>
    </div>
  )
}

export default Product
