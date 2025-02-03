import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useWishlistContext } from "../context/WishlistContext";
import WishlistItemDisplay from "./WishlistItemDisplay";
import ConfirmationModal from "./ConfirmationModal"; // Import ConfirmationModal

const WishlistDrawer = ({ isOpen, toggleWishlist }) => {
  const {
    wishlistItems = [],
    removeFromWishlist,
    moveToCart,
  } = useWishlistContext();

  const [showModal, setShowModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const [disablePopup, setDisablePopup] = useState(false);

  const handleRemoveClick = (item) => {
    if (disablePopup) {
      removeFromWishlist(item.name); // Directly remove item from wishlist if popup is disabled
    } else {
      setItemToRemove(item);
      setShowModal(true); // Show the confirmation modal
    }
  };

  const confirmRemove = () => {
    if (itemToRemove) {
      removeFromWishlist(itemToRemove.name);
      console.log(itemToRemove)
      setItemToRemove(null); // Reset the item after removal
      setShowModal(false); // Close the modal
    }
  };
  

  const handleCancel = () => {
    setShowModal(false); // Close the modal on cancel
    setItemToRemove(null); // Reset selected item to remove
  };

  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity z-20 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed right-0 top-0 w-80 bg-white shadow-lg h-full transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Your Wishlist</h2>
          <button onClick={toggleWishlist}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="p-4">
          {wishlistItems.length === 0 ? (
            <p className="text-gray-500">Your wishlist is empty.</p>
          ) : (
            <ul className="space-y-4">
              {wishlistItems.map((item) => (
                <WishlistItemDisplay
                  key={item.name}
                  item={item}
                  onRemove={() => handleRemoveClick(item)} // Open modal on remove
                  onAddToCart={() => moveToCart(item)} // Pass moveToCart function
                />
              ))}
            </ul>
          )}
        </div>

        {/* Confirmation Modal */}
        {showModal && (
          <ConfirmationModal
            item={itemToRemove}
            onConfirm={confirmRemove}
            onCancel={handleCancel} // Handle cancel action
            disablePopup={disablePopup}
            setDisablePopup={setDisablePopup}
          />
        )}
      </div>
    </div>
  );
};

export default WishlistDrawer;
