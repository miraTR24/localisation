import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import LoginImage from "../../assets/BackLogin.png";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const backgroundImageStyle = {
    backgroundImage: `url(${LoginImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
  };

  return (
    <Box sx={backgroundImageStyle} display="flex" justifyContent="center" alignItems="center">
      <Box
        width={isNonMobileScreens ? "40%" : "90%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor= {theme.palette.secondary.altinv}
        position="absolute"
        top={isNonMobileScreens ? "120px" : "120px"}
        left={isNonMobileScreens ? "70px" : ""}
      >
        <Typography fontWeight="Bold" variant="h4" color={theme.palette.neutral[500]} sx={{ mb: "1.5rem" ,textAlign: 'center',}}>
          S'identifier !
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
