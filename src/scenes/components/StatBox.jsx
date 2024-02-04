import React from "react";
import { Box, Typography, useTheme,Button} from "@mui/material";
import { Link } from 'react-router-dom';
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
             <img
          src={imageUrl}
          alt="Description de l'image"
          style={{ width: '100%',height:'50%'}}  
        />
        <Box>
      <Typography variant="h5" fontWeight="600" sx={{mt:'10px', color: theme.palette.secondary[100], textAlign:'center' }}>
          {title}
      </Typography>
      <FlexBetween>

      <Typography variant="h6" sx={{mt:'10px', color: theme.palette.secondary[200] }}>
        {value1}
      </Typography>
      <Typography variant="h6" sx={{ mt:'10px',color: theme.palette.secondary[200] }}>
        {value2}
      </Typography>

      </FlexBetween>
      <Typography variant="h6" sx={{ mt:'10px',color: theme.palette.neutral[500] }}>
        {prix}
      </Typography>
     </Box>


    
      <Link to="/DetailsPlace">
      <Button
        variant="contained"
        sx={{
          mt: "0.9rem",
          p: "1rem",
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.background.alt,
          "&:hover": { color: theme.palette.neutral.main },
          width:'100%',
          alignItems:"center"
        }}
      >
        En savoir plus
      </Button>
    </Link>
    </Box>
  );
};

export default StatBox;
