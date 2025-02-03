import React from "react";
import homePageReviews from "../utils/homePageReviews";
import TestimonialCard from "./TestimonialCard"; // Import the TestimonialCard component

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homePageReviews.map((review, index) => (
            <TestimonialCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
