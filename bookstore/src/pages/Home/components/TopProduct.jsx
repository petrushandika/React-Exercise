import { useEffect, useState } from "react";
import Book from "../../../assets/book.png";
import { ProductCard } from "../../../components/Elements/ProductCard";
import { Button } from "../../../components/Elements/Button";

export const TopProduct = () => {
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
    <div className="flex flex-col gap-16 pt-10">
      <h3 className="text-center font-semibold text-4xl">Top Trending Books</h3>
      <div className="flex flex-row gap-10">
        {products.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            alt={product.title}
            title={product.title}
            description={product.description}
            price={product.price}
            className={"rounded"}
          />
        ))}
      </div>
      <div className="flex flex-row gap-16 items-center">
        <div className="grid grid-cols-2 gap-10">
          <img
            className="w-48 rounded"
            src={Book}
            alt="Book"
          />
          <img
            className="w-48 rounded"
            src={Book}
            alt="Book"
          />
          <img
            className="w-48 rounded"
            src={Book}
            alt="Book"
          />
          <img
            className="w-48 rounded"
            src={Book}
            alt="Book"
          />
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-semibold text-5xl">
            Find Your <br />
            Favourite Books <br />
            Here
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cursus nullam vestibulum et
            ornare quisque. Odio vivamus tortor quis nunc.
          </p>
          <div className="flex flex-row gap-3">
            <div>
              <h3 className="text-4xl">80</h3>
              <p>Books Best Seller</p>
            </div>
            <div>
              <h3 className="text-4xl">60</h3>
              <p>Books For Coming</p>
            </div>
            <div>
              <h3 className="text-4xl">150</h3>
              <p>Books Top Product</p>
            </div>
          </div>
          <Button
            text="Learn More"
            className="flex items-center justify-center border-2 border-secondary rounded text-secondary text-sm p-2 font-medium w-2/12"
          />
        </div>
      </div>
    </div>
  );
};
