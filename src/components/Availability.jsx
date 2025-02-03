// Availability.jsx
import React from "react";

const Availability = ({ availability }) => {
  if (availability === 1) return <span className="text-green-500 font-semibold">In Stock</span>;
  if (availability === 0) return <span className="text-orange-500 font-semibold">Low Stock</span>;
  return <span className="text-red-500 font-semibold mt-2">Out of Stock</span>;
};

export default Availability;
