import React from "react";

const WhatSetsUsApart = () => {
  return (
    <div className="bg-gray-100 px-6 py-12 md:px-20 lg:px-40">
      <section className="max-w-7xl mx-auto text-lg text-justify">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          What Sets Us Apart
        </h2>
        <p className="text-gray-700 mb-10 text-center">
          We bring you the latest in technology with a commitment to quality,
          innovation, and an effortless shopping experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Vast Selection
            </h3>
            <p className="text-sm text-gray-600">
              Discover a wide range of cutting-edge gadgets, from smartphones to
              smart accessories.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customer-Centric Approach
            </h3>
            <p className="text-sm text-gray-600">
              Your satisfaction is our priority, with dedicated support to
              assist at every step.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Transparency & Trust
            </h3>
            <p className="text-sm text-gray-600">
              Clear product details, honest pricing, and verified reviews for
              confident shopping.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Tech Innovation
            </h3>
            <p className="text-sm text-gray-600">
              Stay ahead with the latest trends, premium gadgets, and next-gen
              technology.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Quality Assurance
            </h3>
            <p className="text-sm text-gray-600">
              We handpick every product, ensuring reliability, performance, and
              top-tier craftsmanship.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast & Secure Shipping
            </h3>
            <p className="text-sm text-gray-600">
              Enjoy quick, reliable delivery with real-time tracking and secure
              packaging.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatSetsUsApart;
