'use client'

import React, { useEffect, useState, useRef } from "react";
import { theme } from "@/themes/theme";
import { Box, Pagination, Typography } from "@mui/material";
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
import { LoadingPage } from '../components/Loading/LoadingPage';

export default function AllProducts() {
  const [allProducts, setAllProducts] = useState([]); // All products fetched
  const [visibleProducts, setVisibleProducts] = useState([]); // Products currently visible
  const [count, setCount] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false); // Tracks loading additional products
  const [loading, setLoading] = useState(false);

  const { setClothes, getClothes } = useData();

  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 30; // Number of products to load at a time
  const loaderRef = useRef(null); // Ref for the loader element at the bottom

  useEffect(() => {
    const fetchClothes = async () => {
      setLoading(true);
      const clothesData = await getClothes();
      setClothes(clothesData);
      setAllProducts(clothesData);
      setVisibleProducts(clothesData.slice(0, productsPerPage)); // Load initial 30 products
      setCount(clothesData.length);
      setLoading(false);
    };

    fetchClothes();
  }, [getClothes]);

  // Add more products when the user scrolls to the bottom
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !loadingMore) {
          loadMoreProducts();
        }
      },
      {
        root: null, // Default viewport
        rootMargin: "0px",
        threshold: 1.0, // Fully visible
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [loadingMore, visibleProducts]);

  const loadMoreProducts = () => {
    if (visibleProducts.length < allProducts.length) {
      setLoadingMore(true);
      const start = visibleProducts.length;
      const end = start + productsPerPage;
      setTimeout(() => {
        setVisibleProducts((prev) => [
          ...prev,
          ...allProducts.slice(start, end),
        ]);
        setLoadingMore(false);
      }, 500); // Simulate API call delay
    }
  };

  const handleView = (val) => {
    if (val !== view) {
      setView(val);
    }
  };

  const handleFilters = ({ searchTerm, priceRange, selectedSizes }) => {
    const filterObj = new ApplyFilters(visibleProducts);
    const filtered = filterObj.applyAllFilters({
      searchTerm,
      priceRange,
      selectedSizes,
    });

    setFilteredProducts(filtered);
    setCount(filteredProducts.length);
  };

useEffect(() =>{
  if(allProducts.length){
  console.log(allProducts[0]);

  }
})  


if(loading){
  return<LoadingPage/>
}

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
          Apparel & Accessories
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
            count={visibleProducts.length}
          />
          {view === "grid" && visibleProducts.length > 0 && (
            <GridProductsWrapper products={visibleProducts} />
          )}

          {view === "list" && visibleProducts.length > 0 && (
            <ListProductsWrapper products={visibleProducts} />
          )}

          {!visibleProducts.length && <TypeError message="No products found" />}

          {/* Loader element for lazy loading */}
          <Box ref={loaderRef} sx={{ textAlign: "center", mt: 4 }}>
            {loadingMore && <Typography>Loading more products...</Typography>}
          </Box>
        </Box>
      </Box>
    </>
  );
}
