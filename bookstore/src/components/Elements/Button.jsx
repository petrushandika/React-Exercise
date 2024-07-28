import React from "react";
import PropTypes from "prop-types";

export const Button = ({
  text,
  onClick,
  style,
  className,
  disabled,
  children,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={className}
      disabled={disabled}
    >
      {children || text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  onClick: () => {},
  style: {},
  className: "",
  disabled: false,
  children: null,
};
