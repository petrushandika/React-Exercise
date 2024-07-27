import { BiArrowBack } from "react-icons/bi";
import People from "../../../assets/people.png";

export const Hero = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center pt-20">
      <div className="w-1/2 flex flex-col gap-10">
        <h1 className="text-7xl font-semibold">
          What Book <br /> Are You <br /> Looking For
        </h1>
        <p>
          Not Sure What to read Next? Explore Our Catalog <br /> of public
          Domain Books With Our Editors
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            class="text-black border border-black rounded-3xl px-5 py-2"
          >
            Explore now
          </button>
          <button
            type="button"
            className="bg-black rounded-3xl px-3 py-2"
          >
            <BiArrowBack className="text-white size-6 transform rotate-180" />
          </button>
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
