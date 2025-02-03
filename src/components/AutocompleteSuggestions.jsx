import React from "react";

const AutocompleteSuggestions = ({ suggestions, searchQuery, onSuggestionClick }) => {
  if (!searchQuery || suggestions.length === 0) return null;

  return (
    <ul className="absolute bg-white border border-gray-300 rounded-lg max-h-96 overflow-y-auto z-10 max-w-7xl top-36 left-0 right-0 mx-auto px-4 sm:px-6 lg:px-8">
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          className="p-2 cursor-pointer hover:bg-gray-200"
          onClick={() => onSuggestionClick(suggestion)}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default AutocompleteSuggestions;
