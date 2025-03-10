import React, { useState } from "react";
import gadgetData from "../utils/gadgetData";
import { useCartContext } from "../context/CartContext";
import SearchAndFilter from "../components/SearchAndFilter";
import GadgetCategoryList from "../components/GadgetCategoryList";
import { filterGadgets } from "../utils/FilterLogic";
import AutocompleteSuggestions from "../components/AutocompleteSuggestions";

const Products = () => {
  const { addToCart } = useCartContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [quantities, setQuantities] = useState({});
  const [priceRange, setPriceRange] = useState([500, 200000]);
  const [suggestions, setSuggestions] = useState([]);

  // Handler functions
  const handleSearchChange = (query) => {
    setSearchQuery(query);

    // Update autocomplete suggestions
    const filteredNames = filteredGadgets
      .flatMap((category) => category.gadgets)
      .map((gadget) => gadget.name)
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
  const filteredGadgets = filterGadgets(
    gadgetData,
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
        categories={gadgetData}
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

      <GadgetCategoryList
        categories={filteredGadgets}
        handleQuantityChange={handleQuantityChange}
        addToCart={(gadget) =>
          addToCart({ ...gadget, quantity: quantities[gadget.id] || 1 })
        }
      />
    </div>
  );
};

export default Products;
