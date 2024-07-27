import Book from "../../assets/book.png";

export const ProductCard = () => {
  return (
    <div className="flex flex-row gap-5">
      <div className="flex flex-row items-center">
        <img
          src={Book}
          alt=""
          className="w-40 rounded"
        />
        <div className="flex flex-col justify-center h-5/6">
          <div className="flex flex-col gap-2 justify-center px-5 py-10 w-full h-full rounded bg-backgroundsecondary">
            <h3 className="font-medium">
              Sebuah Seni Untuk <br />
              Bersikap Bodoamat
            </h3>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-sm">Rp. 0</p>
            <button
              type="button"
              className="text-white bg-secondary w-full rounded py-3 text-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
