import { Box } from "@mui/material";
import React from "react";
import { theme } from "@/themes/theme";
import AdsCard from "./AdsCard";

const ads = [
  {
    img: "/Ads/banshop12.jpg",
    title: "SEASONAL SALE",
    supTitle: "Winter Collection -50% OFF",
    link: "/Hoodies",
  },
  {
    img: "/Ads/banshop15.jpg",
    title: "NEW FOOTWEAR COLLECTION",
    supTitle: "Spring / Summer 2017",
    link: "/Hoodies",
  },
  {
    img: "/Ads/banshop07.jpg",
    title: "T-SHIRTS",
    supTitle: "New Trendy Prints",
    link: "/t-shirt",
  },
];

function AdsSection() {
  return (
    <Box
      sx={{
        height: "35vh",
        mt: 3,
        backgroundColor: theme.palette.primary.wBkg,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: "4.4em",
      }}
    >
      {ads.length && ads.map((add) => <AdsCard key={add.title} ad={add} />)}
    </Box>
  );
}

export default AdsSection;
