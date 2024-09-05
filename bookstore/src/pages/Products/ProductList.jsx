import { useEffect } from "react";
import { ProductCard } from "../../components/Elements/ProductCard";
import { FilterBar } from "./components/FilterBar";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useFilter } from "../../context";

export const ProductList = () => {
  const { products, initialProductList } = useFilter();
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");
  useTitle("Explore eBooks Collection");

  useEffect(() => {
    try {
      async function fetchProducts() {
        const response = await fetch(
          `http://localhost:8000/products?name_like=${
            searchTerm ? searchTerm : ""
          }`
        );
        const data = await response.json();
        initialProductList(data);
      }
      fetchProducts();
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }, []);

  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-2xl font-semibold bg-white text-black dark:bg-primary dark:text-white">
        Books ({products.length})
      </h1>
      <FilterBar />
      <div>
        <div className="grid grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              alt={product.title}
              title={product.title}
              description={product.description}
              price={product.price}
              rating={product.rating}
              className={"rounded"}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
