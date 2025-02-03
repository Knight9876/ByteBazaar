import React from "react";

const MissionAndValues = () => {
  return (
    <div className="bg-gray-100 px-6 py-12 md:px-20 lg:px-40">
      <section className="max-w-7xl mx-auto text-lg text-justify">
        <h2 className="text-3xl text-gray-800 mb-4 text-center font-bold">
          Our Mission & Values
        </h2>
        <p className="text-gray-700 mb-10 text-center">
          To provide a curated selection of quality products with a commitment
          to transparency, integrity, and customer satisfaction.
        </p>
        <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Quality Card */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/4 text-center">
            <h3 className="font-bold text-gray-800 text-xl mb-2">Quality</h3>
            <p className="text-sm text-gray-600">
              We prioritize high standards in every product we offer, ensuring
              an unparalleled shopping experience.
            </p>
          </div>
          {/* Customer Satisfaction Card */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/4 text-center">
            <h3 className="font-bold text-gray-800 text-xl mb-2">
              Customer Satisfaction
            </h3>
            <p className="text-sm text-gray-600">
              Our customers are our top priority, and we strive to meet their
              needs through every interaction.
            </p>
          </div>
          {/* Transparency Card */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/4 text-center">
            <h3 className="font-bold text-gray-800 text-xl mb-2">
              Transparency
            </h3>
            <p className="text-sm text-gray-600">
              We believe in clear and open communication, so you know exactly
              what you're purchasing.
            </p>
          </div>
          {/* Innovation Card */}
          <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/4 text-center">
            <h3 className="font-bold text-gray-800 text-xl mb-2">Innovation</h3>
            <p className="text-sm text-gray-600">
              Embracing new ideas and approaches to enhance our offerings and
              improve the customer journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionAndValues;
