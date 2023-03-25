import { IProduct } from "../interfaces/IProduct";
import { ProductCard } from "./ProductCard";

type ProductListType = {
  products: IProduct[];
};

export function ProductList({ products }: ProductListType) {
  return (
    <div className="flex justify-center w-full">
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 w-full place-items-center">
          {products.map((product: any) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <h2>Could not find products.</h2>
      )}
    </div>
  );
}
