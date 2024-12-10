/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

"use client";

import { theme } from "@/themes/theme";
import { Box, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  GridProductsWrapper,
  SortBySelectBox,
  ListProductsWrapper,
  TypeError,
  SearchPar,
} from "@/app/components/all-products";

import { useData } from "../context/DataContext";
import { ApplyFilters } from "../class/filters";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { productData } = useData();

  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Slice products based on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productData.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const handleView = (val) => {
    if (val !== view) {
      setView(val);
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    setProducts(productData);
    setCount(currentProducts.length);
  }, [productData, currentProducts]);

  const handleFilters = ({ searchTerm, priceRange, selectedSizes }) => {
    const filterObj = new ApplyFilters(currentProducts);
    const filtered = filterObj.applyAllFilters({
      searchTerm,
      priceRange,
      selectedSizes,
    });

    setFilteredProducts(filtered);
    setCount(filteredProducts.length);
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.wBkg,
          width: "100%",
          height: "3em",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: "2em 4.5em",
          marginBottom: 6,
        }}
      >
        <Breadcrumb />
        <Typography
          variant="h7"
          sx={{
            fontWeight: "bolder",
            color: theme.palette.primary.main,
            opacity: 0.6,
            textTransform: "capitalize",
          }}
        >
          ALL PRODUCTS
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            color: "#000",
            width: "30%",
            minHeight: "200vh !important",
            borderRight: `1px solid ${theme.palette.primary.border2}`,
            p: "0 1.5em 0 5em",
          }}
        >
          <SearchPar handleFilters={handleFilters} />
        </Box>
        <Box
          sx={{
            color: "#000",
            width: "70%",
            p: 3,
          }}
        >
          <SortBySelectBox
            viewType={view}
            handleView={handleView}
            indexOfLastProduct={indexOfLastProduct}
            indexOfFirstProduct={indexOfFirstProduct}
            count={products.length}
          />
          {view === "grid" && count ? (
            <GridProductsWrapper products={currentProducts} />
          ) : view === "list" && currentProducts.length ? (
            <ListProductsWrapper products={currentProducts} />
          ) : (
            <TypeError message="No products found" />
          )}

          <Pagination
            count={Math.ceil(products.length / productsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 4,
            }}
          />
        </Box>
      </Box>
    </>
  );
}
