import React, { useState, useEffect } from "react";
import {
  Box,
  Select,
  MenuItem,
  Typography,
  Button,
  InputLabel,
  FormControl,
} from "@mui/material";
import { theme } from "@/themes/theme"; // Ensure this points to your theme file
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";

const sortOptions = [
  { label: "Default sorting", value: "menu_order" },
  { label: "Sort by popularity", value: "popularity " },
  { label: "Sort by average rating", value: "rating" },
  { label: "Sort by latest", value: "date" },
  { label: "Sort by price: low to high", value: "price" },
  { label: "Sort by price: high to low", value: "price-desc" },
];

export function SortBySelectBox({
  handleView,
  viewType,
  count,
  indexOfFirstProduct,
  indexOfLastProduct,
}) {
  const [sortBy, setSortBy] = useState("menu_order");

  useEffect(() => {
    if (!sortBy) {
      setSortBy(sortOptions[0].value);
    }
  }, [sortBy]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        mb: 3,
      }}
    >
      {/* Left side: Sort by select box */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <FormControl sx={{ minWidth: 250 }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            label="Sort By"
          >
            {sortOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ marginRight: 2, opacity: 0.7 }}>
          {`Showing ${indexOfFirstProduct + 1}–${indexOfLastProduct < count ? indexOfLastProduct : count} of ${count} results`}
        </Typography>
        <Button
          sx={{
            marginRight: 1,
            backgroundColor:
              viewType === "grid" ? theme.palette.primary.main : "transparent",
            color:
              viewType === "grid"
                ? theme.palette.primary.contrastText
                : theme.palette.primary.main,
          }}
          onClick={() => handleView("grid")}
        >
          <BsFillGrid3X3GapFill />
        </Button>
        <Button
          sx={{
            backgroundColor:
              viewType === "list" ? theme.palette.primary.main : "transparent",
            color:
              viewType === "list"
                ? theme.palette.primary.contrastText
                : theme.palette.primary.main,
          }}
          onClick={() => handleView("list")}
        >
          <FaList />
        </Button>
      </Box>
    </Box>
  );
}
