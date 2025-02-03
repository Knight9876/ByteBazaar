// PriceRangeSlider.jsx
import React from "react";

const PriceRangeSlider = ({ priceRange, onPriceRangeChange }) => {
  return (
    <div className="mb-4">
      <input
        type="range"
        min="100"
        max="42000"
        step="0.5"
        value={priceRange[0]}
        onChange={(e) => onPriceRangeChange([+e.target.value, priceRange[1]])}
        className="w-full"
      />
      <span>Min Price: ₹{priceRange[0]}</span>
      <input
        type="range"
        min="100"
        max="45000"
        step="0.5"
        value={priceRange[1]}
        onChange={(e) => onPriceRangeChange([priceRange[0], +e.target.value])}
        className="w-full"
      />
      <span>Max Price: ₹{priceRange[1]}</span>
    </div>
  );
};

export default PriceRangeSlider;
