import { theme } from "@/themes/theme";
import { Box, Button, keyframes, styled, Typography } from "@mui/material";
import Link from "next/link";

export const Logo = styled("img")({
  width: "130px",
  height: "100%",
  marginRight: "-110px",
  marginLeft: "-150px",
  marginTop: "15px",
});

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Create the styled loader
export const Loader = styled("span")`
  width: 5.5em;
  height: 5.5em;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 8px solid #ff3d00;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 4px;
    top: 4px;
    border: 4px solid #fff;
    width: 2em;
    height: 2em;
    border-radius: 50%;
  }
`;

const sliding = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Adjust how far left it should go */
  }

`;

export const FooterLinks = styled(Link)({
  width: "100%",
  padding: "0.7em 0",
  fontWeight: "small",
  color: "#fff",
  transition: "all 0.3s linear",
  opacity: 1,
  "&:hover": {
    opacity: 0.5,
  },
});

export const SlideBox = styled(Box)({
  width: "100%",
  height: "12.5em", // Adjust height as needed
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url('https://demostore.estsolutions-eg.com/onlineshop-demo-6/wp-content/uploads/2014/09/patt-sale.png')`, // Replace with your image path
    backgroundSize: "contain", // Or adjust to "contain" based on preference
    backgroundColor: "rgb(236, 84, 78)",
    backgroundPosition: "center",
    width: "200%", // Make it wider than the container to allow sliding
    height: "100%",
    animation: `${sliding} 40s ease-in-out infinite alternate`, // Animation duration and easing
  },
});

export const ShippingGTerm = styled(Typography)({
  color: "#6b6f74",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const ShippingGTermNumber = styled("span")({
  backgroundColor: theme.palette.primary.orange,
  color: "#fff",
  width: "20px",
  height: "20px",
  padding: 5,
  borderRadius: "50%",
  fontSize: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const FlexColumnBox = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
});

export const FlexRowBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexWrap: "wrap",
});

export const CategoriesButton = styled(Button)(({ active }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  fontWeight: "bolder",
  backgroundColor: active
    ? theme.palette.primary.orange
    : theme.palette.primary.wBkg,
  color: active ? theme.palette.primary.wBkg : theme.palette.text.primary,
  padding: "0.5em 1em",
  "&:hover": {
    backgroundColor: active
      ? theme.palette.primary.orange
      : theme.palette.primary.border2,
    color: theme.palette.primary.main,
  },
}));

export const ApplyFiltersButton = styled(Button)({
  backgroundColor: theme.palette.primary.orange,
  fontWeight: "bolder",
  color: theme.palette.primary.wBkg,
  fontSize: "14px",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "#D73028",
  },
});
