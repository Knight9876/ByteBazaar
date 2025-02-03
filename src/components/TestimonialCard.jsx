import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons"; // Import solid star

const TestimonialCard = ({ review }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <p className="text-gray-700 italic mb-4">"{review.text}"</p>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-900">Arun S.</span>
        <div className="flex text-xs">
          {[...Array(7)].map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={solidStar}
              className="text-yellow-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
