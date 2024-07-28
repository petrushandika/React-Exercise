export const FilterBar = () => {
  return (
    <div className="flex flex-row gap-3">
      <div className="w-1/2">
        <input
          className="w-full p-2 border border-black rounded"
          type="text"
        />
      </div>
      <div className="w-1/2">
        <select
          className="w-full p-3 border border-black rounded"
          name=""
          id=""
        >
          <option value="">Filter Book</option>
          <option value="">Comedy</option>
          <option value="">Fantasy</option>
          <option value="">Horror</option>
        </select>
      </div>
    </div>
  );
};
