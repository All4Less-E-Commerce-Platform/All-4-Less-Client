import { Box, Typography } from "@mui/material";
import React from "react";
import FooterCard from "./FooterCard";

const cards = [
  {
    id: 0,
    img: "/products/download.jpeg",
    link: "/",
    title: "High space sneakers",
    prevPrice: "350",
    price: "250",
  },
  {
    id: 1,
    img: "/products/-fe5c97a112f9.webp",
    link: "/",
    title: "Low sneakers",
    price: "450",
  },
  {
    id: 2,
    img: "/products/images34.jpeg",
    link: "/",
    title: "High space sneakers",
    from: "299.00",
    price: "250",
  },
];

function SealsPar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "25%",
        p: 3,
      }}
    >
      <Typography variant="h7" sx={{ mb: 2, fontWeight: "bolder" }}>
        SALE
      </Typography>
      {cards.length &&
        cards.map((Product) => (
          <FooterCard key={Product.id} product={Product} />
        ))}
    </Box>
  );
}

export default SealsPar;
