import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './componets/Navigator';
import Question from './pages/Question';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={<Question />}
              />
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
