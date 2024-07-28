import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ProductImage = ({ book, bookLink, alt, className }) => {
  return (
    <Link to={bookLink}>
      <img
        src={book}
        alt={alt}
        className={className}
      />
    </Link>
  );
};

ProductImage.propTypes = {
  book: PropTypes.string.isRequired,
  bookLink: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ProductImage.defaultProps = {
  className: "",
};
