import { ProductCard } from "../../components/Elements/ProductCard";
import { FilterBar } from "./components/FilterBar";

export const ProductList = () => {
  return (
    <main className="flex flex-col gap-5">
      <h1 className="text-xl font-semibold">Books</h1>
      <FilterBar />
      <div>
        <div className="grid grid-cols-3 gap-10">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </main>
  );
};
