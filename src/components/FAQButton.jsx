// src/components/FAQButton.jsx
import React from "react";
import { Link } from "react-router-dom";

const FAQButton = () => {
  return (
    <Link
      to="/FAQs"
      className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg max-w-9xl hover:bg-blue-700 transition duration-300"
    >
      Help/FAQs?
    </Link>
  );
};

export default FAQButton;
