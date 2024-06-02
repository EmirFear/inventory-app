import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import LockIcon from "@mui/icons-material/Lock"
import image from "../assets/result.svg"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { Link, useNavigate } from "react-router-dom"
import TextField from "@mui/material/TextField"
import { Formik, Form } from "formik"
import { object, string } from 'yup'
import useApiRequest from "../services/useApiRequest"

const Register = () => {
  const { register } = useApiRequest()
  const navigate = useNavigate()

  const registerSchema = object({
    username: string().required("Kullanıcı ismi zorunludur."),
    firstname: string().required("İsminizi yazmanız zorunludur."),
    lastname: string().required("Soyisminizi yazmanız zorunludur"),
    email: string().email("Lütfen geçerli bir email giriniz").required("Email girmeniz zorunludur"),
    password: string().required("Şifre girmeniz zoruludur")    
      .min(8, "Şifre en az 8 karakter olmalıdır ")
      .max(24, "Şifre en fazla 24 karakter olmalıdır")
      .matches(/\d+/, "Şifre en az bir rakam içermelidir.")
      .matches(/[a-z]+/, "Şifre en az bir küçük harf içermelidir.")
      .matches(/[A-Z]+/, "Şifre en az bir büyük harf içermelidir.")
      .matches(
        /[@$!%*?&]+/,
        "Şifre en az bir özel karakter(@$!%*?&) içermelidir.")
  })

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            Inventory APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{ username: "", firstname: "", lastname: "", email: "", password: "" }}
            validationSchema={registerSchema}
            onSubmit={async (values, actions) => {
              try {
                await register(values)
                actions.resetForm()
                navigate("/login")
              } catch (error) {
                console.error("Registration failed", error)
              }
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="User Name"
                    name="username"
                    id="userName"
                    type="text"
                    variant="outlined"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                  />
                  <TextField
                    label="First Name"
                    name="firstname"
                    id="firstName"
                    type="text"
                    variant="outlined"
                    value={values.firstname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.firstname && Boolean(errors.firstname)}
                    helperText={touched.firstname && errors.firstname}
                  />
                  <TextField
                    label="Last Name"
                    name="lastname"
                    id="lastname"
                    type="text"
                    variant="outlined"
                    value={values.lastname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.lastname && Boolean(errors.lastname)}
                    helperText={touched.lastname && errors.lastname}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  <Button type="submit" variant="contained" size="large">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Register

