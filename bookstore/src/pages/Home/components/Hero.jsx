import { BiArrowBack } from "react-icons/bi";
import People from "../../../assets/people.png";
import { Button } from "../../../components/Elements/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToElement } from "../../../utils/ScrollToElement";

export const Hero = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      scrollToElement(hash.replace("#", ""));
    }
  }, [hash]);

  return (
    <section
      className="w-full flex flex-col lg:flex-row items-center pt-20"
      id="home"
    >
      <div className="w-1/2 flex flex-col gap-10 dark:text-white text-black">
        <h1 className="text-7xl font-semibold">
          What Book
          <br />
          Are You
          <br />
          Looking For
        </h1>
        <p>
          Not Sure What to read Next? Explore Our Catalog
          <br />
          of public Domain Books With Our Editors
        </p>
        <div className="flex gap-3">
          <Link to="/products">
            <Button
              text="Explore now"
              className="text-black border border-black dark:text-white dark:border-white rounded-3xl px-5 py-2"
            />
          </Link>
          <Link to="/products">
            <Button className="bg-black text-white dark:bg-white dark:text-black rounded-3xl px-3 py-2">
              <BiArrowBack className="text-white dark:text-black size-6 transform rotate-180" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src={People}
          alt=""
        />
      </div>
    </section>
  );
};
