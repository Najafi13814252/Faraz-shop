import Card from "@/components/Card";
import products from "@/data/products";
import { Icon } from "@iconify/react";

type Props = {
  searchParams: { sort?: string };
}

export default function CategoryProducts({ searchParams }: Props) {

  const sort = searchParams?.sort || 'default';
  let sortedProducts = [...products]

  switch (sort) {
    case "highPrice": sortedProducts.sort((a, b) => b.price - a.price); break;
    case "lowPrice": sortedProducts.sort((a, b) => a.price - b.price); break;
    case "discount": sortedProducts.sort((a, b) => b.off - a.off); break;
  }

  return (
    <div>
      <div className="grid grid-cols-4">
        {sortedProducts.map(product => (
          <div key={product.id} className="hover:scale-105 duration-200">
            <Card product={product} hCard={true}>
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
