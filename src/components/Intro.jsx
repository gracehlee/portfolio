import profile from '../images/transparent.png';
import '../css/index.css';
import linkedin from '../images/linkedin.png'
import gitlab from '../images/gitlab.png'
import gmail from '../images/gmail.png'

export default function Intro() {
    const myEmail = process.env.REACT_APP_MY_EMAIL;
    const handleCopy = () => {
        navigator.clipboard.writeText(myEmail)
        window.alert('Email copied to clipboard!')
    }

    return (
        <div className="c-row">
            <div className="d-flex align-items-center">
                <div className="about-text align-items-center">
                    <h2 className="name">grace lee</h2>
                    <h4 style={{color: 'darkblue'}}>FULL - STACK ENGINEER</h4>
                    <div><br /></div>
                    <a
                        href="https://www.linkedin.com/in/haeungracelee/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkedin} alt="linkedin" width='40px'style={{paddingRight: '10px', cursor: 'pointer'}}/>
                    </a>
                    <a
                        href="https://gitlab.com/gracehlee"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={gitlab} alt="gitlab" width='40px' style={{paddingRight: '10px', cursor: 'pointer'}}/>
                    </a>
                    <img src={gmail} alt="gmail" width='45px'style={{paddingRight: '10px', cursor: 'pointer'}} onClick={handleCopy}/>
                    <div><br /></div>
                </div>
                <div className="profile-image align-items-center">
                    <img src={profile} alt="Profile" />
                </div>
            </div>
        </div>
    );
}
