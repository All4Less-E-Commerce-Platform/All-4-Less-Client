"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Tab,
  Tabs,
  Card,
  CardMedia,
} from "@mui/material";
// eslint-disable-next-line import/no-extraneous-dependencies
import { TabPanel, TabContext } from "@mui/lab";
import Image from "next/image";
import { LoadingPage } from "@/app/components/Loading/LoadingPage";
import { fetcher } from "@/utils/axios";
import { theme } from "@/themes/theme";
import "../../../styles/models.stele.css";

export default function ProductDetails({ params: paramsPromise }) {
  const [loading, setLoading] = useState(false);
  const [product, setData] = useState(null);
  const [htmlContent, setHtmlContent] = useState(null);
  const params = React.use(paramsPromise);
  const [main, setMain] = useState(0);
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetcher.get(`/products/details/${id}`);
        if (!res.data.data) {
          window.location.href = "/404";
        }
        setData(res.data.data);
        console.log(res.data.data.layout_overview.layout_overview_html);

        setHtmlContent(res.data.data.layout_overview.layout_overview_html);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const [tabValue, setTabValue] = useState("details");
  const handleTabChange = (event, newValue) => setTabValue(newValue);

  if (loading) return <LoadingPage />;
  if (!product) return null;

  console.log(product.layout_overview);

  return (
    <Box
      padding={3}
      sx={{
        backgroundColor: theme.palette.primary.wBkg,
        color: "#000",
      }}
    >
      <Grid container spacing={3} gap={2}>
        <Grid item xs={12} md={6.8}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: theme.palette.primary.main,
              p: 2,
            }}
          >
            {product.title}
          </Typography>
          <Card sx={{ m: 0, p: 0 }}>
            <CardMedia
              component="img"
              height="400"
              image={`https:${product.images[main].replace("_220x220", "_720x720q50")}`}
              alt="Product Image"
              sx={{ objectFit: "contain" }}
            />
          </Card>
          <Box display="flex" marginTop={2} gap={2}>
            {product.images.map((img, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Card key={index} sx={{ width: 100 }}>
                <CardMedia
                  component="img"
                  height="100"
                  image={`https:${img}`}
                  alt={`Thumbnail ${index + 1}`}
                  onMouseEnter={() => setMain(index)}
                  sx={{
                    cursor: "pointer",
                  }}
                />
              </Card>
            ))}
          </Box>
        </Grid>

        {/* Product Information */}
        {/* <Grid
          item
          xs={12}
          md={5}
          sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", mt: 13 }}
        >
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: theme.palette.primary.orange,
              p: 2,
            }}
          >
            here will be the shipping address
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: theme.palette.primary.main,
            }}
          >
            Minimum order quantity: {product.moq}
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            gutterBottom
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bolder",
              color: theme.palette.primary.main,
              display: "flex",
              alignItems: "center",
              gap: 2,
              p: "0 0.5em 0.5em 0",
            }}
          >
            <span
              style={{
                fontSize: "0.8rem",
                // opacity: 0.5,
                opacity: 0.5,
              }}
            >
              price:
            </span>
            {(product.price &&
              product.price
                .replace("USD", "$")
                .trim()
                .replace("US", "")
                .trim()) ||
              `${product.minPrice.replace("USD", "$").trim().replace("US", "").trim()}`}
          </Typography>
          <Box
            sx={{
              width: "95%",
              borderTop: `1px solid #ccc`,
              mb: 1,
            }}
          />
          <Typography variant="body1" gutterBottom sx={{}}>
            {product.subject}
          </Typography>
          <Box marginTop={3} display="flex" gap={2}>
            <Button variant="contained" color="primary" size="large">
              Add to Cart
            </Button>
            <Button variant="outlined" color="secondary" size="large">
              Buy Now
            </Button>
          </Box>
        </Grid> */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", mt: 13 }}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </Grid>

      {/* Tabs for Additional Information */}
      <Box marginTop={4}>
        <TabContext value={tabValue}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            centered
          >
            <Tab label="Details" value="details" />
            <Tab label="Specifications" value="specifications" />
            <Tab label="Reviews" value="reviews" />
          </Tabs>
          <TabPanel value="details">
            <Typography variant="body1">{product.subject}</Typography>
          </TabPanel>
          <TabPanel value="specifications">
            <Typography variant="body1">{product.specifications}</Typography>
          </TabPanel>
          <TabPanel value="reviews">
            {/* {product.reviews.map((review, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Box key={product.id + index} marginBottom={2}>
                <Typography variant="subtitle1">{review.user}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {review.comment}
                </Typography>
              </Box>
            ))} */}
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}
