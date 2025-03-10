// src/components/FeaturedProducts.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import featuredProducts from "../utils/featuredProducts";
import { useCartContext } from "../context/CartContext";
import { useWishlistContext } from "../context/WishlistContext";
import GadgetCard from "./GadgetCard";

const FeaturedProducts = () => {
  const { addToCart } = useCartContext();
  const { addToWishlist } = useWishlistContext(); // Access addToWishlist from context
  const [quantities, setQuantities] = useState({}); // State to store quantity for each product

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    addToCart({ ...product, quantity });
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.name}`} // Redirect to the product detail page
              className="block" // Ensure it behaves like a block element for full clickable area
            >
              <GadgetCard
                gadget={product}
                quantity={quantities[product.id] || 1} // Pass current quantity or default to 1
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(product.id, newQuantity)
                } // Update quantity for this product
                onAddToCart={() => handleAddToCart(product)} // Add this product to cart
                onAddToWishlist={() => handleAddToWishlist(product)} // Use handleAddToWishlist function
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
