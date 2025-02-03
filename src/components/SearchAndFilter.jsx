// components/SearchAndFilter.jsx
import React from "react";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";
import PriceRangeSlider from "./PriceRangeSlider";
import RatingFilter from "./RatingFilter";

const SearchAndFilter = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onFilterChange,
  categories,
  selectedRating,
  onRatingChange,
  priceRange,
  onPriceRangeChange,
}) => {
  return (
    <div>
      <SearchBar searchQuery={searchQuery} onSearchChange={onSearchChange} />
      <div className="hidden sm:flex items-center justify-between gap-4">
        <FilterDropdown
          selectedCategory={selectedCategory}
          onFilterChange={onFilterChange}
          categories={categories}
        />
        <RatingFilter
          selectedRating={selectedRating}
          onRatingChange={onRatingChange}
        />
        <PriceRangeSlider
          priceRange={priceRange}
          onPriceRangeChange={onPriceRangeChange}
        />
      </div>

      <div className="sm:hidden flex flex-col items-center justify-between">
        <div className="flex items-center gap-4">
          <FilterDropdown
            selectedCategory={selectedCategory}
            onFilterChange={onFilterChange}
            categories={categories}
          />
          <RatingFilter
            selectedRating={selectedRating}
            onRatingChange={onRatingChange}
          />
        </div>
        <div>
          <PriceRangeSlider
            priceRange={priceRange}
            onPriceRangeChange={onPriceRangeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;

