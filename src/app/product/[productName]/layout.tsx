import Gallery from "@/components/product/Gallery"


function ProductLayout({children}:{
  children: React.ReactNode
}) {
  return (
    <div className="sm:mx-10 my-5">
      <div className="w-full flex gap-4">
        {/* مشخصات و گالری محصول */}
        <div className="w-3/4 flex gap-4">
          <div className="bg-gray-100">
            <Gallery />
          </div>

          {children}
        </div>

        {/* باکس خرید */}
        <div className="bg-blue-400 w-1/4">bbb</div>
      </div>
    </div>
  )
}

export default ProductLayout
