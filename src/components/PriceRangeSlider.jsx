// PriceRangeSlider.jsx
import React from "react";

const PriceRangeSlider = ({ priceRange, onPriceRangeChange }) => {
  return (
    <div className="mb-4">
      <input
        type="range"
        min="500"
        max="150000"
        step="0.5"
        value={priceRange[0]}
        onChange={(e) => onPriceRangeChange([+e.target.value, priceRange[1]])}
         className="w-full appearance-none h-2 rounded-lg bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-600 outline-none cursor-pointer"
      />
      <span>Min Price: ₹{priceRange[0]}</span>
      <input
        type="range"
        min="600"
        max="160000"
        step="0.5"
        value={priceRange[1]}
        onChange={(e) => onPriceRangeChange([priceRange[0], +e.target.value])}
        className="w-full appearance-none h-2 rounded-lg bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-600 outline-none cursor-pointer"
      />
      <span>Max Price: ₹{priceRange[1]}</span>
    </div>
  );
};

export default PriceRangeSlider;
