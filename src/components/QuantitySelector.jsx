// src/components/QuantitySelector.jsx
import React, { useState, useEffect } from "react";

const QuantitySelector = ({ onChange, initialQuantity = 1 }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  // Effect to update the local state when initialQuantity changes
  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  const increment = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      onChange(newQuantity); // Call the onChange function with the new quantity
      return newQuantity; // Update local state
    });
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => {
        const newQuantity = prev - 1;
        onChange(newQuantity); // Call the onChange function with the new quantity
        return newQuantity; // Update local state
      });
    }
  };

  return (
    <div className="flex items-center mr-2">
      <button
        onClick={(e) => {
          e.preventDefault();  // Prevent default action if necessary
          e.stopPropagation();  // Stop the click event from bubbling up
          decrement();          // Call your decrement function
        }}      
        className="px-2 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
      >
        -
      </button>
      <span className="mx-2 font-bold">{quantity}</span>
      <button
        onClick={(e) => {
          e.preventDefault();  // Prevent default action if necessary
          e.stopPropagation();  // Stop the click event from bubbling up
          increment();          // Call your decrement function
        }}
      
        className="px-2 py-1 bg-gray-300 rounded-lg hover:bg-gray-400"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
