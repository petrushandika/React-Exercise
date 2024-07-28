import Book from "../../assets/book.png";

export const ProductDetail = () => {
  return (
    <main>
      <div className="flex flex-row gap-10">
        <div>
          <img
            className="rounded"
            src={Book}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-3xl font-semibold">
            Sebuah Seni Untuk Bersikap Bodo Amat
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quasi
            pariatur fuga accusamus, quisquam ducimus nisi quos hic ipsa, sunt
            quae labore sapiente distinctio saepe sint animi. Veritatis, fugiat
            sunt?
          </p>
          <p className="text-lg">Rp. 0</p>
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
