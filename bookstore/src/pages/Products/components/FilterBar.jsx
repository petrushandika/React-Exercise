import { BiSearch } from "react-icons/bi";

export const FilterBar = () => {
  return (
    <div className="flex flex-row gap-3">
      <div className="w-3/4 relative">
        <BiSearch className="absolute top-1/2 transform -translate-y-1/2 left-3" />
        <input
          className="w-full p-2 pl-10 border border-black rounded"
          type="text"
          placeholder="Search books..."
        />
      </div>
      <div className="w-1/4">
        <select
          className="w-full p-2 border border-black rounded"
          name=""
          id=""
        >
          <option value="">Filter Book</option>
          <option value="comedy">Comedy</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
        </select>
      </div>
    </div>
  );
};
