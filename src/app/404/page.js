"use client";

import { Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { theme } from "@/themes/theme";
import { FlexColumnBox } from "@/styles/components.styled";
import { useEffect, useState } from "react";

export default function Custom404() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    isBrowser && (
      <FlexColumnBox
        sx={{
          textAlign: "center",
          padding: "50px",
          backgroundColor: theme.palette.primary.wBkg,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: theme.palette.primary.main,
          }}
        >
          404 - Page Not Found
        </Typography>
        <Image
          src="/errors/404.svg"
          alt="404 Error Illustration"
          width={400}
          height={400}
        />
        <Link
          href="/"
          style={{
            color: theme.palette.primary.main,
            textDecoration: "none",
            marginTop: "20px",
            display: "block",
            backgroundColor: theme.palette.primary.border2,
            width: "fit-content",
            padding: 8,
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          Go Back Home
        </Link>
      </FlexColumnBox>
    )
  );
}
