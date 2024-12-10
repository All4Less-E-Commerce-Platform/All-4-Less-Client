import { Box, Typography } from "@mui/material";
import React from "react";
import { FeaturedTitle } from "./FeaturedTitle";
import { NewsCard } from "./NewsCard";
import { TermsItem } from "./TermsItem";
import { WhyChoose } from "./WhyChoose";

const newsList = [
  {
    id: 0,
    img: "/news/n-im13-1-200x140.jpg",
    title: "Etiam dui libero tempo",
    time: "April 25, 2014",
  },
  {
    id: 1,
    img: "/news/n-im55-1-200x140.jpg",
    title: "Lorem dolor ipsum",
    time: "March 28, 2014",
  },
  {
    id: 2,
    img: "/news/n-im02-1-200x140.jpg",
    title: "Duis ornare at lobortis",
    time: "August 6, 2013",
  },
  {
    id: 3,
    img: "/news/n-im00-1-200x140.jpg",
    title: "Curabitur ut aliquam arcu",
    time: "August 5, 2013",
  },
];

const terms = [
  { id: 0, title: "Lorem ipsum dolor glavrida;" },
  { id: 1, title: "Quisque egestas magna non ligula;" },
  { id: 2, title: "Ras faucibus – leo ut fortristique;" },
  { id: 3, title: "Glavrida ipsum dolour from glavrida;" },
  { id: 4, title: "Dolor amet egestas magna non ligula;" },
  { id: 5, title: "Anemt leo ut from tristique." },
];

// TermsItem

export function InfoSection() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        p: 8,
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "32%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          // color: theme.palette.primary.main,
          gap: 2,
        }}
      >
        <FeaturedTitle title="RECENT NEWS" />
        {newsList.length &&
          newsList.map((news) => <NewsCard key={news.id} news={news} />)}
      </Box>
      <Box
        sx={{
          width: "32%",
        }}
      >
        <FeaturedTitle title="SHIPPING & RETURN POLICY" />
        <Typography
          sx={{
            color: "#6b6f74",
          }}
        >
          Lorem ipsum dolor consectetur adipiscing elit. Quisque egestas magna
          non ligula interdum mollis. Nullam sit amet, tempor eu lacus. Cras
          faucibus, leo ut tristique. Cras faucibus, leo ut tristique tristique
          lectus nibh luctus ligula. Fusce imperdiet ligula lacus aliquam.
        </Typography>
        <br />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          {terms.length &&
            terms.map((term) => (
              <TermsItem key={term.id} title={term.title} id={term.id} />
            ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: "32%",
          height: "65vh",
        }}
      >
        <FeaturedTitle title="WHY CHOOSE OUR STORE" />
        <WhyChoose />
      </Box>
    </Box>
  );
}
