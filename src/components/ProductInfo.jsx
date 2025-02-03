import React from "react";
import Stars from "./Stars";
import Availability from "./Availability";
import Tag from "./Tag";
import AddToWishlistButton from "./AddToWishlistButton";

const ProductInfo = ({ product }) => {
  return (
    <div className="flex-grow">
      <div className="flex items-center justify-between">
      <h2 className="text-2xl font-semibold">{product.name}</h2>
      <AddToWishlistButton product={product} />
      </div>
      <p className="text-gray-600 italic">{product.type}</p>
      <div className="mt-2 flex items-center">
        {product.discountedPrice ? (
          <>
            <p className="text-lg font-bold text-red-500 line-through">
              ₹{product.price}
            </p>
            <p className="text-lg font-bold ml-2">
              ₹{product.discountedPrice}
            </p>
          </>
        ) : (
          <p className="mt-2 text-lg font-bold">${product.price}</p>
        )}
      </div>
      <div className="flex items-center mt-2">
        <Stars rating={product.rating} />
        <div className="mt-2">({product.rating}/5)</div>
      </div>
      <div className="mt-2">
        <Availability availability={product.availability} />
      </div>
      <div className="mt-2">
        <Tag tag={product.tag} />
      </div>
      <p className="mt-4 text-gray-700">{product.description}</p>
    </div>
  );
};

export default ProductInfo;
