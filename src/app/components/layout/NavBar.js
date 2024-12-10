import { theme } from "@/themes/theme";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

export function NavBar({ currentPath }) {
  return (
    <Box
      sx={{
        width: "60%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        listStyle: "none",
        fontWeight: "bolder",
      }}
    >
      <Link
        style={{
          padding: "0.6em",
          backgroundColor: currentPath === "/" && theme.palette.primary.orange,
        }}
        href="/"
      >
        Home
      </Link>
      <Link
        style={{
          padding: "0.6em",
          backgroundColor:
            currentPath === "/all-products" && theme.palette.primary.orange,
        }}
        href="/all-products"
      >
        ALL PRODUCTS
      </Link>
      <Link
        style={{
          padding: "0.6em",
          backgroundColor:
            currentPath === "/clothes" && theme.palette.primary.orange,
        }}
        href="/clothes"
      >
        CLOTHES
      </Link>
      <Link
        style={{
          padding: "0.6em",
          backgroundColor:
            currentPath === "/hoodies" && theme.palette.primary.orange,
        }}
        href="/hoodies"
      >
        HOODIES
      </Link>
      <Link
        style={{
          padding: "0.6em",
          backgroundColor:
            currentPath === "/footwear" && theme.palette.primary.orange,
        }}
        href="/footwear"
      >
        FOOTWEAR
      </Link>
      <Link
        style={{
          padding: "0.6em",
          backgroundColor:
            currentPath === "/consumer-electronics" && theme.palette.primary.orange,
        }}
        href="/consumer-electronics"
      >
        ELECTRONICS
      </Link>
      <Link
        style={{
          padding: "0.6em",
          backgroundColor:
            currentPath === "/sale" && theme.palette.primary.orange,
        }}
        href="/sale"
      >
        SALE!
      </Link>
    </Box>
  );
}
