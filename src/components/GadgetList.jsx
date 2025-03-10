// components/GadgetList.js
import React from "react";
import GadgetCard from "./GadgetCard";

const GadgetList = ({ gadgets, onQuantityChange, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {gadgets.length > 0 ? (
        gadgets.map((gadget) => (
          <GadgetCard
            key={gadget.id}
            gadget={gadget}
            onQuantityChange={(newQuantity) => onQuantityChange(gadget.id, newQuantity)}
            onAddToCart={() => onAddToCart(gadget)}
          />
        ))
      ) : (
        <p className="text-gray-600">No products found.</p>
      )}
    </div>
  );
};

export default GadgetList;
