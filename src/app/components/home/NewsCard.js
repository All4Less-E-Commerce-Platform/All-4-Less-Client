import { theme } from "@/themes/theme";
import { Box, Typography } from "@mui/material";
import React from "react";

export function NewsCard({ news }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: 2,
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          width: "7em",
          height: "4.5em",
          backgroundImage: `url(${news.img})`,
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
          gap: 0.5,
        }}
      >
        <Typography
          sx={{
            color: theme.palette.primary.main,
            "&:hover": {
              color: theme.palette.primary.orange,
            },
          }}
        >
          {news.title}
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 1,
            opacity: 1,
            color: "rgb(60 57 57 / 32%)",
          }}
        >
          ${news.time}
        </Typography>
      </Box>
    </Box>
  );
}
