import linkedin from '../images/linkedin.png';
import gitlab from '../images/gitlab.png';
import gmail from '../images/gmail.png';
import linkedin2 from '../images/linkedin2.png'
import gitlab2 from '../images/gitlab2.png'
import gmail2 from '../images/gmail2.png'

export default function Footer(props) {
    const myEmail = process.env.REACT_APP_MY_EMAIL;
    const handleCopy = () => {
        navigator.clipboard.writeText(myEmail);
        window.alert('Email copied to clipboard!');
    };
    const darkmode = props.darkmode

    return (
        <footer className={`${darkmode ? 'darkmode' : ''}`}>
            <h6>Design and Code © Grace Lee 2024</h6>
            <div className="footer-icons">
                <a
                    href="https://www.linkedin.com/in/haeungracelee/"
                    target="_blank"
                    rel="noreferrer"
                    className="expand"
                >
                    <img
                        src={darkmode ? linkedin2 : linkedin}
                        alt="linkedin"
                        width='40px'
                        style={{paddingRight: '10px', cursor: 'pointer'}}
                    />
                </a>
                <a
                    href="https://gitlab.com/gracehlee"
                    target="_blank"
                    rel="noreferrer"
                    className="expand"
                >
                    <img
                        src={darkmode ? gitlab2 : gitlab}
                        alt="gitlab"
                        width='40px'
                        style={{paddingRight: '10px', cursor: 'pointer'}}
                    />
                </a>
                <div className="expand">
                    <img
                        src={darkmode ? gmail2 : gmail}
                        alt="gmail"
                        width='45px'
                        style={{paddingRight: '10px', cursor: 'pointer'}}
                        onClick={handleCopy}
                    />
                </div>
            </div>
        </footer>
    );
}
