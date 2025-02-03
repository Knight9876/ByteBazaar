import React, { useState } from "react";
import FAQ from "../utils/FAQs"; // Adjust the import path as necessary

const FAQs = () => {
  // State to track which FAQ is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    // Toggle the FAQ section
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 mt-20">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions (FAQ)</h1>
      <div className="space-y-4">
        {FAQ.map((faq, index) => (
          <div key={index} className={`border-b border-gray-300 pb-2 ${index === 0 ? 'border-t pt-4' : ''}`}>
            <h2 
              className="font-semibold cursor-pointer text-lg" 
              onClick={() => toggleFAQ(index)}
            >
              {`${faq.question}`}
            </h2>
            <div
              className={`mt-2 transition-max-height duration-300 ease-in-out overflow-hidden ${
                expandedIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
