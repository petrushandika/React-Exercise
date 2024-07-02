import { useSelector } from "react-redux";
import useTitle from "../hooks/useTitle";
import { CartCard } from "../components";
import { formatRupiah } from "../utils/formatRupiah";

export default function Cart() {
  useTitle("Cart");
  const products = useSelector((state) => state.cartState.cartList);
  const total = useSelector((state) => formatRupiah(state.cartState.total));

  return (
    <main>
      <section className="flex justify-start flex-wrap gap-4 p-4 other:justify-evenly">
        <h1>
          Cart Items: {products.length} / {total}
        </h1>
        {products?.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
