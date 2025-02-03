// components/SearchBar.jsx
import React from "react";

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder="Search cigarettes..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border rounded-lg p-2 w-full"
      />
    </div>
  );
};

export default SearchBar;