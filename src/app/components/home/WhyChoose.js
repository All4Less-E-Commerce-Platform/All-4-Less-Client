import React, { useState } from "react";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { theme } from "@/themes/theme";

const conditions = [
  {
    id: 1,
    title: "Lorem ipsum dolor ametis",
    paragraph:
      "Nullam dui mauris, aliquam id luctus sit amet, tempor eu lacus. Cras faucibus, leo ut tristique tristique lectus nibh luctus ligula. Fusce imperdiet ligula lacus aliquam.",
  },
  {
    id: 2,
    title: "Fusce imperdiet ligula lacus",
    paragraph:
      "Lorem ipsum dolor ullam dui mauris, aliquam id luctus sit amet, tempor eu lacus. Cras faucibus, leo ut tristique tristique, eros risus euismod odio, quis mollis lectus nibh luctus ligula. Fusce imperdiet ligula lacus aliquam id luctus sit amet, tempor eu lacus.",
  },
  {
    id: 3,
    title: "Glavrida nulla ipsum dolor ametis",
    paragraph:
      "Nullam dui mauris, aliquam id luctus sit amet, tempor eu lacus. Cras faucibus, leo ut tristique tristique, eros risus euismod odio, quis mollis lectus nibh luctus ligula. Fusce imperdiet ligula lacus aliquam id luctus sit amet, tempor eu lacus.",
  },
  {
    id: 4,
    title: "Fusce imperdiet ligula lacus",
    paragraph:
      "Lorem ipsum dolor ullam dui mauris, aliquam id luctus sit amet, tempor eu lacus. Cras faucibus, leo ut tristique tristique, eros risus euismod odio, quis mollis lectus nibh luctus ligula. Fusce imperdiet ligula lacus aliquam id luctus sit amet, tempor eu lacus.",
  },
  {
    id: 5,
    title: "Glavrida nulla ipsum dolor ametis",
    paragraph:
      "Nullam dui mauris, aliquam id luctus sit amet, tempor eu lacus. Cras faucibus, leo ut tristique tristique, eros risus euismod odio, quis mollis lectus nibh luctus ligula. Fusce imperdiet ligula lacus aliquam id luctus sit amet, tempor eu lacus.",
  },
];

export function WhyChoose() {
  const [selectedId, setSelectedId] = useState(1);

  const handleToggle = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        height: "65vh !important",
        overflow: "hidden",
        p: 3,
        // mt: -5
      }}
    >
      {conditions.map(({ id, title, paragraph }) => (
        <Box key={id} sx={{ width: "100%", mb: 2 }}>
          <Box
            onClick={() => handleToggle(id)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              mb: 1,
              backgroundColor: theme.palette.primary.gray,
              borderRadius: "4px",
              p: "0 0.2em",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
            >
              {title}
            </Typography>
            <IconButton
              sx={{
                transform:
                  selectedId === id ? "rotate(180deg)" : "rotate(0deg)",
                transition: "all 0.3s ease",
                color: theme.palette.primary.main,
                fontSize: "12px",
                // backgroundColor: theme.palette.primary.gray,
                borderRadius: "5px",
                p: 0,
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>
          <Collapse in={selectedId === id} timeout="auto" unmountOnExit>
            <Typography
              variant="body2"
              sx={{ pl: 2, color: theme.palette.primary.main }}
            >
              {paragraph}
            </Typography>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
}
