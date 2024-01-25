import React from "react";
import Header from "../components/Header";
import MapComponent from '../components/MapComponent';
import imgUrl from '../../assets/spec.jpg'; 
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  TextField
} from "@mui/material";

import StatBox from "../components/StatBox";
//import MapComponent from "../components/MapComponent";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  const handleSearch = () => {
    // Ajoutez votre logique de recherche ici
  };

  return (
    <Box m="1.5rem 2.5rem">
      
        <Header title="Vous cherchez des bons plans, profitez au dernier moment !!" />

      <Box  mb="6rem">
      <Box
      component="form"
      sx={{
        paddingTop:"14rem",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px',
        margin: 'auto',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: '16px' }}>
        Découvrez les films
      </Typography>
      <TextField
        label="Saisissez votre ville..."
        variant="outlined"
        fullWidth
        margin="normal"
        sx={{ marginBottom: '16px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
      >
        Rechercher
      </Button>

      
      </Box>
      </Box>

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
