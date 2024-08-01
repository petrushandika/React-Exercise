import { FaStar, FaRegStar } from "react-icons/fa";

export const Rating = ({ rating }) => {
  const validRating = Math.max(0, Math.min(5, rating));

  const ratingList = Array(5).fill(false);
  for (let i = 0; i < validRating; i++) {
    ratingList[i] = true;
  }

  return (
    <div className="flex flex-row">
      {ratingList.map((value, index) =>
        value ? (
          <FaStar
            key={index}
            className="text-yellow-400"
          />
        ) : (
          <FaRegStar
            key={index}
            className="text-yellow-400"
          />
        )
      )}
    </div>
  );
};
