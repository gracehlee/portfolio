import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'tailwindcss/tailwind.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/index.css';
import { useState } from 'react'

function App() {
  const [darkmode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkmode)
    document.body.classList.toggle('dark-mode')
  }

  return (
    <BrowserRouter>
      <header className={`${darkmode ? 'darkmode' : ''}`}>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
              <button
                class="btn btn-dark rounded-pill"
                style={{backgroundColor: `${darkmode ? 'grey' : ''}`}}
                onClick={toggleDarkMode}
              > <span>  </span>
                🔅
              </button>
              <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse sticky-top" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <a className="nav-link nav-content" href="/">about</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link nav-content" href="/">projects</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link nav-content" href="/">contact</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link nav-content" href="/">resume</a>
                      </li>
                  </ul>
              </div>
            </div>
        </nav>
      </header>
      <main>
        <div id="content">
          <Routes>
            <Route path="/" element={<Home darkmode={darkmode}/>} />
          </Routes>
          <Footer darkmode={darkmode}/>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
