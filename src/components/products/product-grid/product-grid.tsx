import { Product } from "@/interfaces";
import { ProductGridItem } from "./product-grid-item";

interface Props {
  products: Product[];
}

export const ProductGrid: React.FC<Props> = ({ products }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_minmax(min(200px,100%),_1fr))] place-items-center sm:place-items-start gap-8">
    {
      products.map((product) => (
        <ProductGridItem key={product.slug} product={product} />
        // <span key={product.slug}>{product.title}</span>
      ))
    }
  </section>
  );
}
