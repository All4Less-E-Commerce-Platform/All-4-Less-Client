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
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { theme } from "@/themes/theme";

function ProductCard({ product }) {
  const [hover, setHover] = useState(false);
  const [isInWish, setIsInWish] = useState(true);

  return (
    <Card
      sx={{
        position: "relative",
        maxWidth: 270,
        backgroundColor: theme.palette.primary.wBkg,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        "&:hover": { boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)" },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image */}
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.subject}
        sx={{
          transition: "transform 0.3s ease",
          transform: hover ? "scale(1.1)" : "scale(1)",
          cursor: "pointer",
        }}
        onClick={() => {
          window.location.href = `/product/${product.id}`;
        }}
      />

      {/* Title and Price */}
      <CardContent sx={{ padding: "2em 1.5em", mb: 5 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            cursor: "pointer",
            textDecoration: "none",
            transition: "color 0.2s ease",
            fontSize: "0.8em",
            "&:hover": {
              color: theme.palette.primary.orange,
            },
          }}
          onClick={() => {
            window.location.href = `/product/${product.id}`;
          }}
        >
          {product.subject}
        </Typography>
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          variant="body1"
          color="text.secondary"
        >
          {(product.price &&
            product.price
              .replace("USD", "$")
              .trim()
              .replace("US", "")
              .trim()) ||
            `${product.minPrice.replace("USD", "$").trim().replace("US", "").trim()}`}
          <Button
            color="text.secondary"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1.5,
              // color: 'text.secondary'
            }}
            onClick={() => setIsInWish(!isInWish)}
          >
            {isInWish ? <FaHeart /> : <FaRegHeart />}
            {isInWish ? "Its In" : "Add To"} Wishlist
          </Button>
        </Typography>
      </CardContent>

      {/* Add to Cart Button */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "10px",
          backgroundColor: theme.palette.primary.main,
          display: "flex",
          justifyContent: "center",
        }}
      >
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
      </Box>
    </Card>
  );
}

export default ProductCard;
