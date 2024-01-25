import React from "react";
import { Box, Typography, useTheme,Button } from "@mui/material";
import FlexBetween from "./FlexBetween";

const StatBox = ({ title, value1, value2, imageUrl,prix }) => {
  const theme = useTheme();
  return (
    <Box
      gridColumn="span 2"
      gridRow="span 2"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
    
    >
      <FlexBetween>
        <Box>
        <Typography variant="h5" fontWeight="600" sx={{ color: theme.palette.secondary[100] }}>
          {title}
        </Typography>
      

      <Typography variant="h6" sx={{ color: theme.palette.secondary[200] }}>
        {value1}
      </Typography>
      <Typography variant="h6" sx={{ color: theme.palette.secondary[200] }}>
        {value2}
      </Typography>
      <Typography variant="h6" sx={{ mt:'70px',color: theme.palette.secondary[200] }}>
        {prix}
      </Typography>
     </Box>
        {/* Utilisez la balise img avec la prop src définie par imageUrl */}
        <img
          src={imageUrl}
          alt="Description de l'image"
          style={{ width: '40%',}}  // Ajustez la largeur de l'image à 35%
        />
      </FlexBetween>
      <Button
        variant="contained"
        sx={{
          mt: "3rem",
          p: "1rem",
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.background.alt,
          "&:hover": { color: theme.palette.neutral.main },
        }}
      
      >
        Ajouter au panier
      </Button>
    </Box>
  );
};

export default StatBox;
