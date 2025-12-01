import Card from "@/components/Card";
import products from "@/data/products";
import { Icon } from "@iconify/react";

type Props = {
  searchParams?: { sort?: string }
}

export default function CategoryProducts({ searchParams }: Props) {

  const {sort = "default"} = searchParams || {}
  const sortedProducts = [...products]

  switch (sort) {
    case "highPrice": sortedProducts.sort((a, b) => b.price - a.price); break;
    case "lowPrice": sortedProducts.sort((a, b) => a.price - b.price); break;
    case "discount": sortedProducts.sort((a, b) => b.off - a.off); break;
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedProducts.map(product => (
          <div key={product.id} className="hover:scale-105 duration-200">
            <Card product={product} hCard={true} onCategory={true}>
              <div className="flex items-center gap-1 text-sm w-full justify-end">
                <span>{product.rate.toLocaleString("fa-IR")}</span>
                <Icon className="text-yellow-500" icon="solar:star-bold" />
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
