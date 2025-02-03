// src/context/WishlistContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { useCartContext } from "./CartContext"; // Import the CartContext

const WishlistContext = createContext();

export const useWishlistContext = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  // const { addToCart } = useCartContext(); // Access addToCart from CartContext
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlistItems");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (item) => {
    if (!wishlistItems.some((i) => i.name === item.name)) {
      setWishlistItems([...wishlistItems, item]);
    }
  };

  const removeFromWishlist = (itemName) => {
    setWishlistItems(wishlistItems.filter((item) => item.name !== itemName));
  };

  const moveToCart = (item) => {
    removeFromWishlist(item.name); // Remove item from wishlist
    // addToCart(item); // Add item to cart with a quantity of 1
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist, moveToCart }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
