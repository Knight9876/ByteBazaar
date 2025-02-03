// src/components/PurchaseOptions.jsx
import React from "react";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";

const PurchaseOptions = ({ product, quantity, setQuantity, onAddToCart }) => (
  <div className="bg-gray-50 p-6 rounded-md shadow-md">
    <h3 className="text-lg font-semibold mb-4">Purchase Options</h3>
    <div className="flex items-center justify-between mb-4">
      <QuantitySelector initialQuantity={quantity} onChange={setQuantity} />
      <span className="text-xl font-bold text-gray-800">
        {product.discountedPrice
          ? `₹${(product.discountedPrice * quantity).toFixed(2)}`
          : `₹${(product.price * quantity).toFixed(2)}`}
      </span>
    </div>
    <AddToCartButton
      onClick={onAddToCart}
      className="w-full py-3 text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
    />
    <p className="mt-4">
    Estimated Delivery: 3-5 business days
  </p>
  </div>
);

export default PurchaseOptions;
