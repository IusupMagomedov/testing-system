import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Questions from './pages/Questions';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Navbar from './componets/Navigator';
import { Grid } from '@mui/material';
import { useState } from 'react';


function App() {
  const [mode, setMode] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
        <BrowserRouter>
          <Grid container >
            <Grid item xs={12}>
              <Navbar 
                mode={mode}
                setMode={setMode}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
              />
            </Grid>
            <Grid item xs={12}>
              <Routes>
                <Route
                  path="/"
                  element={<Home mode={mode}/>}
                />
                <Route
                  path="/questions"
                  element={<Questions mode={mode}/>}
                />
                <Route
                  path="/settings"
                  element={<Settings />}
                />
                <Route
                  path="/profile"
                  element={<Profile />}
                />
              </Routes>
            </Grid>
          </Grid>  
          {mode}
        </BrowserRouter>
    </div>
  );
}

export default App;
