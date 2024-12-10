/* eslint-disable import/no-duplicates */
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { theme } from "@/themes/theme"; // Assuming you have a custom theme
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export function ListProductCard({ product }) {
  const [hover, setHover] = useState(false);
  const [isInWish, setIsInWish] = useState(true);

  return (
    <Card
      sx={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "20em",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        "&:hover": { boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)" },
        mb: 2, // Space between cards
        p: 2,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image */}
      <CardMedia
        component="img"
        // height="150"
        // width="50"
        image={product.image}
        alt={product.title}
        sx={{
          transition: "transform 0.3s ease",
          transform: hover ? "scale(1.1)" : "scale(1)",
          objectFit: "cover",
          width: "40%",
          height: "100%",
          borderRadius: "5px",
        }}
      />

      {/* Content Section */}
      <Box sx={{ flex: 1, p: 2 }}>
        {/* Title and Price */}
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100%",
            p: 5,
            gap: 2,
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            {product.title}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              // mt: 1,
            }}
            variant="body1"
          >
            ${product.price}
            <Button
              color="text.secondary"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1.5,
                width: "12em",
              }}
              onClick={() => setIsInWish(!isInWish)}
            >
              {isInWish ? <FaHeart /> : <FaRegHeart />}
              {isInWish ? "In Wishlist" : "Add to Wishlist"}
            </Button>
          </Typography>
          <Typography component="div" sx={{ fontWeight: "bold" }}>
            {product.desc}
          </Typography>
          <Button
            sx={{
              backgroundColor: theme.palette.primary.orange,
              color: "white",
              "&:hover": { backgroundColor: "#D6413B" },
              fontWeight: "bold",
            }}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
}
