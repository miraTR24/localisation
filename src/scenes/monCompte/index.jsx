import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";


const MonCompte = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");


  return (
    <Box display="flex" justifyContent="center" alignItems="center">

        <Typography fontWeight="Bold" variant="h4" color={theme.palette.neutral[500]} sx={{ mb: "1.5rem" ,textAlign: 'center',}}>
          Mon compte !
        </Typography>
        <Form />

    </Box>
  );
};

export default MonCompte;
