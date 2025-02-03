// components/RatingFilter.jsx
import React from "react";

const RatingFilter = ({ selectedRating, onRatingChange }) => {
  return (
    <div className="mb-4 text-sm sm:text-base">
      <select
        value={selectedRating}
        onChange={(e) => onRatingChange(e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="all">All Ratings</option>
        <option value="4">4 Stars & Up</option>
        <option value="4.5">4.5 Stars & Up</option>
        <option value="5">5 Stars</option>
      </select>
    </div>
  );
};

export default RatingFilter;
