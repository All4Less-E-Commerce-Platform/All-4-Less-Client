import { Box, Typography } from "@mui/material";
import React from "react";
// import { TimeBox } from './TimeBox';
import { theme } from "@/themes/theme";
import { TimeBox } from "./TimeBox";
import { PhoneBox } from "./PhoneBox";
// eslint-disable-next-line import/no-named-as-default
// import PhoneBox from './PhoneBox';

export function HeadLine() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "4em",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.palette.primary.main,
        p: "3.5em",
        borderTop: `0.1px solid ${theme.palette.primary.border}`,
        borderBottom: `0.1px solid ${theme.palette.primary.border}`,
      }}
    >
      <TimeBox />
      <Box
        sx={{
          p: "0 1.5em",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "5em",
            height: "4em",
            backgroundImage: `url('/Logo.png')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            zIndex: 1000,
            mt: 2,
          }}
        />
        <Typography variant="h5">All 4 Less</Typography>
      </Box>
      <PhoneBox />
    </Box>
  );
}
