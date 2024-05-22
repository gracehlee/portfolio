import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/index.css';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <button class="btn btn-dark rounded-pill">🔅</button>
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
    );
}
