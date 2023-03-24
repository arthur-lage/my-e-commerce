import { Link } from "react-router-dom";
import { numberToCurrency } from "../utils/number-to-currency";

export function ProductCard({ product }: any) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="hover:scale-105 border-[1px] border-zinc-400 py-2 shadow-md w-56 flex flex-col items-center hover:bg-zinc-100 duration-150 rounded-md transition-all"
    >
      <img src={product.image} alt={product.name} className="w-48 rounded-md" />
      <div className="flex mt-4 flex-col gap-2">
        <span className="text-lg">{product.name}</span>
        <span className="text-center font-bold text-zinc-900">
          {numberToCurrency(product.price)}
        </span>
      </div>
    </Link>
  );
}
