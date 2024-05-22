import profile from '../images/transparent.png';
import '../css/index.css';
import linkedin from '../images/linkedin.png'
import gitlab from '../images/gitlab.png'
import gmail from '../images/gmail.png'
import linkedin2 from '../images/linkedin2.png'
import gitlab2 from '../images/gitlab2.png'
import gmail2 from '../images/gmail2.png'
import bw from '../images/bw.png'

export default function Intro(props) {
    const myEmail = process.env.REACT_APP_MY_EMAIL;
    const handleCopy = () => {
        navigator.clipboard.writeText(myEmail)
        window.alert('Email copied to clipboard!')
    }
    const darkmode = props.darkmode

    return (
        <div className="c-row">
            <div className="d-flex align-items-center">
                <div className="about-text align-items-center">
                    <h1 className="name" style={{ color: darkmode ? 'white' : '' }}>grace lee</h1>
                    <h4 style={{ color: darkmode ? 'lightblue' : 'darkblue' }}>FULL - STACK ENGINEER</h4>
                    <div><br /></div>
                    <a
                        href="https://www.linkedin.com/in/haeungracelee/"
                        target="_blank"
                        rel="noreferrer"
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
                    >
                        <img
                            src={darkmode ? gitlab2 : gitlab}
                            alt="gitlab"
                            width='40px'
                            style={{paddingRight: '10px', cursor: 'pointer'}}
                        />
                    </a>
                    <img
                        src={darkmode ? gmail2 : gmail}
                        alt="gmail"
                        width='45px'
                        style={{paddingRight: '10px', cursor: 'pointer'}}
                        onClick={handleCopy}
                    />
                    <div><br /></div>
                </div>
                <div className="profile-image align-items-center position-relative">
                    <img
                        src={darkmode ? bw : profile}
                        style={{
                            backgroundColor: `${darkmode ? 'black' : ''}`,
                            boxShadow: '20px 20px 0px 5px'
                        }}
                        alt="Profile"
                    />
                </div>
            </div>
        </div>
    );
}
