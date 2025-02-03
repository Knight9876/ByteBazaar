import React from "react";

const CartItem = ({ item, onIncrement, onDecrement, onRemove }) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <span className="font-semibold">{item.name}</span>
      <div className="flex items-center">
        <button onClick={onDecrement} className="px-2 bg-gray-200 rounded">-</button>
        <span className="mx-2">{item.quantity}</span>
        <button onClick={onIncrement} className="px-2 bg-gray-200 rounded">+</button>
      </div>
      <button onClick={onRemove} className="text-red-500">Remove</button>
    </div>
  );
};

export default CartItem;
