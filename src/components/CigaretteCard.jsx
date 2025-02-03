// CigaretteCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";
import Stars from "./Stars";
import Availability from "./Availability";
import Tag from "./Tag";
import Price from "./Price";
import AddToWishlistButton from "./AddToWishlistButton";

const CigaretteCard = ({
  cigarette,
  quantity,
  onQuantityChange,
  onAddToCart,
}) => (
  <div className="bg-white shadow-md rounded-lg flex flex-col justify-between p-4 hover:shadow-lg transition transform hover:scale-105 duration-300">
    <Link to={`/products/${cigarette.name}`}>
      <img
        src={cigarette.image}
        alt={cigarette.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="flex-grow p-4">
        <h3 className="text-lg font-semibold line-clamp-1">{cigarette.name}</h3>
        <p className="text-gray-600 italic">{cigarette.type}</p>
        <p className="text-gray-600 line-clamp-1">{cigarette.description}</p>
        <Price
          price={cigarette.price}
          discountedPrice={cigarette.discountedPrice}
        />
        <div className="flex items-center gap-2">
          <Stars rating={cigarette.rating} />
          <div className="mt-2">({cigarette.rating}/5)</div>
        </div>
        <div className="flex flex-col">
          <div className="mt-2">
            <Availability availability={cigarette.availability} />
          </div>
          <div className="mt-2">
            <Tag tag={cigarette.tag} />
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
        <AddToWishlistButton product={cigarette} />
      </div>
    </div>
  </div>
);

export default CigaretteCard;
