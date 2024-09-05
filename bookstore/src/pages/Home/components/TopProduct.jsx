import { useEffect, useState } from "react";
import { ProductCard } from "../../../components";
import { Button } from "../../../components/Elements/Button";
import { useLocation } from "react-router-dom";
import { scrollToElement } from "../../../utils/ScrollToElement";

export const TopProduct = () => {
  const [products, setProducts] = useState([]);
  const { hash } = useLocation();

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (hash) {
      scrollToElement(hash.replace("#", ""));
    }
  }, [hash]);

  return (
    <div
      className="flex flex-col gap-16 pt-10"
      id="product"
    >
      <h3 className="font-semibold text-4xl text-black dark:text-white">
        Top Trending Books
      </h3>
      <div className="flex flex-row gap-10">
        {products.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            alt={product.title}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
            className={"rounded"}
          />
        ))}
      </div>
      <div className="flex flex-row gap-16 items-center">
        <div className="grid grid-cols-2 gap-10 w-1/3">
          <img
            className="w-[425px] h-64 rounded"
            src="https://cdn.gramedia.com/uploads/items/9786230303012_YONA_30_COV_Ina.jpg"
            alt="Book"
          />
          <img
            className="w-[425px] h-64 rounded"
            src="https://cdn.gramedia.com/uploads/items/COV_KAIJO_n08_2_page-0001.jpg"
            alt="Book"
          />
          <img
            className="w-[425px] h-64 rounded"
            src="https://cdn.gramedia.com/uploads/items/9786230302497_YONA_29.jpg"
            alt="Book"
          />
          <img
            className="w-[425px] h-64 rounded"
            src="https://cdn.gramedia.com/uploads/picture_meta/2023/8/8/jp7meyomt47gtexasbfruy.jpg"
            alt="Book"
          />
        </div>

        <div className="flex flex-col gap-5 w-2/3 text-black dark:text-white">
          <h3 className="font-semibold text-5xl">
            Find Your <br />
            Favourite Books <br />
            Here
          </h3>
          <p>
            Your go-to place for book lovers! Explore a vast collection across
            every genre, from thrilling mysteries and heartfelt romances to
            insightful non-fiction and inspiring self-help. Whether you’re after
            the latest bestsellers or timeless classics, there’s something for
            everyone. Discover your next great read, dive into stories that
            ignite your imagination, and find your favorite books today!
          </p>
          <div className="flex flex-row gap-10">
            <div>
              <h3 className="text-4xl">80</h3>
              <p>
                Books <br />
                Best Seller
              </p>
            </div>
            <div>
              <h3 className="text-4xl">60</h3>
              <p>
                Books <br />
                For Coming
              </p>
            </div>
            <div>
              <h3 className="text-4xl">150</h3>
              <p>
                Books <br />
                Top Product
              </p>
            </div>
          </div>
          <Button
            text="Learn More"
            className="text-black border border-black dark:text-white dark:border-white rounded-3xl px-5 py-2 w-2/12"
          />
        </div>
      </div>
    </div>
  );
};
