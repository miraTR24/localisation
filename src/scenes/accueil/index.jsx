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

  const villesDeFrance = ['The Godfather', 'Pulp Fiction'];
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },] ;
     const [inputValue, setInputValue] = useState('');

    function searchCities(query) {
      const normalizedQuery = query.trim().toLowerCase();
      const matches = Object.keys(villesDeFrance).filter(city =>
        city.toLowerCase().startsWith(normalizedQuery)
      );
      return matches.map(city => ({
        name: city,
        position: [villesDeFrance[city].latitude, villesDeFrance[city].longitude]
      }));
    }
  return (
    <Box m="1.5rem 2.5rem">
       <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
      <Autocomplete
        options={searchCities(inputValue)}
        getOptionLabel={option => option.name}
        onChange={(event, newValue) => {
          setInputValue(newValue || ''); // Met à jour la valeur de l'inputValue
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Saisissez votre ville..."
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { color: "black" } }}
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

export default Accueil;
