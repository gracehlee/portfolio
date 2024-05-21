import './App.css';
import './css/index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
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
              element={
                <>
                  <Nav />
                  <Home />
                </>
              }
            />
          </Route>
        </Routes>
        {/* Footer */}
      </div>
    </BrowserRouter>
  );
}

export default App;
