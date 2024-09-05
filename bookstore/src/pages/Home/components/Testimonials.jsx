import { TestimonialCard } from "../../../components/Elements/TestimonialCard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToElement } from "../../../utils/ScrollToElement";

export const Testimonials = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      scrollToElement(hash.replace("#", ""));
    }
  }, [hash]);

  return (
    <div
      className="flex flex-col gap-16 pt-10"
      id="about"
    >
      <h3 className="text-center font-semibold text-4xl text-black dark:text-white">
        About Book Stores
      </h3>
      <div className="grid grid-cols-2 gap-10">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};
