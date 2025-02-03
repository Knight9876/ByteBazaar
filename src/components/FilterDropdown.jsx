// FilterDropdown.jsx
import React from "react";

const FilterDropdown = ({ selectedFilter, onFilterChange, categories }) => {
  return (
    <div className="mb-4 text-sm sm:text-base">
      <select
        value={selectedFilter}
        onChange={onFilterChange}
        className="border rounded-lg p-2"
      >
        <option value="all">All Categories</option>
        {categories.map((category) => (
          <option key={category.type} value={category.type}>
            {category.type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
