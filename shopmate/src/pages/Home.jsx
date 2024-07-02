import { ProductCard } from "../components";
import useTitle from "../hooks/useTitle";

export default function Home() {
  useTitle("Home");

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
    {
      id: 3,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9a26b93a-604b-411d-a1e8-88ffbd7b224e/sabrina-2-colour-vision-ep-basketball-shoes-w6qwqM.png",
      name: "Sabrina 2 'Colour Vision' EP",
      price: "2.099.000",
    },
    {
      id: 4,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9e69a566-4f91-4788-a2ee-a83d4c3bbd1f/jordan-stay-loyal-3-shoes-GNHN2X.png",
      name: "Jordan Stay Loyal 3",
      price: "1.859.000",
    },
    {
      id: 5,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c4b82ffb-1eb2-48fe-8510-53ee26712a1f/kd17-ep-basketball-shoes-7MqWLD.png",
      name: "KD17 EP",
      price: "2.379.000",
    },
    {
      id: 6,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/80f35439-b10f-4c2e-b21a-14a07eebbb70/air-jordan-5-retro-lucky-green-shoes-Zts2wQ.png",
      name: "AIR JORDAN LEGACY 312 LOW KIDS (GRADE SCHOOL) WHITE",
      price: "1.669.000",
    },
    {
      id: 7,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/04d8cce8-ede1-4ad7-9421-6d81ece3d983/giannis-freak-5-se-hometown-hero-older-basketball-shoes-LW7kP0.png",
      name: "Giannis Freak 5 SE 'Hometown Hero'",
      price: "1.499.000",
    },
    {
      id: 8,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fafe86ec-155a-482f-a2ca-037c835ee9a9/elevate-3-basketball-shoes-QT43Gj.png",
      name: "Nike Elevate 3",
      price: "1.149.000",
    },
    {
      id: 9,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/887d9a33-8e68-4694-91f4-ae682c417442/lebron-xxi-ep-basketball-shoes-BrtQSn.png",
      name: "LeBron XXI EP",
      price: "3.169.000",
    },
    {
      id: 10,
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e85bfb1e-a8bd-4d93-bf63-e715691f3d23/precision-7-basketball-shoes-6FvJHX.png",
      name: "Nike Precision 7",
      price: "1.069.000",
    },
  ];

  return (
    <main>
      <div className="flex justify-start flex-wrap gap-4 p-4 other:justify-evenly">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
