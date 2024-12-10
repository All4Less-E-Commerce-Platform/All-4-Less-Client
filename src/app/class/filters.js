export class ApplyFilters {
  constructor(products) {
    this.products = products; // Array of products
  }

  // Search Filter: Filters products based on a search term (in title or description)
  searchFilter(searchTerm) {
    if (!searchTerm) return this.products; // If no search term, return all products
    return this.products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }

  priceFilter(minPrice, maxPrice) {
    return this.products.filter((product) => product.price <= maxPrice);
  }

  // Size Filter: Filters products based on selected sizes
  sizeFilter(selectedSizes) {
    // If no sizes are selected, return all products
    if (selectedSizes.length === 0) return this.products;

    return this.products.filter((product) => {
      // Ensure the product has a `sizes` property and is an array
      if (Array.isArray(product.sizes)) {
        return product.sizes.some((size) =>
          selectedSizes.some(
            (selectedSize) => selectedSize.toLowerCase() === size.toLowerCase(),
          ),
        );
      }
      return false; // If `sizes` doesn't exist or isn't an array, return false
    });
  }

  // Combine Filters: Apply all filters (search, price, and size)
  applyAllFilters({ searchTerm, priceRange, selectedSizes }) {
    let filteredProducts = this.products;

    // Apply search filter
    filteredProducts = this.searchFilter(searchTerm);

    // Apply price filter
    filteredProducts = this.priceFilter(priceRange[0], priceRange[1]);

    // Apply size filter

    filteredProducts = this.sizeFilter(selectedSizes);

    return filteredProducts;
  }
}
