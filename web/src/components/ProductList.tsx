import { ProductCard } from "./ProductCard";

type ProductListType = {
  products: any;
};

export function ProductList({ products }: ProductListType) {
  return (
    <div className="flex justify-center w-full">
      {products.length > 0 ? (
        <div className="grid grid-cols-5 gap-y-5 w-full place-items-center">
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
