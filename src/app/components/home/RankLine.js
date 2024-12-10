import { Box } from "chakra-ui";
import React from "react";
import { FeaturedTitle } from "./FeaturedTitle";
import ProductSlider from "./ProductSlider";

function RankLine({ rank }) {
  // console.log(rank);

  return (
    <Box
      sx={{
        p: "3.5em 2.5em",
        background: "#fff",
      }}
    >
      <FeaturedTitle title={rank.rankName} />
      <ProductSlider products={rank.productList} />
    </Box>
  );
}

export default RankLine;
