import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { removeFromCart, addToCart, cartList } = useCart();
  const { id, image, name, price } = product;
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = cartList.find((cartItem) => cartItem.id === id);
    setIsInCart(!!productIsInCart);
  }, [cartList, id]);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
      <Link to={`/product/${id}`}>
        <img
          className="h-80 w-full rounded-t-lg object-cover"
          src={image}
          alt={name}
        />
      </Link>
      <div className="p-5">
        <Link to={`/product/${id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
            {name}
          </h5>
        </Link>
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-semibold text-gray-900 ">
            Rp. {price}
          </span>
          {isInCart ? (
            <button
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              onClick={() => removeFromCart(product)}
            >
              Remove
            </button>
          ) : (
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
