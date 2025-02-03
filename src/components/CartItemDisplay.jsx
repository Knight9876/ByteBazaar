// src/components/CartItemDisplay.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import QuantitySelector from "./QuantitySelector"; // Import QuantitySelector

const CartItemDisplay = ({ item, onQuantityChange, onRemoveClick }) => {
  return (
    <div className="mb-4 flex items-center">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover mr-4"
      />
      <div className="flex-grow">
        <h3 className="font-semibold line-clamp-1">{item.name}</h3>
        <QuantitySelector
          onChange={(quantity) => onQuantityChange(item.id, quantity)} // Update quantity in cart context
          initialQuantity={item.quantity} // Pass the current quantity
        />
        {item.discountedPrice ? (
          <p className="text-gray-600">
            ₹{(parseFloat(item.discountedPrice) * item.quantity).toFixed(2)}
          </p>
        ) : (
          <p className="text-gray-600">
            ₹{(parseFloat(item.price) * item.quantity).toFixed(2)}
          </p>
        )}
      </div>
      <button
        onClick={() => onRemoveClick(item)}
        className="text-red-600 hover:text-red-800"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default CartItemDisplay;
