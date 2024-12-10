import { Loader } from "@/styles/components.styled";
import { theme } from "@/themes/theme";
import { Box } from "@mui/material";

export function LoadingPage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Loader />
    </Box>
  );
}
