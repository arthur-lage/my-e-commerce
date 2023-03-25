import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { useState, useEffect } from "react";
import { IProduct } from "../interfaces/IProduct";
import { Loading } from "../components/Loading";
import { Header } from "../components/Header";

export function ProductPage() {
  const [product, setProduct] = useState<null | IProduct>(null);
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const res = await api.get("/products/" + productId);

        setProduct(res.data.product);
      } catch (err) {
        alert("erro");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);

  return (
    <>
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <>
          {product ? (
            <div>
              <div>Id: {product._id}</div>
              <div>Name: {product.name}</div>
              <div>${product.price}</div>
              <button>Buy</button>
              <button>Add to Cart</button>
            </div>
          ) : (
            <h2>Could not find product.</h2>
          )}
        </>
      )}
    </>
  );
}
