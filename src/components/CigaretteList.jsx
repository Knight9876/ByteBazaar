// components/CigaretteList.js
import React from "react";
import CigaretteCard from "./CigaretteCard";

const CigaretteList = ({ cigarettes, onQuantityChange, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cigarettes.length > 0 ? (
        cigarettes.map((cigarette) => (
          <CigaretteCard
            key={cigarette.id}
            cigarette={cigarette}
            onQuantityChange={(newQuantity) => onQuantityChange(cigarette.id, newQuantity)}
            onAddToCart={() => onAddToCart(cigarette)}
          />
        ))
      ) : (
        <p className="text-gray-600">No products found.</p>
      )}
    </div>
  );
};

export default CigaretteList;
