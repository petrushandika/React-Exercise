import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Rating } from "./Rating";

export const ProductCard = ({
  id,
  image,
  alt,
  title,
  description,
  price,
  rating,
  className,
}) => {
  return (
    <div className="flex flex-row gap-5">
      <div className="flex flex-row items-center">
        <Link to={`/products/${id}`}>
          <img
            src={image}
            alt={alt}
            className={className}
          />
        </Link>
        <div className="flex flex-col justify-center h-5/6">
          <div className="flex flex-col gap-2 justify-center p-2 rounded-r bg-backgroundsecondary">
            <Link to={`/products/${id}`}>
              <h3 className="font-medium">{title}</h3>
            </Link>
            <p className="text-sm">{description}</p>
            <Rating rating={rating} />
            <p className="text-sm">Rp. {price}</p>
            <Button
              text="Add to Cart"
              className="text-white bg-secondary w-full rounded p-2 text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.node,
  description: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rating: PropTypes.number,
  className: PropTypes.string,
};

ProductCard.defaultProps = {
  title: "",
  description: "",
  price: "",
  rating: 0,
  className: "",
};
