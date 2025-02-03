export const filterCigarettes = (
    cigaretteData,
    searchQuery,
    selectedCategory,
    selectedRating,
    priceRange
  ) => {
    const filteredCategories = cigaretteData.filter((category) => {
      return selectedCategory === "all" || category.type === selectedCategory;
    });
  
    return filteredCategories
      .map((category) => {
        const filteredCigarettesInCategory = category.cigarettes.filter(
          (cigarette) => {
            const matchesSearch =
              cigarette.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              cigarette.price
                .toString()
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
            const matchesPrice =
              (cigarette.discountedPrice || cigarette.price) >= priceRange[0] &&
              (cigarette.discountedPrice || cigarette.price) <= priceRange[1];
  
            const matchesRating =
              selectedRating === "all" ||
              (selectedRating === "4" && cigarette.rating >= 4) ||
              (selectedRating === "4.5" && cigarette.rating >= 4.5) ||
              (selectedRating === "5" && cigarette.rating === 5);
  
            return matchesSearch && matchesPrice && matchesRating;
          }
        );
  
        return { type: category.type, cigarettes: filteredCigarettesInCategory };
      })
      .filter((category) => category.cigarettes.length > 0);
  };
  