import { Box, Button, TextField, useMediaQuery, useTheme,Link,Grid } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";

const backendUrl = process.env.REACT_APP_BACKEND_URL;
const loginSchema = yup.object().shape({
  username: yup.string().required("Required"),
  password: yup.string().required("Required"),
});

const initialValuesLogin = {
  username: "",
  password: "",
};

const Form = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const login = async (values, onSubmitProps) => {
    console.log(values);
    const loggedInResponse = await fetch(`${backendUrl}/api/authenticate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const loggedIn = await loggedInResponse.json();
    console.log(loggedIn);
    onSubmitProps.resetForm();
    if (loggedIn.success) {
      dispatch(
        setLogin({
        //  user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/Accueil");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    await login(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesLogin}
      validationSchema={loginSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              label="username"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.username}
              name="username"
              error={Boolean(touched.username) && Boolean(errors.username)}
              helperText={touched.username && errors.username}
              sx={{ gridColumn: "span 4" ,color:'black' }}
            />
            <TextField
              label="Mot de passe"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>

          {/* BUTTONS */}
          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.neutral[300],
                color: palette.background.alt,
                "&:hover": { color: palette.neutral.main },
              }}
            >
               S'identifier !
            </Button>
            <Grid container direction={isNonMobile ? "row" : "column"} spacing={isNonMobile ? 15 : 1}>
              <Grid item>
                <Link href="#" variant="body2" color={palette.secondary.alt} fontWeight="200" >
                  Mot de passe oublié?
                </Link>
              </Grid>
              <Grid item>
                <Link href="sub" variant="body2" color={palette.secondary.alt} fontWeight="200" >
                  {"Première visite sur SPECTACULOOS ? Inscrivez-vous. "}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
