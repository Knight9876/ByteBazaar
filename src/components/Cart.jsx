import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem"; // Import the CartItem component

const Cart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

  // Calculate total price directly in the Cart component
  const totalPrice = cartItems.reduce((total, item) => total + (item.discountedPrice ? item.discountedPrice : item.price) * item.quantity, 0);

  return (
    <div className="absolute top-16 right-4 w-80 bg-white p-4 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem 
              key={item.id}
              item={item} 
              onIncrement={() => incrementQuantity(item.id)} 
              onDecrement={() => decrementQuantity(item.id)} 
              onRemove={() => removeFromCart(item.id)} 
            />
          ))}
          <p className="mt-4 font-bold">Total: ${totalPrice}</p> {/* Display total price */}
        </div>
      )}
    </div>
  );
};

export default Cart;
