import {
  ApplyFiltersButton,
  CategoriesButton,
  FlexColumnBox,
} from "@/styles/components.styled";
import { theme } from "@/themes/theme";
import { Box, Input, InputAdornment, Typography } from "@mui/material";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { PriceSlider } from "./PriceSlider";
import { MultiSelectAutocomplete } from "./MultiSelectAutocomplete";

export function SearchPar({ handleFilters }) {
  const [activeCat, setActiveCat] = useState("");
  const { pathname } = usePathname();
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleCat = (cat) => {
    setActiveCat((prev) => {
      if (cat === prev) {
        return "";
      }
      return cat;
    });
  };

  const applyFilters = () => {
    handleFilters({
      searchTerm: search,
      priceRange,
      selectedSizes,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        gap: 3,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: "bolder",
            color: theme.palette.primary.main,
            opacity: 0.95,
            fontSize: "14px",
            mb: 2,
          }}
        >
          SEARCH
        </Typography>
        <Input
          disableUnderline
          sx={{
            width: "100%",
            outline: `1px solid ${theme.palette.primary.border2}`,
            p: "0.3em 1em",
          }}
          placeholder="Search Products..."
          onChange={(e) => setSearch(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <BiSearch
                style={{
                  transform: "scaleX(-1)",
                  fontWeight: "bolder",
                  fontSize: "18px",
                }}
              />
            </InputAdornment>
          }
        />
        <ApplyFiltersButton
          sx={{
            mt: 1,
          }}
          onClick={() => applyFilters()}
        >
          Apply
        </ApplyFiltersButton>
      </Box>
      {pathname === "/all-products" && (
        <FlexColumnBox
          sx={{
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bolder",
              color: theme.palette.primary.main,
              opacity: 0.95,
              fontSize: "14px",
              mb: 2,
            }}
          >
            CATEGORIES
          </Typography>
          <CategoriesButton
            onClick={() => handleCat("t-shirt")}
            active={activeCat === "t-shirt"}
          >
            T-Shirt
          </CategoriesButton>
          <CategoriesButton
            onClick={() => handleCat("hoodies")}
            active={activeCat === "hoodies"}
          >
            Hoodies
          </CategoriesButton>
          <CategoriesButton
            onClick={() => handleCat("footwear")}
            active={activeCat === "footwear"}
          >
            Footwear
          </CategoriesButton>
          <CategoriesButton
            onClick={() => handleCat("digital")}
            active={activeCat === "digital"}
          >
            Digital Goods
          </CategoriesButton>
          <CategoriesButton
            onClick={() => handleCat("seals")}
            active={activeCat === "seals"}
          >
            sale
          </CategoriesButton>
          <ApplyFiltersButton
            sx={{
              mt: 1,
            }}
            onClick={() => applyFilters()}
          >
            Apply
          </ApplyFiltersButton>
        </FlexColumnBox>
      )}
      <Box>
        <Typography
          sx={{
            fontWeight: "bolder",
            color: theme.palette.primary.main,
            opacity: 0.95,
            fontSize: "14px",
            mb: 2,
          }}
        >
          FILTER BT PRICE
        </Typography>
        <PriceSlider setPriceRange={setPriceRange} />
        <ApplyFiltersButton onClick={() => applyFilters()}>
          Apply
        </ApplyFiltersButton>
      </Box>
      <Box>
        <Typography
          sx={{
            fontWeight: "bolder",
            color: theme.palette.primary.main,
            opacity: 0.95,
            fontSize: "14px",
            mb: 2,
            textTransform: "capitalize",
          }}
        >
          FILTER BY SIZE
        </Typography>
        <MultiSelectAutocomplete setSelectedSizes={setSelectedSizes} />
        <ApplyFiltersButton
          sx={{
            mt: 2,
          }}
          onClick={() => applyFilters()}
        >
          Apply
        </ApplyFiltersButton>
      </Box>
    </Box>
  );
}
