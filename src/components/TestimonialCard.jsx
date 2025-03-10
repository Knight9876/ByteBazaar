import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons"; // Solid star icon
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons"; // Outline star icon

const TestimonialCard = ({ review }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <p className="text-gray-700 italic mb-4">"{review.text}"</p>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-900">{review.name}</span>
        <div className="flex text-xs">
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={i < review.stars ? solidStar : regularStar} // Fill stars dynamically
              className="text-yellow-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
