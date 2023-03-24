import { useEffect, useState } from "react";
import { api } from "../services/api";

import { ProductList } from "./ProductList";

export function LatestProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await api.get("/products");
      setProducts(res.data.products);
    }

    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h3 className="ml-4 text-2xl font-medium mb-5">Latest Products</h3>

      <ProductList products={products} />
    </div>
  );
}
