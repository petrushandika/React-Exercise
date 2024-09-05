import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { Rating } from "../components";

export const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useTitle(product.name);

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`http://localhost:8000/products/${id}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchProduct();
  }, [id]);

  return (
    <main>
      <div className="flex flex-row gap-10">
        <div>
          <img
            className="rounded"
            src={product.image}
            alt={product.alt}
          />
        </div>
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="text-lg">{product.description}</p>
          <Rating rating={product.rating} />
          <p className="text-lg">Rp. {product.price}</p>
          <div className="flex flex-row gap-3">
            {product.bestSeller && (
              <span className="p-1 bg-backgroundsecondary text-yellow-400 rounded">
                Best Seller
              </span>
            )}
            {product.inStock && (
              <span className="p-1 bg-backgroundsecondary text-green-400 rounded">
                In Stock
              </span>
            )}
            {!product.inStock && (
              <span className="p-1 bg-backgroundsecondary text-red-400 rounded">
                Out Of Stock
              </span>
            )}
            <span className="p-1 bg-backgroundsecondary text-blue-400 rounded">
              {product.size} MB
            </span>
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
