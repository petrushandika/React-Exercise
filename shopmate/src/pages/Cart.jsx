import { CartCard } from "../components";
import useTitle from "../hooks/useTitle";

export default function Cart() {
  useTitle("Cart");

  const products = [
    {
      id: 1,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/92a5b4a5-2cf5-41d2-9f92-df49bea0e940/gt-cut-3-ep-blueprint-basketball-shoes-tb6DRC.png",
      name: "NIKE G.T. CUT 3 EP FP BLUEPRINT",
      price: "3.049.000",
    },
    {
      id: 2,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/37a6d476-4c54-4185-9962-55e6d629e92d/tatum-2-pf-basketball-shoes-8fp79D.png",
      name: "Tatum 2 PF",
      price: "1.909.000",
    },
  ];

  return (
    <main>
      <section className="flex justify-start flex-wrap gap-4 p-4 other:justify-evenly">
        <h1>Cart Items: {products.length}</h1>
        {products?.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
