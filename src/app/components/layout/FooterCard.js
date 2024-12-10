import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

function FooterCard({ product }) {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        p: "0.8em 0",
        gap: 2,
        cursor: "pointer",
      }}
      onClick={() => router.push(product.link)}
    >
      <Box
        sx={{
          width: "3.5em",
          height: "3.5em",
          backgroundImage: `url(${product.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Typography>{product.title}</Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 1,
            opacity: 1,
          }}
        >
          {product.prevPrice && (
            <span style={{ textDecoration: "line-through", opacity: 0.5 }}>
              ${product.prevPrice}
            </span>
          )}
          {product.from && <span>${product.from} - </span>}${product.price}
        </Typography>
      </Box>
    </Box>
  );
}

export default FooterCard;
