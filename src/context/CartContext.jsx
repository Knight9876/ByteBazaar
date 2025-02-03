// src/context/CartContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart items from local storage if available
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update local storage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    // Ensure quantity is set to 1 if it's undefined, null, or less than 1
    const quantity = item.quantity > 0 ? item.quantity : 1;
  
    // Check if the item is already in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      // If item exists, update the quantity
      setCartItems((prev) =>
        prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      // If item does not exist, add it to the cart with the resolved quantity
      setCartItems((prev) => [...prev, { ...item, quantity }]);
    }
  };

  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  const incrementQuantity = (id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const decrementQuantity = (id) =>
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.discountedPrice ? item.discountedPrice : item.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        updateQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCartContext = () => {
  return useContext(CartContext);
};
