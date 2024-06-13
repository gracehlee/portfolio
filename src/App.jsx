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
  const scroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BrowserRouter>
      <header style={{backgroundColor: `${darkmode ? 'black' : ''}`}}>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid">
              <button
                class="btn btn-dark rounded-pill"
                style={{backgroundColor: `${darkmode ? 'grey' : ''}`, marginLeft: '1rem'}}
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
                  style={{marginRight: '1rem'}}
              >
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse sticky-top" id="navbarNav" style={{padding: '1rem'}}>
                  <ul className="navbar-nav">
                      <li className="nav-item">
                        <span
                            className="nav-link nav-content"
                            onClick={() => scroll("home")}
                            style={{ cursor: 'pointer' }}
                          >
                            Home
                        </span>
                      </li>
                      <li className="nav-item">
                        <span
                          className="nav-link nav-content"
                          onClick={() => scroll("about")}
                          style={{ cursor: 'pointer' }}
                        >
                          About
                        </span>
                      </li>
                      <li className="nav-item">
                        <span
                          className="nav-link nav-content"
                          onClick={() => scroll("projects")}
                          style={{ cursor: 'pointer' }}
                        >
                          Projects
                        </span>
                      </li>
                      <li className="nav-item">
                        <span
                            className="nav-link nav-content"
                            onClick={() => scroll("contact")}
                            style={{ cursor: 'pointer' }}
                          >
                            Contact
                          </span>
                      </li>
                      <li className="nav-item">
                          <a
                            className="nav-link nav-content"
                            href="./resume/leegrace_resume.pdf"
                            role="button"
                            target="_blank"
                          >
                            {" "}
                            Resume
                          </a>
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
