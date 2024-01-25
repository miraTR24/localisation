import { Typography, Box, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        margin: {
          xs: "10px",  // Ajustez les marges pour chaque breakpoint selon vos besoins
          sm: "20px",
          md: "50px",
          lg: "100px",
          xl: "150px",
        },
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h1"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ margin: "50px" }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
