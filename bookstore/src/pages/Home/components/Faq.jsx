import { FaqCard } from "../../../components/Elements/FaqCard";

export const Faq = () => {
  return (
    <div className="flex flex-col gap-16 pt-10">
      <h3 className="text-center font-semibold text-4xl">About Book Stores</h3>
      <div className="flex flex-col gap-5">
        <FaqCard />
        <FaqCard />
        <FaqCard />
      </div>
    </div>
  );
};
