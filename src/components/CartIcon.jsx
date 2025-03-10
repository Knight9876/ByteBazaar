// components/CartIcon.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartIcon = ({ totalItems, onClick }) => (
  <button onClick={onClick} className="relative text-white hover:text-pink-600">
    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
    {totalItems > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
        {totalItems}
      </span>
    )}
  </button>
);

export default CartIcon;
