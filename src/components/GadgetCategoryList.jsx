// components/GadgetCategoryList.jsx
import React from "react";
import GadgetList from "./GadgetList";

const GadgetCategoryList = ({ categories, handleQuantityChange, addToCart }) => {
  return (
    <>
      {categories.map((category, index) => (
        <div key={index} className="mb-10">
          <h1 className="text-3xl font-bold mb-6 text-center">{category.type}</h1>
          <GadgetList
            gadgets={category.gadgets}
            onQuantityChange={handleQuantityChange}
            onAddToCart={addToCart}
          />
        </div>
      ))}
    </>
  );
};

export default GadgetCategoryList;
