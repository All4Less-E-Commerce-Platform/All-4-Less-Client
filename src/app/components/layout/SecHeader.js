import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { RiShoppingBagLine } from "react-icons/ri";
import { theme } from "@/themes/theme";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { NavBar } from "./NavBar";

export function SecHeader({ displayed }) {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.palette.primary.main,
        position: "fixed",
        top: 0,
        zIndex: 100,
        width: "100%",
        m: 0,
        p: "0.5em 3em",
        display: "flex",
        opacity: displayed ? 1 : 0,
        transform: displayed ? "translateY(0)" : "translateY(-100%)",
        transition: "opacity 0.5s ease, transform 0.5s ease", // Smooth transitions for opacity and position
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 1,
        }}
      >
        <Box
          sx={{
            backgroundImage: "url(/Logo.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "4em",
            height: "3em",
          }}
        />
        <Typography variant="h7">All 4 less</Typography>
      </Box>
      <NavBar currentPath={currentPath} />
      <Box>
        <Button
          sx={{
            color: "#fff",
            gap: 0.5,
            transition: "opacity 0.2s ease-in-out",
            "&:hover": {
              opacity: 0.5,
            },
          }}
        >
          <RiShoppingBagLine
            style={{
              color: theme.palette.primary.gray,
              fontSize: "1.4em",
              fontWeight: "bolder",
            }}
          />
          $0.00
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              fontSize: "9px",
              color: theme.palette.primary.gray,
              backgroundColor: theme.palette.primary.orange,
              width: "18px",
              height: "18px",
            }}
          >
            0
          </span>
        </Button>
        <Button
          sx={{
            color: "#fff",
            textTransform: "none",
            gap: 0.5,
            transition: "opacity 0.2s ease-in-out",
            "&:hover": {
              opacity: 0.5,
            },
          }}
        >
          <LiaSearchSolid
            style={{
              color: theme.palette.primary.gray,
              fontSize: "1.4em",
              fontWeight: "bolder",
            }}
          />
          Search
        </Button>
      </Box>
    </Box>
  );
}
