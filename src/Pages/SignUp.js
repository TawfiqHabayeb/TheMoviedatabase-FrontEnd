import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useContext, useEffect } from "react";
import authServices from "../Services/AuthServices";
import { MainContext } from "../Context/MainContextProvider";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { JWT } = useContext(MainContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    switch (event.target.name) {
      case "username":
        setUsername(event.target.value);

        break;
      case "password":
        setPassword(event.target.value);

        break;
      default:
        break;
    }
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const user = {
        username,
        password,
      };

      const response = await authServices.SignUp(user);

      navigate("/");
    } catch (error) {
      console.log("error.response.data.error :>> ", error.response.data.error);
    }
  };

  useEffect(() => {
    if (JWT || JWT !== "") {
      navigate("/");
    }
  }, [JWT]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOpenRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => submitHandler(e)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Email address"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => handleChange(e)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => handleChange(e)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  {"You have an account already? login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
