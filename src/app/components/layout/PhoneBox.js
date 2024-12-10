import { Box, Typography } from "@mui/material";
import React from "react";
import { IoPhonePortraitSharp } from "react-icons/io5";

export function PhoneBox() {
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
      <IoPhonePortraitSharp
        style={{
          color: "#EF524A",
          fontSize: "2em",
        }}
      />
      <Box>
        <Typography>+970 594149120</Typography>
        <Typography>+970 593235447</Typography>
      </Box>
    </Box>
  );
}
