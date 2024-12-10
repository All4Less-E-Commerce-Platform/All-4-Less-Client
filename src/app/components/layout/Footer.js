import { theme } from "@/themes/theme";
import { Box, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import LinksPar from "./LinksPar";
import SealsPar from "./SealsPar";
import { TermsPar } from "./TermsPar";

export function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          p: "3em 5em",
        }}
      >
        <LinksPar />
        <SealsPar />
        <TermsPar />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: `1px solid ${theme.palette.primary.gray}`,
          p: "0 4.3em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              backgroundImage: "url(/Logo.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "3em",
              height: "3em",
            }}
          />
          <Typography variant="h7">All 4 Less</Typography>
        </Box>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            p: 1,
            // width: '100%',
          }}
        >
          ©2024 All Rights Reserved. Designed by{" "}
          <Link
            style={{ color: theme.palette.primary.orange }}
            href="https://www.linkedin.com/in/alaa-ahmed-38a0ba287/"
          >
            Dev. Alaa Ahmad
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
