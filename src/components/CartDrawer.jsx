// src/components/CartDrawer.jsx

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // Import close icon
import { useCartContext } from "../context/CartContext";
import CartItemDisplay from "./CartItemDisplay"; // Import CartItemDisplay
import ConfirmationModal from "./ConfirmationModal"; // Import ConfirmationModal

const CartDrawer = ({ isOpen, toggleCart }) => {
  const { cartItems, totalPrice, updateQuantity, removeFromCart } =
    useCartContext();
  const [drawerHeight, setDrawerHeight] = useState("h-full");
  const drawerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const [disablePopup, setDisablePopup] = useState(false);
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    toggleCart(); // Close the drawer
    navigate("/checkout"); // Navigate to the checkout page
  };

  useEffect(() => {
    if (isOpen) {
      const isOverflowing = drawerRef.current.scrollHeight > window.innerHeight;
      setDrawerHeight(isOverflowing ? "max-content" : "h-full");
    }
  }, [isOpen, cartItems]);

  const handleRemoveClick = (item) => {
    if (disablePopup) {
      removeFromCart(item.id);
    } else {
      setItemToRemove(item);
      setShowModal(true);
    }
  };

  const confirmRemove = () => {
    removeFromCart(itemToRemove.id);
    console.log(itemToRemove);
    setShowModal(false);
  };

  return (
    <div
      ref={drawerRef}
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity z-20 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed right-0 top-0 w-80 bg-white shadow-lg h-full transform transition-transform ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4 border-b">
          <h2 className="text-lg font-bold">My Cart</h2>
          <button onClick={toggleCart} className="text-gray-500">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="p-4 overflow-y-auto scrollbar-none max-h-screen pb-40">
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item) => (
                <CartItemDisplay
                  key={item.id}
                  item={item}
                  onQuantityChange={updateQuantity}
                  onRemoveClick={handleRemoveClick}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* Total and Checkout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white shadow-inner">
          {cartItems.length > 0 && (
            <>
              <h3 className="font-bold">Total: ₹{totalPrice.toFixed(2)}</h3>
              <button
                onClick={handleCheckoutClick}
                className="w-full bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-600 text-white py-2 rounded-lg hover:from-cyan-500 hover:via-violet-600 hover:to-pink-700 mt-2"
              >
                Checkout
              </button>
            </>
          )}
        </div>

        {/* Confirmation Modal */}
        {showModal && (
          <ConfirmationModal
            item={itemToRemove}
            onConfirm={confirmRemove}
            onCancel={() => setShowModal(false)}
            disablePopup={disablePopup}
            setDisablePopup={setDisablePopup}
          />
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
