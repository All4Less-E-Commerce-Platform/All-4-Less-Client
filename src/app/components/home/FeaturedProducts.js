import { Box } from "@mui/material";
import React from "react";
import { FeaturedTitle } from "./FeaturedTitle";
import ProductSlider from "./ProductSlider";

export function FeaturedProducts({ products }) {
  return (
    <Box
      sx={{
        p: "3.5em 2.5em",
        background: "#fff",
      }}
    >
      <FeaturedTitle title="FEATURED PRODUCTS" />
      {products.length && <ProductSlider products={products} />}
    </Box>
  );
}
