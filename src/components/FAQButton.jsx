// src/components/FAQButton.jsx
import React from "react";
import { Link } from "react-router-dom";

const FAQButton = () => {
  return (
    <Link
      to="/FAQs"
      className="fixed bottom-4 right-4 bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-cyan-500 hover:via-violet-600 hover:to-pink-700"
    >
      Help/FAQs?
    </Link>
  );
};

export default FAQButton;
