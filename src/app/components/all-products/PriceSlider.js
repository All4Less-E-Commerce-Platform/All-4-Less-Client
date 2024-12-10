import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { theme } from "@/themes/theme";

export function PriceSlider({ setPriceRange }) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={(value) => `${value}°C`}
        valueLabelDisplay="auto"
        step={50}
        onChange={(e) => {
          if (e.target.value === 0) {
            setPriceRange([0, 5000]);
          } else {
            setPriceRange([0, e.target.value]);
          }
        }}
        marks
        min={0}
        max={5000}
        sx={{
          color: theme.palette.primary.main, // Change thumb and track color
          "& .MuiSlider-thumb": {
            backgroundColor: theme.palette.primary.orange, // Thumb color
          },
          "& .MuiSlider-track": {
            backgroundColor: theme.palette.primary.main, // Track color
          },
          "& .MuiSlider-rail": {
            backgroundColor: theme.palette.primary.main, // Rail color
          },
        }}
      />
    </Box>
  );
}
