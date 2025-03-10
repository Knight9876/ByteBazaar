// components/AddToCartButton.jsx
import React from "react";

const AddToCartButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="text-sm bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-600 text-white px-4 py-3 rounded-lg hover:from-cyan-500 hover:via-violet-600 hover:to-pink-700"
  >
    Add to Cart
  </button>
);

export default AddToCartButton;
