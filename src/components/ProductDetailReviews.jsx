import React from "react";
import productDetailReviews from "../utils/productDetailReviews";
import TestimonialCard from "./TestimonialCard"; // Import the TestimonialCard component

const ProductDetailReviews = () => {
  return (
    <section className="py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productDetailReviews.map((review, index) => (
            <TestimonialCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailReviews;
