import React from "react";
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
  Grid
} from "@mui/material";

import StatBox from "../components/StatBox";
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
const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  const handleSearch = () => {
    // Ajoutez votre logique de recherche ici
  };

  return (
    <Box m="1.5rem 2.5rem">
      
      <TextField
      label="Saisissez votre ville..."
      variant="outlined"
      fullWidth
      margin="normal"
      InputLabelProps={{ style: { color: "#141414" } }}
      InputProps={{
        sx: { borderRadius: "15px" },
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon style={{ color: "#141414" }} />
          </InputAdornment>
        ),
      }}
      sx={{
        background: "white",
        marginBottom: '16px',
        borderRadius: '15px', // Ajoute le border radius
        width: '80%', // Utilise la largeur complète par défaut
        margin: 'auto',
        display: 'block',
        '@media (min-width:600px)': {
          width: '60%', // Ajuste la largeur à partir de 600px
        },
        '@media (min-width:960px)': {
          width: '40%', // Ajuste la largeur à partir de 960px
        },
        '@media (min-width:1280px)': {
          width: '30%', // Ajuste la largeur à partir de 1280px
        },
      }}
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
            color: theme.palette.secondary.main,
            borderColor:theme.palette.secondary.main
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

export default Dashboard;
