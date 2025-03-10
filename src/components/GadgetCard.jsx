// GadgetCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";
import Stars from "./Stars";
import Availability from "./Availability";
import Tag from "./Tag";
import Price from "./Price";
import AddToWishlistButton from "./AddToWishlistButton";

const GadgetCard = ({
  gadget,
  quantity,
  onQuantityChange,
  onAddToCart,
}) => (
  <div className="bg-white shadow-md rounded-lg flex flex-col justify-between p-4 hover:shadow-lg transition transform hover:scale-105 duration-300">
    <Link to={`/products/${gadget.name}`}>
      <img
        src={gadget.image}
        alt={gadget.name}
        className="w-full h-48 object-contain rounded-t-lg"
      />
      <div className="flex-grow p-4">
        <h3 className="text-lg font-semibold line-clamp-1">{gadget.name}</h3>
        <p className="text-gray-600 italic">{gadget.type}</p>
        <p className="text-gray-600 line-clamp-1">{gadget.description}</p>
        <Price
          price={gadget.price}
          discountedPrice={gadget.discountedPrice}
        />
        <div className="flex items-center gap-2">
          <Stars rating={gadget.rating} />
          <div className="mt-2">({gadget.rating}/5)</div>
        </div>
        <div className="flex flex-col">
          <div className="mt-2">
            <Availability availability={gadget.availability} />
          </div>
          <div className="mt-2">
            <Tag tag={gadget.tag} />
          </div>
        </div>
      </div>
    </Link>
    <div className="p-4 flex items-center justify-between">
      <QuantitySelector quantity={quantity} onChange={onQuantityChange} />
      <div className="flex items-center gap-2">
        <AddToCartButton
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onAddToCart();
          }}
        />
        <AddToWishlistButton product={gadget} />
      </div>
    </div>
  </div>
);

export default GadgetCard;
