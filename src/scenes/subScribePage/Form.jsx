import { Box, Button, TextField, useMediaQuery, useTheme,Link,Grid } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../state";

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Required"),
});

const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const login = async (values, onSubmitProps) => {
    console.log(values);
    const loggedInResponse = await fetch("http://localhost:3001/api/login", {
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
          user: loggedIn.user,
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
              label="Nom"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.nom}
              name="nom"
              error={Boolean(touched.nom) && Boolean(errors.nom)}
              helperText={touched.nom && errors.nom}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Prénom"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.prenom}
              name="prenom"
              error={Boolean(touched.prenom) && Boolean(errors.prenom)}
              helperText={touched.prenom && errors.prenom}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4" }}
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
              <TextField
              label="Confirmation du mot de passe"
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
               S'inscrire !
            </Button>
            <Grid container>
                <Grid item>
                  <Link href="/" variant="body2" color="#111111" fontWeight="200" >
                    {"Déjà un compte ? Identifiez-vous. "}
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
