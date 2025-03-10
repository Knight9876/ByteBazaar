// Price.jsx
import React from "react";

const Price = ({ price, discountedPrice }) => {
  return (
    <div className="flex items-center mt-2">
      {discountedPrice ? (
        <>
          <p className="font-bold text-lg text-red-500 line-through">
            ₹{price}
          </p>
          <p className="font-bold text-lg ml-2">₹{discountedPrice}</p>
        </>
      ) : (
        <p className="font-bold text-lg">₹{price}</p>
      )}
    </div>
  );
};

export default Price;
