import React from "react";

const WhatSetsUsApart = () => {
  return (
    <div className="bg-gray-100 px-6 py-12 md:px-20 lg:px-40">
      <section className="max-w-7xl mx-auto text-lg text-justify">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          What Sets Us Apart
        </h2>
        <p className="text-gray-700 mb-10 text-center">
          At sutta.com, we prioritize quality, transparency, and a superior
          shopping experience to stand out from the crowd.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Wide Selection
            </h3>
            <p className="text-sm text-gray-600">
              Explore a diverse range of premium products curated to meet every
              preference and taste.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customer-Centric
            </h3>
            <p className="text-sm text-gray-600">
              Our customers are our top priority, with a support team ready to
              assist every step of the way.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Transparent Practices
            </h3>
            <p className="text-sm text-gray-600">
              We believe in full transparency, offering detailed product
              information for informed choices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Innovation
            </h3>
            <p className="text-sm text-gray-600">
              Staying ahead with the latest trends and technology to bring you
              the best shopping experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Quality Assurance
            </h3>
            <p className="text-sm text-gray-600">
              We source only the highest quality products to ensure satisfaction
              and reliability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast & Secure Delivery
            </h3>
            <p className="text-sm text-gray-600">
              Quick, secure delivery with options to track your order every step
              of the way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatSetsUsApart;
