function ProductLayout({ children, gallery, buyCard }: {
  children: React.ReactNode
  gallery: React.ReactNode
  buyCard: React.ReactNode
}) {
  return (
    <div className="sm:mx-10 my-5">
      <div className="w-full flex gap-4">
        {/* مشخصات و گالری محصول */}
        <div className="w-3/4 flex gap-4">
          <div className="">
            {gallery}
          </div>

          {children}
        </div>

        {/* باکس خرید */}
        <div className="w-1/4 h-fit p-4 bg-gray-50 border border-gray-200 rounded-2xl sticky top-20">
          {buyCard}
        </div>
      </div>
    </div>
  )
}

export default ProductLayout
