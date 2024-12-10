import { Box } from "@mui/material";
import React from "react";
import { FeaturedTitle } from "./FeaturedTitle";
import ProductSlider from "./ProductSlider";

function IncomesProducts({ products }) {
  return (
    <Box
      sx={{
        p: "3.5em 2.5em",
        background: "#fff",
      }}
    >
      <FeaturedTitle title="SPRING/SUMER 2017 NEW INCOMES" />
      <ProductSlider products={products} />
    </Box>
  );
}

export default IncomesProducts;
