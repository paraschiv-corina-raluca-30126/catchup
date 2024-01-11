import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import MyNotes from './components/MyNotes/MyNotes';
import History from './components/History/History';
import CoursesLeaderboard from './components/Leaderboard/CoursesLeaderboard';
import StudySession from './components/StudySession/StudySession';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  const theme = createTheme({
    typography:{
      allVariants:{
        fontFamily:'Montserrat',
        fontWeight:400
      } ,
      },
    
  });

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/home" element={<Home />}>
            <Route
          path="/home"
          element={<Courses />}
        />
        
        <Route
          path="/home/my-notes"
          element={<MyNotes />}
        />
         <Route
          path="/home/leaderboard"
          element={<CoursesLeaderboard />}
        />
         <Route
          path="/home/courses-history"
          element={<History />}
        />
        <Route
          path="/home/study-session"
          element={<StudySession />}
        />

            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </section>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;