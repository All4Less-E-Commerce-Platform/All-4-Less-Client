import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import { theme } from "@/themes/theme";

function AdsCard({ ad }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${ad.img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "calc(calc(100% / 3) - 1.8em)",
        height: "10em",
        display: "flex",
        alignItems: "center",
        p: 3,
      }}
    >
      <Link
        href={ad.link}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontSize: "1.7em",
          fontWeight: "bolder",
        }}
      >
        {ad.title}
        <span
          style={{
            fontSize: "18px",
            color: theme.palette.primary.orange,
          }}
        >
          {ad.supTitle}
        </span>
      </Link>
    </Box>
  );
}

export default AdsCard;
