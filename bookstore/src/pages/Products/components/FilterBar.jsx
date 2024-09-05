import { useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../../context";

export const FilterBar = ({ setShow }) => {
  const navigate = useNavigate();
  const searchRef = useRef();
  const { state, dispatch } = useFilter();

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = searchRef.current.value;
    const params = new URLSearchParams({ q: searchTerm });
    navigate(`/products?${params.toString()}`);
  };

  return (
    <div className="flex flex-row gap-3">
      <div className="w-3/4 relative">
        <form
          action=""
          onSubmit={handleSearch}
        >
          <BiSearch className="absolute top-1/2 transform -translate-y-1/2 left-3" />
          <input
            ref={searchRef}
            className="w-full p-2 pl-10 border border-black rounded"
            type="text"
            placeholder="Search books..."
          />
        </form>
      </div>
      <div className="w-1/4">
        <select
          className="w-full p-2 border border-black rounded"
          name=""
          id=""
        >
          <option value="">Sort By</option>
          <option
            id="price-one"
            value=""
            onChange={() =>
              dispatch({ type: "SORT_BY", payload: { ratings: "lowtohigh" } })
            }
            // checked={state.ratings === "lowtohigh" || false}
          >
            Price - Low To High
          </option>
          <option
            id="price-two"
            value=""
            onChange={() =>
              dispatch({ type: "SORT_BY", payload: { ratings: "hightolow" } })
            }
            // checked={state.ratings === "hightolow" || false}
          >
            Price - High To Low
          </option>
          <option
            id="rating-one"
            value=""
            onChange={() =>
              dispatch({ type: "RATINGS", payload: { ratings: "1STAR" } })
            }
            // checked={state.ratings === "1STAR" || false}
          >
            1 Star & Above
          </option>
          <option
            id="rating-two"
            value=""
            onChange={() =>
              dispatch({ type: "RATINGS", payload: { ratings: "2STAR" } })
            }
            // checked={state.ratings === "2STAR" || false}
          >
            2 Star & Above
          </option>
          <option
            id="rating-three"
            value=""
            onChange={() =>
              dispatch({ type: "RATINGS", payload: { ratings: "3STAR" } })
            }
            // checked={state.ratings === "3STAR" || false}
          >
            3 Star & Above
          </option>
          <option
            id="rating-four"
            value=""
            onChange={() =>
              dispatch({ type: "RATINGS", payload: { ratings: "4STAR" } })
            }
            // checked={state.ratings === "4STAR" || false}
          >
            4 Star & Above
          </option>
          <option
            id="best-seller"
            value=""
            onChange={() =>
              dispatch({
                type: "BEST_SELLER_ONLY",
                payload: { bestSellerOnly: !state.bestSellerOnly || false },
              })
            }
          >
            Best Seller Only
          </option>
          <option
            id="only-instock"
            value=""
            onChange={() =>
              dispatch({
                type: "ONLY_IN_STOCK",
                payload: { onlyInStock: !state.onlyInStock || false },
              })
            }
          >
            In Stock Only
          </option>
        </select>
      </div>
    </div>
  );
};
