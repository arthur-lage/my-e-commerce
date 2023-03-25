import { useEffect, useState } from "react";
import { api } from "../services/api";

import { ProductList } from "./ProductList";
import { Loading } from "./Loading";

export function LatestProducts() {
  const [products, setProducts] = useState([]);
  const [pageInformation, setPageInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const res = await api.get("/products");
        setProducts(res.data.products);
        setPageInfo({
          currentPage: res.data.currentPage,
          totalPages: res.data.totalPages,
        });
      } catch (err) {
        alert("Erro");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h3 className="ml-4 text-2xl font-medium mb-5">Latest Products</h3>

      {loading ? (
        <div className="mt-8">
          <Loading />
        </div>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}
