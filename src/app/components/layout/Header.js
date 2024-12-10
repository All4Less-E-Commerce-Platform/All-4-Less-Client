"use client";

import { theme } from "@/themes/theme";
import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { RiShoppingBagLine } from "react-icons/ri";
import { LiaSearchSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { NavBar } from "./NavBar";
import AccountMenu from "./AccountMenu";

export function Header() {
  const pathname = usePathname();

  const [currentPath, setCurrentPath] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    if (pathname) {
      setCurrentPath(pathname);
    }
  }, [pathname]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.palette.primary.main,
        m: 0,
        p: "0.8em 3em",
      }}
    >
      <NavBar currentPath={currentPath} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 2,
        }}
      >
        <Button
          sx={{
            color: "#fff",
            gap: 0.5,
            transition: "opacity 0.2s ease-in-out", // This applies the fade effect with ease-in-out timing
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
            o
          </span>
        </Button>
        <Button
          sx={{
            color: "#fff",
            textTransform: "none",
            gap: 0.5,
            transition: "opacity 0.2s ease-in-out", // This applies the fade effect with ease-in-out timing
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
        {session?.user ? (
          <AccountMenu />
        ) : (
          <>
            <Button
              sx={{
                color: "#fff",
                textTransform: "none",
                backgroundColor: theme.palette.primary.orange,
                m: 0,
                transition: "opacity 0.2s ease-in-out", // This applies the fade effect with ease-in-out timing
                "&:hover": {
                  opacity: 0.5,
                },
                p: 1,
                height: "2.5em",
              }}
              href="/auth/signup"
            >
              REGISTER
            </Button>
            <Button
              sx={{
                color: "#fff",
                textTransform: "none",
                m: 0,
                transition: "opacity 0.2s ease-in-out", // This applies the fade effect with ease-in-out timing
                "&:hover": {
                  opacity: 0.5,
                },
                p: 1,
                height: "2.5em",
              }}
              href="/auth/signin"
            >
              Log in
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
