import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

const WishlistItemDisplay = ({ item, onRemove, onAddToCart }) => {
  return (
    <li className="border p-2 rounded-md flex justify-between items-center">
      <img src={item.image} alt={item.name} className="w-16 h-16" />
      <span>{item.name}</span>
      <div className="flex items-center space-x-2">
        <button
          onClick={onRemove} // Use onRemove callback to trigger modal
          className="text-red-500 hover:text-red-700"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button
          // onClick={onAddToCart} // Use onAddToCart callback to move to cart
          className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </li>
  );
};

export default WishlistItemDisplay;
