import React, { useEffect, useState } from "react";
import { Autocomplete, TextField, Chip } from "@mui/material";
import { theme } from "@/themes/theme"; // Ensure this points to your theme file

const options = [
  { label: "S", id: 1 },
  { label: "M", id: 2 },
  { label: "L", id: 3 },
  { label: "XL", id: 4 },
  { label: "XXL", id: 5 },
];

export function MultiSelectAutocomplete({ setSelectedSizes }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return (
    <Autocomplete
      multiple
      options={options}
      getOptionLabel={(option) => option.label}
      value={selectedOptions}
      onChange={(event, newValue) => {
        setSelectedOptions(newValue);
        setSelectedSizes(newValue.map((option) => option.label));
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          key={params.id}
          variant="outlined"
          label="Select Sizes"
          placeholder="Choose Size"
        />
      )}
      renderTags={(selected, getTagProps) =>
        selected.map((option, index) => (
          <Chip
            key={option.id}
            label={option.label}
            {...getTagProps({ index })}
            sx={{
              backgroundColor: theme.palette.primary.orange, // Set selected tag background
              color: theme.palette.primary.main,
              fontWeight: "bolder",
              borderRadius: "5px",
              "& .MuiChip-deleteIcon": {
                color: theme.palette.primary.main,
                opacity: 0.2,
                "&:hover": {
                  opacity: 1,
                },
              },
            }}
          />
        ))
      }
      ListboxProps={{
        sx: {
          maxHeight: "none",
          overflow: "visible",
        },
      }}
    />
  );
}
