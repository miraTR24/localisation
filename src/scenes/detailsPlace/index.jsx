import React , { useState } from "react";
import { Box, Typography, useTheme,Button} from "@mui/material";
import { Link } from 'react-router-dom';
import FlexBetween from "../components/FlexBetween";
import imgUrl from '../../assets/spec.jpg'; 

const DetailsPlace = ({  imageUrl }) => {
  const theme = useTheme();
  const [count, setCount] = useState(0);
    
      const handleIncrement = () => {
        if (count < 5) {
          setCount(count + 1);
        }
      };
    
      const handleDecrement = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      };
  return (   
    <FlexBetween>
      <Box 
      style={{ width: '40%',height:'100vh',overflow: 'hidden',}}  
      >
        <img
          src={imgUrl}
          alt="Description de l'image"
          style={{objectFit: 'cover',
          width: '100%',
          height: '100%',}}  
        />
      </Box>
        <Box
        style={{ width: '60%'}}>
        <Typography variant="h3" fontWeight="600" sx={{mt:'10px', color: theme.palette.secondary[100],ml:'50px'}}>
          TITRE DU FILM
       </Typography>
       <Box
       style={{ width: '90%',ml:'50px'}}  >
       <Typography variant="h6" sx={{mt:'10px', color: theme.palette.secondary[200],ml:'50px' }}>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.

      </Typography>
      </Box>
      <Box>
        <FlexBetween 
        style={{ width: '90%'}} >
        <Typography variant="h6" sx={{mt:'10px',ml:'50px', color: theme.palette.secondary[200],fontWeight:"600" }}>
        dd/mm/aaaa
      </Typography>
      <Typography variant="h6" sx={{mt:'10px', color: theme.palette.secondary[200],fontWeight:"600" }}>
        heure / date
      </Typography>
        </FlexBetween>
        <FlexBetween
        style={{ width: '25%'}}>
        <Typography variant="h6" sx={{mt:'50px',ml:'50px', color: theme.palette.secondary[200],fontWeight:"600" }}>
        Prix:
      </Typography>
      <Typography variant="h6" sx={{mt:'50px',ml:'50px', color: theme.palette.secondary[200],fontWeight:"400" }}>
       15 EURO
      </Typography>

      </FlexBetween>
      <FlexBetween>
      <Box sx={{ width: "20%", display: "flex", alignItems: "center" }}>
      <Button
        sx={{
          mt: '10rem',
          ml: '35px',
          p: "1rem",
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.background.alt,
          "&:hover": { color: theme.palette.neutral.main },
        }}
        onClick={handleIncrement}
      >
        Plus
      </Button>
      <Typography variant="body1" sx={{ mt: '10rem',ml: '15px', color: theme.palette.secondary[200], fontWeight: "400" }}>
        {count}
      </Typography>
      <Button
        sx={{
          ml: '15px',
          mt: '10rem',
          p: "1rem",
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.background.alt,
          "&:hover": { color: theme.palette.neutral.main },
        }}
        onClick={handleDecrement}
      >
        Moins
      </Button>
    </Box>
      <Box
      style={{ width: '20%'}}>
      <Button
        variant="contained"
        sx={{
         mr:"2px",
          mt: "10rem",
          p: "1rem",
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.background.alt,
          "&:hover": { color: theme.palette.neutral.main },
          width:'100%',
        }}
      >
        Ajouter au panier
      </Button>
      </Box>
      </FlexBetween>

      </Box>
        </Box>


    </FlexBetween>
   
  );
};

export default DetailsPlace;
