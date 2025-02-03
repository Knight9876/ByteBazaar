// AddToWishlistButton.jsx
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeartIcon } from "@fortawesome/free-solid-svg-icons";
import { faHeart as outlineHeartIcon } from "@fortawesome/free-regular-svg-icons";
import { useWishlistContext } from "../context/WishlistContext";

const AddToWishlistButton = ({ product }) => {
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlistContext();
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    // Check if the product is already in the wishlist
    setIsInWishlist(wishlistItems.some((item) => item.name === product.name));
  }, [wishlistItems, product]);

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isInWishlist) {
      removeFromWishlist(product.name);
    } else {
      addToWishlist(product);
    }
    setIsInWishlist(!isInWishlist);
  };

  return (
    <button
      onClick={handleWishlistToggle}
      className={`text-${isInWishlist ? "red-500" : "gray-500"} hover:text-red-600`}
      aria-label="Toggle Wishlist"
    >
      <FontAwesomeIcon icon={isInWishlist ? solidHeartIcon : outlineHeartIcon} />
    </button>
  );
};

export default AddToWishlistButton;
