import React, { useState } from "react";
import cigaretteData from "../utils/cigaretteData";
import { useCartContext } from "../context/CartContext";
import SearchAndFilter from "../components/SearchAndFilter";
import CigaretteCategoryList from "../components/CigaretteCategoryList";
import { filterCigarettes } from "../utils/FilterLogic";
import AutocompleteSuggestions from "../components/AutocompleteSuggestions";

const Products = () => {
  const { addToCart } = useCartContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [quantities, setQuantities] = useState({});
  const [priceRange, setPriceRange] = useState([100, 45000]);
  const [suggestions, setSuggestions] = useState([]);

  // Handler functions
  const handleSearchChange = (query) => {
    setSearchQuery(query);

    // Update autocomplete suggestions
    const filteredNames = filteredCigarettes
      .flatMap((category) => category.cigarettes)
      .map((cigarette) => cigarette.name)
      .filter((name) => name.toLowerCase().includes(query.toLowerCase()));

    setSuggestions(filteredNames);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleQuantityChange = (id, newQuantity) => {
    setQuantities((prev) => ({ ...prev, [id]: newQuantity }));
  };

  const handlePriceChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
  };

  // Filter logic
  const filteredCigarettes = filterCigarettes(
    cigaretteData,
    searchQuery,
    selectedCategory,
    selectedRating,
    priceRange
  );

  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 relative">
      <SearchAndFilter
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onFilterChange={handleCategoryChange}
        categories={cigaretteData}
        selectedRating={selectedRating}
        onRatingChange={handleRatingChange}
        priceRange={priceRange}
        onPriceRangeChange={handlePriceChange}
      />

      {/* Autocomplete Suggestions */}
      <AutocompleteSuggestions
        suggestions={suggestions}
        searchQuery={searchQuery}
        onSuggestionClick={handleSuggestionClick}
      />

      <CigaretteCategoryList
        categories={filteredCigarettes}
        handleQuantityChange={handleQuantityChange}
        addToCart={(cigarette) =>
          addToCart({ ...cigarette, quantity: quantities[cigarette.id] || 1 })
        }
      />
    </div>
  );
};

export default Products;
