import { Hero } from "../Home/components/Hero";
import { TopProduct } from "./components/TopProduct";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";

export const HomePage = () => {
  return (
    <main className="flex flex-col gap-28">
      <Hero />
      <TopProduct />
      <Testimonials />
      <Faq />
    </main>
  );
};
