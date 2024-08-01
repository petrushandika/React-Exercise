import { Routes, Route } from "react-router-dom";
import { HomePage, ProductList } from "../pages";
import { ProductDetail } from "../pages/Products/ProductDetail";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/products"
          element={<ProductList />}
        />
        <Route
          path="product/detail/:id"
          element={<ProductDetail />}
        />
      </Routes>
    </div>
  );
};
