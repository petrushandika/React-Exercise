import Book from "../../../assets/book.png";
import { ProductCard } from "../../../components/Elements/ProductCard";

export const TopProduct = () => {
  return (
    <div className="flex flex-col gap-16 pt-10">
      <h3 className="text-center font-semibold text-4xl">Top Trending Books</h3>
      <div className="flex flex-row gap-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex flex-row gap-16 items-center">
        <div className="grid grid-cols-2 gap-10">
          <img
            src={Book}
            alt=""
            className="w-48 rounded"
          />
          <img
            src={Book}
            alt=""
            className="w-48 rounded"
          />
          <img
            src={Book}
            alt=""
            className="w-48 rounded"
          />
          <img
            src={Book}
            alt=""
            className="w-48 rounded"
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
          <button className="flex items-center justify-center border-2 border-secondary rounded text-secondary text-sm p-2 font-medium w-2/12">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
