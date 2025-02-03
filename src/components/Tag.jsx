// Tag.jsx
import React from "react";

const Tag = ({ tag }) => {
  if (tag === 0) return <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">Customer Favourite</span>;
  if (tag === 1) return <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">Limited Edition</span>;
  if (tag === -1) return <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Best Seller</span>;
  return <span className="text-white px-2 py-1 rounded-full text-xs"> </span>;;
};

export default Tag;
