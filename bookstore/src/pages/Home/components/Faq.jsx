import { Accordion } from "./Accordion";
import faqs from "../../../data/faqs.json";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToElement } from "../../../utils/ScrollToElement";

export const Faq = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      scrollToElement(hash.replace("#", ""));
    }
  }, [hash]);

  return (
    <div
      className="flex flex-col gap-16 pt-10"
      id="faq"
    >
      <h3 className="text-center font-semibold text-4xl text-black dark:text-white">
        Frequently Asked Questions
      </h3>
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
