import { SlideBox } from "@/styles/components.styled";
import { theme } from "@/themes/theme";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

export function UnknownSection() {
  return (
    <SlideBox
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 6,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          p: "0 4em",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bolder",
          }}
          variant="h4"
        >
          TOTAL SALE: -50% for all winter collection!
        </Typography>
        <Button
          sx={{
            border: `3px solid ${theme.palette.primary.wBkg}`,
            width: "18em",
            p: 1,
            borderRadius: "0",
            fontSize: "1.2em",
            color: theme.palette.primary.wBkg,
            fontWeight: "bolder",
            "&:hover": {
              backgroundColor: theme.palette.primary.wBkg,
              color: theme.palette.primary.orange,
            },
          }}
          href="/sale"
        >
          BROWSE SALE PRODUCTS
        </Button>
      </Box>
    </SlideBox>
  );
}
