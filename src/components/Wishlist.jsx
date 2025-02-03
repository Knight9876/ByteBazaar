// src/components/Wishlist.jsx
import React from "react";
import { useWishlistContext } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlistContext();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold my-4">Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <ul className="space-y-4">
          {wishlistItems.map((item) => (
            <li key={item.name} className="border p-4 rounded-md flex justify-between items-center">
              <span>{item.name}</span>
              <button
                onClick={() => removeFromWishlist(item.name)}
                className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
