import { useEffect, useState } from "react";

export const ProductDetail = () => {
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
    <main>
      <div className="flex flex-row gap-10">
        <div>
          <img
            className="rounded"
            src={products.image}
            alt={products.alt}
          />
        </div>
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-3xl font-semibold">{products.title}</h1>
          <p className="text-lg">{products.description}</p>
          <p className="text-lg">Rp. {products.price}</p>
          <div className="flex flex-row gap-3">
            <button
              type="button"
              className="p-1 bg-backgroundsecondary text-yellow-400 rounded"
            >
              Best Seller
            </button>
            <button
              type="button"
              className="p-1 bg-backgroundsecondary text-green-400 rounded"
            >
              In Stock
            </button>
            <button
              type="button"
              className="p-1 bg-backgroundsecondary text-blue-400 rounded"
            >
              5 MB
            </button>
          </div>
          <button
            type="button"
            className="p-1 bg-secondary text-white rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};
