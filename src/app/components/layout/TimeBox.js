import { Box, Typography } from "@mui/material";
import React from "react";
import { FaRegClock } from "react-icons/fa6";

export function TimeBox() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1.2,
        width: "14em",
      }}
    >
      <FaRegClock
        style={{
          color: "#EF524A",
          fontSize: "2em",
        }}
      />
      <Box>
        <Typography
          sx={{
            fontWeight: "bolder",
          }}
        >
          Mon - Fri: 10:00 - 19:00
        </Typography>
        <Typography
          sx={{
            fontWeight: "bolder",
          }}
        >
          Sat, Sun: 11:00 - 17:00
        </Typography>
      </Box>
    </Box>
  );
}
