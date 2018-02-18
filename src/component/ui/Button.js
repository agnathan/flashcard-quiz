import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, text }) => (
  <button className="btn button" type="button" onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
