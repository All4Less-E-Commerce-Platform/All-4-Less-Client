import { ShippingGTerm, ShippingGTermNumber } from "@/styles/components.styled";
import React from "react";

export function TermsItem({ title, id }) {
  return (
    <ShippingGTerm
      sx={{
        gap: 0.8,
      }}
    >
      <ShippingGTermNumber>{id + 1}</ShippingGTermNumber>
      {title}
    </ShippingGTerm>
  );
}
