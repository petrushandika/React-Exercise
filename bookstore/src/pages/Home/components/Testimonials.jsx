import { TestimonialCard } from "../../../components/Elements/TestimonialCard";

export const Testimonials = () => {
  return (
    <div className="flex flex-col gap-16 pt-10">
      <h3 className="text-center font-semibold text-4xl">About Book Stores</h3>
      <div className="grid grid-cols-2 gap-10">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};
