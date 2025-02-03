import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const WishlistIcon = ({ onClick, wishlistCount }) => (
  <button onClick={onClick} className="text-white relative hover:text-blue-500">
    <FontAwesomeIcon icon={faHeart} size="lg" />
    {wishlistCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
        {wishlistCount}
      </span>
    )}
  </button>
);

export default WishlistIcon;
