import React from "react";
import { Box, Typography, useTheme,Button} from "@mui/material";
import { Link } from 'react-router-dom';
import FlexBetween from "./FlexBetween";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StatBox = ({ title, value1, value2, imageUrl,prix }) => {
  const theme = useTheme();
  return (
    <Box
      gridColumn="span 2"
      gridRow="span 2"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
     // p="1.25rem 1rem"
      flex="1 1 100%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="0.55rem"
    
    >
             <img
     
          src={imageUrl}
          alt="Description de l'image"
          style={{ width: '100%',height:'50%',borderRadius:"0.55rem"}}  
        />
        <Box pl="1.25rem " pr="1.25rem ">
      <Typography variant="h5" fontWeight="600" sx={{mt:'10px', color: theme.palette.secondary.alt, textAlign:'center' }}>
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
      <FlexBetween>
      <Typography variant="h5" sx={{ mt:'10px',fontWeight:"bold",color: theme.palette.neutral[500] }}>
        {prix}
      </Typography>
      <FavoriteBorderIcon sx={{ fontSize: "25px" }}></FavoriteBorderIcon>
      </FlexBetween>
     </Box>


     <Box pl="1.25rem " pr="1.25rem " pb="1.25rem">
      <Link to="/DetailsPlace">
      <Button
      
        variant="contained"
        sx={{
          mt: "0.9rem",
          p: "1rem",
          backgroundColor: theme.palette.secondary.main,
          color: "white",
          "&:hover": { color: theme.palette.neutral.main },
          width:'100%',
          alignSelf:"center",
          borderRadius: "0.55rem", 
        }}
      >
        En savoir plus
      </Button>
    </Link>
    </Box>
    </Box>
  );
};

export default StatBox;
