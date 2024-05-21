import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Nav */}
        <Routes>
          <Route>
            <Route
              path="/"
              element={<Home />}
            />
          </Route>
        </Routes>
        {/* Footer */}
      </div>
    </BrowserRouter>
  );
}

export default App;
