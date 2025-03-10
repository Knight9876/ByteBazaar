export const filterGadgets = (
    gadgetData,
    searchQuery,
    selectedCategory,
    selectedRating,
    priceRange
  ) => {
    const filteredCategories = gadgetData.filter((category) => {
      return selectedCategory === "all" || category.type === selectedCategory;
    });
  
    return filteredCategories
      .map((category) => {
        const filteredGadgetsInCategory = category.gadgets.filter(
          (gadget) => {
            const matchesSearch =
              gadget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              gadget.price
                .toString()
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
            const matchesPrice =
              (gadget.discountedPrice || gadget.price) >= priceRange[0] &&
              (gadget.discountedPrice || gadget.price) <= priceRange[1];
  
            const matchesRating =
              selectedRating === "all" ||
              (selectedRating === "4" && gadget.rating >= 4) ||
              (selectedRating === "4.5" && gadget.rating >= 4.5) ||
              (selectedRating === "5" && gadget.rating === 5);
  
            return matchesSearch && matchesPrice && matchesRating;
          }
        );
  
        return { type: category.type, gadgets: filteredGadgetsInCategory };
      })
      .filter((category) => category.gadgets.length > 0);
  };
  