import linkedin from '../images/linkedin.png';
import gitlab from '../images/gitlab.png';
import gmail from '../images/gmail.png';

export default function Footer() {
    const myEmail = process.env.REACT_APP_MY_EMAIL;
    const handleCopy = () => {
        navigator.clipboard.writeText(myEmail);
        window.alert('Email copied to clipboard!');
    };

    return (
        <footer>
            <h6>Design and Code © Grace Lee 2024</h6>
            <div className="footer-icons">
                <a
                    href="https://www.linkedin.com/in/haeungracelee/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={linkedin} alt="linkedin" width="30px" style={{ cursor: 'pointer' }} />
                </a>
                <a
                    href="https://gitlab.com/gracehlee"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={gitlab} alt="gitlab" width="30px" style={{ cursor: 'pointer' }} />
                </a>
                <img src={gmail} alt="gmail" width="35px" style={{ cursor: 'pointer' }} onClick={handleCopy} />
            </div>
        </footer>
    );
}
