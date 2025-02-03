// Price.jsx
import React from "react";

// Helper function to format the price
const formatPrice = (price) => {
  // Remove decimals if any
  const priceWithoutDecimal = price.split(".")[0];
  const decimals = price.split(".")[1] || "";

  // Add commas to the price if it has more than 3 digits
  const formattedPrice = priceWithoutDecimal.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  return formattedPrice + "." + decimals;
};

const Price = ({ price, discountedPrice }) => {
  const formattedPrice = formatPrice(price);
  const formattedDiscountedPrice = discountedPrice
    ? formatPrice(discountedPrice)
    : null;

  return (
    <div className="flex items-center mt-2">
      {formattedDiscountedPrice ? (
        <>
          <p className="font-bold text-lg text-red-500 line-through">
            ₹{formattedPrice}
          </p>
          <p className="font-bold text-lg ml-2">₹{formattedDiscountedPrice}</p>
        </>
      ) : (
        <p className="font-bold text-lg">₹{formattedPrice}</p>
      )}
    </div>
  );
};

export default Price;
