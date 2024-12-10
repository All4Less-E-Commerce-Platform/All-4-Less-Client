import React, { useState } from "react";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { theme } from "@/themes/theme";

const terms = [
  {
    id: 1,
    title: "Billing & Shipping",
    paragraph:
      "Suscipit purus vitae, hendrerit tortor eu rhoncus nulla, vitae laoreet est tortor malesuada. Vestibulum porta pellentesque bibendum. In consequat, massa sit amet euismod consequat lectus augue vehicula odio, nec laoreet purus orci sit amet neque.",
  },
  {
    id: 2,
    title: "Return policy",
    paragraph:
      "Vestibulum porta pellentesque bibendum. In consequat, massa sit amet euismod consequat, lectus augue lorem ipsum vehicula odio, nec laoreet purus orci sit amet neque.",
  },
  {
    id: 3,
    title: "Contact",
    paragraph: `
    Tel:
    +2 01027571825
    +2 01008429603
    Working hours:
    Mon - Fri: 10:00 - 19:00
    Sat, Sun: 11:00 - 17:00`,
  },
];

export function TermsPar() {
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
        width: "40%",
        height: "50vh !important",
        p: 3,
      }}
    >
      <Typography variant="h7" sx={{ mb: 2, fontWeight: "bolder" }}>
        USEFUL INFO
      </Typography>
      {terms.map(({ id, title, paragraph }) => (
        <Box key={id} sx={{ width: "100%", mb: 2 }}>
          <Box
            onClick={() => handleToggle(id)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
              mb: 1,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
            <IconButton
              sx={{
                transform:
                  selectedId === id ? "rotate(180deg)" : "rotate(0deg)",
                transition: "all 0.3s ease",
                color: theme.palette.primary.wBkg,
                fontSize: "12px",
                backgroundColor: theme.palette.primary.gray,
                borderRadius: "5px",
                p: 0,
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>
          <Collapse in={selectedId === id} timeout="auto" unmountOnExit>
            <Typography variant="body2" sx={{ pl: 2, color: "text.main" }}>
              {paragraph}
            </Typography>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
}
