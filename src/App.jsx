import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'tailwindcss/tailwind.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
