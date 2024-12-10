import { FooterLinks } from "@/styles/components.styled";
import { theme } from "@/themes/theme";
import { Box } from "@mui/material";
import React from "react";

function LinksPar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        width: "25%",
      }}
    >
      <FooterLinks
        sx={{
          borderBottom: `1px solid ${theme.palette.primary.gray}`,
        }}
        href="sss"
      >
        About store
      </FooterLinks>
      <FooterLinks
        sx={{
          borderBottom: `1px solid ${theme.palette.primary.gray}`,
        }}
        href="sss"
      >
        Blog
      </FooterLinks>
      <FooterLinks
        sx={{
          borderBottom: `1px solid ${theme.palette.primary.gray}`,
        }}
        href="sss"
      >
        Testimonials
      </FooterLinks>
      <FooterLinks
        sx={{
          borderBottom: `1px solid ${theme.palette.primary.gray}`,
        }}
        href="sss"
      >
        Q & A
      </FooterLinks>
      <FooterLinks
        sx={{
          borderBottom: `1px solid ${theme.palette.primary.gray}`,
        }}
        href="sss"
      >
        Contact
      </FooterLinks>
      <FooterLinks
        sx={{
          borderBottom: `1px solid ${theme.palette.primary.gray}`,
        }}
        href="sss"
      >
        My Account
      </FooterLinks>
      <FooterLinks href="sss">Order tracking</FooterLinks>
    </Box>
  );
}

export default LinksPar;
