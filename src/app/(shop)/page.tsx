import { Title } from "@/components";
import { ProductGrid } from "@/components";
import { Product } from "@/interfaces";
import { initialData } from "@/seed/seed";

const products: Product[] = initialData.products;

export default function ShopPage() {
  return (
    <>
      <Title title="Shop" subtitle="All products" className="mb-2" />
      <ProductGrid products={products} />
    </>
  );
}
