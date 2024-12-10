import React, { useState, useEffect, useRef } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { theme } from "@/themes/theme";
import ProductCard from "./ProductCard";

function ProductSlider({ products, itemsPerSlide = 4 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(itemsPerSlide);
  const sliderRef = useRef(null);

  // Adjust items per slide on window resize for responsiveness
  useEffect(() => {
    const updateVisibleItems = () => {
      const width = window.innerWidth;
      if (width < 600) setVisibleItems(1); // Mobile
      else if (width < 960) setVisibleItems(2); // Tablet
      else if (width < 1280) setVisibleItems(3); // Small desktops
      else setVisibleItems(itemsPerSlide); // Default
    };

    updateVisibleItems(); // Set initial value
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, [itemsPerSlide]);

  const nextSlide = () => {
    if (currentIndex < Math.ceil(products.length / visibleItems) - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Touch/Swipe support
  useEffect(() => {
    const slider = sliderRef.current;

    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      endX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (startX - endX > 50) nextSlide(); // Swipe left
      if (endX - startX > 50) prevSlide(); // Swipe right
    };

    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchmove", handleTouchMove);
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex]);

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        padding: "20px",
      }}
      ref={sliderRef}
    >
      {/* Slider Content */}
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
        }}
      >
        {products.map((product, index) => (
          <Box
            key={index}
            sx={{
              flex: `0 0 ${100 / visibleItems}%`,
              padding: "0 10px", // Spacing between cards
              boxSizing: "border-box",
            }}
          >
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>

      {/* Navigation Buttons */}
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "white",
          "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.8)" },
        }}
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <ArrowBackIosIcon style={{ color: theme.palette.primary.orange }} />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "white",
          "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.8)" },
        }}
        onClick={nextSlide}
        disabled={currentIndex === Math.ceil(products.length / visibleItems) - 1}
      >
        <ArrowForwardIosIcon style={{ color: theme.palette.primary.orange }} />
      </IconButton>
    </Box>
  );
}

export default ProductSlider;
