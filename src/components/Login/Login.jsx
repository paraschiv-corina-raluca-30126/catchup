import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/LogoCatchUp.png';
import { auth } from '../../firebase';

const defaultTheme = createTheme();

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode==='auth/invalid-credential')
            alert('Credentiale Gresite')
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
      <>


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
            Sign In
          </Typography>
          <Box component="form" noValidate onSubmit={onLogin} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                   id="email-address"
                   name="email"
                   type="email"                                    
                   required  
                   fullWidth                                                                              
                   placeholder="Email address"
                   onChange={(e)=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                   id="password"
                   name="password"
                   type="password"                                    
                   required   
                   fullWidth                                                                             
                   placeholder="Password"
                   onChange={(e)=>setPassword(e.target.value)}
                />
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink to="/signup" variant="body2">
                  No account? Sign up here!
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </Container>
    </>      )  
}
 
export default Login