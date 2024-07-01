import { Link } from "react-router-dom";

export default function CartCard({ product }) {
  const { id, image, name, price } = product;

  return (
    <div className="flex flex-row items-center justify-between w-full p-3 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-100">
      <Link to={`/product/${id}`}>
        <img class="h-40 w-60 rounded-lg object-cover" src={image} alt={name} />
      </Link>
      <div>
        <Link to={`/product/${id}`}>
          <h5 className=" text-gray-900">{name}</h5>
        </Link>
      </div>
      <div>
        <span className=" text-gray-900">Rp. {price}</span>
      </div>
      <div>
        <Link
          to={`/product/${id}`}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Remove
        </Link>
      </div>
    </div>
  );
}
