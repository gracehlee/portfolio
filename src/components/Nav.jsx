import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is included
import '../css/index.css';

export default function Nav() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'var(--pink)' }}>
                <div className="container-fluid">
                    <a className="name" href="#">grace lee</a>
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
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link nav-content" href="#">about</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-content" href="#">projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-content" href="#">contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-content" href="#">resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
