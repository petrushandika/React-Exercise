import React from "react";
import PropTypes from "prop-types";
import Book from "../../assets/book.png";
import { Button } from "./Button";
import { ProductImage } from "./ProductImage";

export const ProductCard = ({
  book,
  alt,
  bookLink,
  heading,
  description,
  price,
}) => {
  return (
    <div className="flex flex-row gap-5">
      <div className="flex flex-row items-center">
        <ProductImage
          book={Book}
          bookLink={"/productdetail"}
          className={"80 rounded"}
        />
        <div className="flex flex-col justify-center h-5/6">
          <div className="flex flex-col gap-2 justify-center p-2 rounded-r bg-backgroundsecondary">
            <h3 className="font-medium">{heading}</h3>
            <p className="text-sm">{description}</p>
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
  bookLink: PropTypes.string,
  heading: PropTypes.node,
  description: PropTypes.string,
  price: PropTypes.number,
};

ProductCard.defaultProps = {
  description: "",
};
