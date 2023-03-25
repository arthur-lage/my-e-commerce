import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductPage />} />
      </Routes>
    </>
  );
}
