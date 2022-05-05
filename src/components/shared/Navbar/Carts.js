import React from "react";
import { Cart, CartImage, CartLength } from "./Navbarstyling";
import PropTypes from "prop-types";

const Carts = ({ func, cartimg, cartlength, ci }) => {
  return (
    <Cart data-testid="cart" onClick={func}>
      <CartImage src={cartimg} alt="cart" data-testid="cartimg" />
      {ci.length !== 0 ? (
        <CartLength data-testid="cartlength">{cartlength}</CartLength>
      ) : (
        ""
      )}
    </Cart>
  );
};

Cart.propTypes = {
  cartlength: PropTypes.number,
  ci: PropTypes.number,
  func: PropTypes.func,
  cartimg: PropTypes.any,
};

export default Carts;
