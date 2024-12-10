const { Box, Alert } = require("@mui/material");

export function TypeError({ message }) {
  return (
    <Box>
      <Alert style={{ textAlign: "center" }} severity="error">
        {message}
      </Alert>
    </Box>
  );
}
