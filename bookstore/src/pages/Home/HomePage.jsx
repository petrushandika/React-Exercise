import { useTitle } from "../../hooks/useTitle";
import { Hero } from "../Home/components/Hero";
import { TopProduct } from "./components/TopProduct";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";

export const HomePage = () => {
  useTitle("Access Latest Computer Science E-Books");

  return (
    <main className="flex flex-col gap-28">
      <Hero />
      <TopProduct />
      <Testimonials />
      <Faq />
    </main>
  );
};
