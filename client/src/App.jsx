import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './componets/Navigator';
import Questions from './pages/Questions';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/question"
                element={<Questions />}
              />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
