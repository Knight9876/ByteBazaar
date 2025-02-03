// Stars.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar, faStarHalfStroke as halfSolidStar } from "@fortawesome/free-solid-svg-icons";

const Stars = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={solidStar} className="text-yellow-500 text-xs" />);
  }

  if (hasHalfStar) {
    stars.push(<FontAwesomeIcon key={fullStars} icon={halfSolidStar} className="text-yellow-500 text-xs" />);
  }

  for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={solidStar} className="text-gray-400 text-xs" />);
  }

  return <div className="flex items-center mt-2">{stars}</div>;
};

export default Stars;
