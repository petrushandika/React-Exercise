import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { id, image, name, price } = product;

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
      <Link to={`/product/${id}`}>
        <img
          class="h-80 w-full rounded-t-lg object-cover"
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
          <span className="text-2xl font-semibold text-gray-900 ">Rp. {price}</span>
          <Link
            to={`/product/${id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}
