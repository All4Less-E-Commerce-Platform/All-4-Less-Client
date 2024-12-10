import { FlexRowBox } from "@/styles/components.styled";
import React from "react";
import ProductCard from "../home/ProductCard";

export function GridProductsWrapper({ products }) {
  return (
    <FlexRowBox
      sx={{
        gap: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {products.length &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </FlexRowBox>
  );
}
