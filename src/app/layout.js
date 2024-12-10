/* eslint-disable import/extensions */

"use client";

// import { ChakraProvider } from '@chakra-ui/react';
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
// import { theme } from "@/themes/theme";
import { DataProvider, useData } from "./context/DataContext";
import { RootLayouts } from "./components/layout/layout";
// eslint-disable-next-line import/no-unresolved
import { theme } from "@/themes/theme";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>All 4 Less</title>
        <link rel="icon" href="/FavIcon.png" sizes="5x5" />
      </head>
      <body
        style={{ backgroundColor: "#fff" }}
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <SessionProvider>
          <DataProvider>
            <ThemeProvider theme={theme}>
              {/* {loading} */}
              {!isBrowser ? null : <RootLayouts>{children}</RootLayouts>}
            </ThemeProvider>
          </DataProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
