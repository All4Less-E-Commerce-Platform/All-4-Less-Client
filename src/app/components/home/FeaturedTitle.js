import { theme } from "@/themes/theme";
import { Box, Typography } from "@mui/material";
import React from "react";
import { FaStar } from "react-icons/fa6";

export function FeaturedTitle({ title }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bolder",
          color: theme.palette.primary.main,
          fontSize: "1.1em",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mt: 0.5,
        }}
      >
        <Box
          sx={{
            width: "7.5em",
            height: "0px",
            borderBottom: "2px solid theme.palette.primary.border2",
          }}
        />
        <FaStar style={{ color: "theme.palette.primary.border2" }} />
        <Box
          sx={{
            width: "7.5em",
            height: "0px",
            borderBottom: "2px solid theme.palette.primary.border2",
          }}
        />
      </Box>
    </Box>
  );
}
