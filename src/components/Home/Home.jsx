import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from '../../firebase';
import Header from '../Header/Header';
import { Box, Container } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    // const [uid, setUid] = useState('');
    // const [pp, setPp] = useState('');
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             // User is signed in, see docs for a list of available properties
    //             // https://firebase.google.com/docs/reference/js/firebase.User
    //             const uid = user.uid;
    //             setPp(user.photoURL)
    //             setUid(user.displayName)
    //             // ...
    //             console.log("uid", uid)
    //         } else {
    //             // User is signed out
    //             // ...
    //             console.log("user is logged out")
    //         }
    //     });

    // }, [])

    // //profile
    // const user = auth.currentUser;
    // if (user !== null) {
    //     // The user object has basic properties such as display name, email, etc.
    //     const displayName = user.displayName;
    //     const email = user.email;
    //     const photoURL = user.photoURL;
    //     const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    // const uid = user.uid;
    // updateProfile(auth.currentUser, {
    //     displayName: "sd", photoURL: "https://example.com/jane-q-user/profile.jpg"
    //   }).then(() => {
    //    console.log( 'Profile updated!');
    //     // ...
    //   }).catch((error) => {
    //      console.log('An error occurred');
    //     // ...
    //   });



    // }



    return (<div style={{ width: "100vw", display: 'flex', flexDirection: 'column', height:'100vh' }}>
        <Box sx={{zIndex:2,width:'100vw'}}>     
           <Header></Header>
        </Box>
        <Box sx={{ display: 'flex', bgcolor: '#EBEDF5',height:'100vh'}}>
            <Sidebar />
            <Outlet />
        </Box>
    </div>
    )
}

export default Home
