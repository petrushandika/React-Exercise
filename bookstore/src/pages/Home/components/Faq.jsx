import { Accordion } from "./Accordion";
import faqs from "../../../data/faqs.json";

export const Faq = () => {
  return (
    <div className="flex flex-col gap-16 pt-10">
      <h3 className="text-center font-semibold text-4xl">About Book Stores</h3>
      <div className="flex flex-col gap-5">
        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};
