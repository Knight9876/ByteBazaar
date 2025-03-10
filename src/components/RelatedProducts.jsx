// src/components/RelatedProducts.jsx
import React from "react";
import GadgetList from "./GadgetList";

const RelatedProducts = ({ relatedProducts, onQuantityChange, onAddToCart }) => (
  <div className="mt-8">
    <h3 className="text-xl font-semibold mb-4 ml-2">Related Products</h3>
    <GadgetList
      gadgets={relatedProducts}
      onQuantityChange={onQuantityChange}
      onAddToCart={onAddToCart}
    />
  </div>
);

export default RelatedProducts;
