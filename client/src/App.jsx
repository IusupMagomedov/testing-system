import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Questions from './pages/Questions';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Navbar from './componets/Navigator';
import Login from './pages/Login';
import Signup from './pages/Singup';
import { Grid } from '@mui/material';


function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Grid container >
            <Grid item xs={12}>
              <Navbar/>
            </Grid>
            <Grid item xs={12}>
              <Routes>
                <Route
                  path="/"
                  element={<Home/>}
                />
                <Route
                  path="/questions"
                  element={<Questions/>}
                />
                <Route
                  path="/settings"
                  element={<Settings />}
                />
                <Route
                  path="/profile"
                  element={<Profile />}
                />
                <Route
                  path="/login"
                  element={<Login />}
                />
                <Route
                  path="/signup"
                  element={<Signup />}
                />
              </Routes>
            </Grid>
          </Grid>  
        </BrowserRouter>
    </div>
  );
}

export default App;
