import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { theme } from "@/themes/theme";

const images = [
  {
    url: "/Home/fashionable-men-winter-collection-display-boutique-generated-by-ai_188544-40259.avif",
    label: "HOODIES",
    desc: () => (
      <Typography variant="h4" sx={{ fontSize: "40px" }}>
        COOL{" "}
        <span style={{ color: theme.palette.primary.orange, zIndex: 1 }}>
          /
        </span>{" "}
        WARM{" "}
        <span style={{ color: theme.palette.primary.orange, zIndex: 1 }}>
          /
        </span>{" "}
        COYS
      </Typography>
    ),
    button: {
      text: "CHECKOUT NEW COLLECTION!",
    },
  },
  {
    url: "/Home/652fdfe74571a8245f885d99_ExtremeScreenPrintsInc.-270138-Best-Shirt-Material-Blogbanner1.jpg",
    label: "T-SHIRT",
    desc: () => <Typography variant="h5">SUMMER COLLECTION</Typography>,
    button: {
      text: "FIND YOUR PERFECT TEE!",
    },
  },
  {
    url: "/Home/how_to_lace_sneakers_mh_d_221_1062527_320f9893b3.avif",
    label: "sneakers",
    desc: () => <Typography variant="h4">BOMBASTIC COLORS</Typography>,
    button: {
      text: "HURRY UP & GARB YOUR PAIR!",
    },
  },
];

export function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Images with Transition */}
      {images.map((image, index) => (
        <Box
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          sx={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: currentIndex === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            transform: `translateX(${(index - currentIndex) * 100}%)`,
          }}
        />
      ))}

      {/* Text Overlay */}
      <Box
        key={currentIndex} // Unique key to re-trigger animation on index change
        sx={{
          position: "absolute",
          zIndex: 1,
          textAlign: "center",
          color: "white",
          animation: "popUp 0.6s ease-out", // Apply pop-up animation
          "@keyframes popUp": {
            "0%": { opacity: 0.8, transform: "scale(0.5)" },
            "100%": { opacity: 1, transform: "scale(1)" },
          },
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>
          {images[currentIndex].label.toLocaleUpperCase()}
        </Typography>
        <Box>{images[currentIndex].desc()}</Box>
        <Button
          sx={{
            mt: 2,
            backgroundColor: theme.palette.primary.orange,
            borderRadius: 0.1,
            p: "1em 2em",
            fontWeight: "bolder",
            color: theme.palette.primary.wBkg,
            "&:hover": {
              backgroundColor: "#D6413B",
            },
          }}
        >
          {images[currentIndex].button.text}
        </Button>
      </Box>

      {/* Left Arrow */}
      <IconButton
        onClick={handlePrevious}
        sx={{
          position: "absolute",
          left: 16,
          color: "white",
          zIndex: 1,
        }}
      >
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        onClick={handleNext}
        sx={{ position: "absolute", right: 16, color: "white", zIndex: 1 }}
      >
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}

// export default BackgroundSlider;
