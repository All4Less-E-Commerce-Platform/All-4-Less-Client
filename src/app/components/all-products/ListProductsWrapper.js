import { FlexColumnBox } from "@/styles/components.styled";
import React from "react";
import { ListProductCard } from "./ListProductCard";

export function ListProductsWrapper({ products }) {
  return (
    <FlexColumnBox>
      {products.length &&
        products.map((product) => (
          <ListProductCard key={product.id} product={product} />
        ))}
    </FlexColumnBox>
  );
}
