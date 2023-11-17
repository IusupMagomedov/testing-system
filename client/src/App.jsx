import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './componets/Navigator';
import Questions from './pages/Questions';
import { Grid } from '@mui/material';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        
          <Grid container >
            <Grid item xs={12}>
              <Navbar />
            </Grid>
            <Grid item xs={12}>
              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/questions"
                  element={<Questions />}
                />
              </Routes>
            </Grid>
          </Grid>  
        </BrowserRouter>
    </div>
  );
}

export default App;
