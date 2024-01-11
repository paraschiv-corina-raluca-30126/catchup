import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../../assets/LogoCatchUp.png'
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate, useNavigation } from 'react-router-dom';

const defaultTheme = createTheme();

export default function SignUp() {
    const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userForm = {email: data.get('email'),
    password: data.get('password'),
    username: data.get('username'),
    profilePhoto: data.get('profilePhoto')};
    try{
    await createUserWithEmailAndPassword(auth,userForm.email,userForm.password)
    .then(function() {
        console.log("Successfully created new user.")
        let firebaseUser = auth.currentUser;
        console.log(firebaseUser);
        updateProfile(firebaseUser,{
            displayName: userForm.username,
            photoURL: userForm.profilePhoto
        })
        navigate("/home");
})}
    catch(error){
        console.log(error)
    }
    console.log(userForm);
  };

  return (
    <Container  sx={{width:'100vw'}}> 
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth='xs' sx={{display:'flex', }}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
                        <img src={logo} width={300} />

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoFocus
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="photoLink"
                  name="profilePhoto"
                  required
                  fullWidth
                  id="profilePhoto"
                  label="Profile Photo Link"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </Container>
  );
}