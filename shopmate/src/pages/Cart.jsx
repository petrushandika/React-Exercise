import { useCart } from "../context/CartContext";
import { CartCard } from "../components";
import useTitle from "../hooks/useTitle";

export default function Cart() {
  const { total, cartList } = useCart();

  useTitle("Cart");

  return (
    <main>
      <section className="flex justify-start flex-wrap gap-4 p-4 other:justify-evenly">
        <h1>
          Cart Items: {cartList.length} / Rp. {total}
        </h1>
        {cartList?.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
