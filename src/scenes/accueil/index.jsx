import React,{useState} from "react";
import Header from "../components/Header";
import MapComponent from '../components/MapComponent';
import imgUrl from '../../assets/spec.jpg'; 
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import FlexBetween from "../components/FlexBetween";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Autocomplete
} from "@mui/material";

import StatBox from "../components/StatBox";
import villesDeFrance from "../../const/villeDeFrance";
//import MapComponent from "../components/MapComponent";
const buttons = [
  "TOUT",
  "THEATRE",
  "CINEMA",
  "ARTS VISUELS",
  "HUMOUR",
  "PERFORMANCE EXPERIMENTALES",
  "MAGIE",
  "CONFERENCE",
  "DANSE",
];
const Accueil = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

 

  
  return (
    <Box m="1.5rem 2.5rem">
<Autocomplete
  disablePortal
  id="combo-box-demo"
  options={villesDeFrance}
  getOptionLabel={(option) => option.label}
  renderInput={(params) => (
    <TextField
      {...params}
      label="Saisissez votre ville..."
      variant="outlined"
      fullWidth
      margin="normal"
      InputLabelProps={{ style: { color: theme.palette.secondary.alt } }}
      InputProps={{
        sx: { borderRadius: "15px" },
        ...params.InputProps,
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon style={{ color: "#141414" }} />
          </InputAdornment>
        ),
      }}
      sx={{
        marginBottom: '16px',
        borderRadius: '15px',
        width: '80%',
        margin: 'auto',
        display: 'block',
        '@media (min-width:600px)': {
          width: '60%',
        },
        '@media (min-width:960px)': {
          width: '40%',
        },
        '@media (min-width:1280px)': {
          width: '30%',
        },
      }}
    />
  )}
/>


   
<hr style={{ border: '1px solid theme.palette.neutral.main ',marginTop:"50px"  }} />

<FlexBetween sx={{ flexWrap: 'wrap' }}>
      {buttons.map((label, index) => (
        <Button
          key={index}
          variant="outlined"
          sx={{
            marginRight: "0.5rem",
            marginBottom: "0.5rem", // Ajoutez une marge en bas pour créer une nouvelle ligne
            fontSize: "0.85rem",
            color: theme.palette.secondary.alt,
            borderColor:theme.palette.secondary.alt
          }}
        >
          {label}
        </Button>
      ))}
    </FlexBetween>
 
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(8, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="peaky blinders"
          value1={ "24/17/2024"}
          value2={ "14h Cinéma Athéna"}
          prix="15€"
          imageUrl={imgUrl}
          
        />
                <StatBox
          title="peaky blinders"
          value1={ "24/17/2024"}
          value2={ "14h Cinéma Athéna"}
          prix="15€"
          imageUrl={imgUrl}
          
        />
                <StatBox
          title="peaky blinders"
          value1={ "24/17/2024"}
          value2={ "14h Cinéma Athéna"}
          prix="15€"
          imageUrl={imgUrl}
          
        />
                <StatBox
          title="peaky blinders"
          value1={ "24/17/2024"}
          value2={ "14h Cinéma Athéna"}
          prix="15€"
          imageUrl={imgUrl}
          
        />
                <StatBox
          title="peaky blinders"
          value1={ "24/17/2024"}
          value2={ "14h Cinéma Athéna"}
          prix="15€"
          imageUrl={imgUrl}
          
        />
                <StatBox
          title="peaky blinders"
          value1={ "24/17/2024"}
          value2={ "14h Cinéma Athéna"}
          prix="15€"
          imageUrl={imgUrl}
          
        />
                <StatBox
          title="peaky blinders"
          value1={ "24/17/2024"}
          value2={ "14h Cinéma Athéna"}
          prix="15€"
          imageUrl={imgUrl}
          
        />
                <StatBox
          title="peaky blinders"
          value1={ "24/17/2024"}
          value2={ "14h Cinéma Athéna"}
          prix="15€"
          imageUrl={imgUrl}
          
        />
        
        {/* ROW 2 */}
     
        
      </Box>
      
      
        <Header title="Test du composant MapComponent" />
        <MapComponent   />
    </Box>
  );
};

export default Accueil;
