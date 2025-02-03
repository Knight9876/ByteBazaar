import React from "react";
import { useCartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import QuantitySelector from "../components/QuantitySelector";
import AddToWishlistButton from "../components/AddToWishlistButton";

const Checkout = () => {
  const { cartItems, totalPrice, updateQuantity, removeFromCart } =
    useCartContext();
  const navigate = useNavigate();

  const shippingCharges = 5.99;
  const taxRate = 0.1;
  const taxAmount = totalPrice * taxRate;
  const grandTotal = totalPrice + shippingCharges + taxAmount;

  if (cartItems.length === 0) {
    return (
      <div className="p-4 py-20 max-w-3xl mx-auto">
        <h2 className="text-lg font-bold">Checkout</h2>
        <p>
          Your cart is empty. Please add items to your cart before checking out.
        </p>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    navigate("/payment-options");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>
      <div className="flex flex-col lg:flex-row lg:gap-8 gap-6">
        <div className="order-1 lg:order-2 flex-1">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <h3 className="font-medium line-clamp-1 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-1">
                        Price: ₹
                        {item.discountedPrice
                          ? item.discountedPrice
                          : item.price}
                      </p>
                      <QuantitySelector
                        initialQuantity={item.quantity}
                        onChange={(newQuantity) =>
                          updateQuantity(item.id, newQuantity)
                        }
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-center">
                    <span className="font-bold">
                      ₹
                      {parseFloat(
                        (item.discountedPrice
                          ? item.discountedPrice
                          : item.price) * item.quantity
                      ).toFixed(2)}
                    </span>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <AddToWishlistButton product={item} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-2 lg:order-1 flex-1 space-y-6">
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="font-bold mb-4">Shipping Details</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border p-3 rounded-lg w-full focus:outline-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Address"
                className="border p-3 rounded-lg w-full focus:outline-blue-500"
                required
              />
              <input
                type="text"
                placeholder="City"
                className="border p-3 rounded-lg w-full focus:outline-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border p-3 rounded-lg w-full focus:outline-blue-500"
                required
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border p-3 rounded-lg w-full focus:outline-blue-500"
                required
              />
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm sticky top-20 border">
            <div className="space-y-4">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal:</span>
                <span>₹{parseFloat(totalPrice).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping:</span>
                <span>₹{shippingCharges}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax (10%):</span>
                <span>₹{taxAmount.toFixed(2)}</span>
              </div>
              <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>
              <button
                onClick={handlePlaceOrder}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
