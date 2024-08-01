import { useEffect, useState } from "react";
import { ProductCard } from "../../components/Elements/ProductCard";
import { FilterBar } from "./components/FilterBar";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-2xl font-semibold">Books ({products.length})</h1>
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
              className={"rounded"}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
