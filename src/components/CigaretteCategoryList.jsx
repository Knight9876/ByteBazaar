// components/CigaretteCategoryList.jsx
import React from "react";
import CigaretteList from "./CigaretteList";

const CigaretteCategoryList = ({ categories, handleQuantityChange, addToCart }) => {
  return (
    <>
      {categories.map((category, index) => (
        <div key={index} className="mb-10">
          <h1 className="text-3xl font-bold mb-6">{category.type}</h1>
          <CigaretteList
            cigarettes={category.cigarettes}
            onQuantityChange={handleQuantityChange}
            onAddToCart={addToCart}
          />
        </div>
      ))}
    </>
  );
};

export default CigaretteCategoryList;
