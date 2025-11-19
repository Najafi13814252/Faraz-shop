import Card from "@/components/Card";
import products from "@/data/products";
import { Icon } from "@iconify/react";

export default function Mobile() {
  return (
    <div>
      <div className="grid grid-cols-4">
        {products.map(product => (
          <div key={product.id} className="hover:scale-105 duration-200">
            <Card product={product} hCard={true}>
              <div className="flex items-center gap-1 text-sm w-full justify-end">
                <span>{product.rate.toLocaleString("fa-IR")}</span>
                <Icon className="text-yellow-500" icon="solar:star-bold"/>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
