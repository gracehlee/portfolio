import profile from '../images/transparent.png';
import '../css/index.css';
import linkedin from '../images/linkedin.png'
import gitlab from '../images/gitlab.png'
import gmail from '../images/gmail.png'

export default function Intro() {
    return (
        <div className="c-row">
            <div className="d-flex align-items-center">
                <div className="about-text align-items-center">
                    <h2 className="name">grace lee</h2>
                    <h4 style={{color: 'navy'}}>FULL STACK ENGINEER</h4>
                    <div><br /></div>
                    <img src={linkedin} alt="linkedin" width='40px'style={{paddingRight: '10px'}}/>
                    <img src={gitlab} alt="linkedin" width='40px' style={{paddingRight: '10px'}}/>
                    <img src={gmail} alt="linkedin" width='45px'style={{paddingRight: '10px'}}/>
                    <div><br /></div>
                </div>
                <div className="profile-image align-items-center">
                    <img src={profile} alt="Profile" />
                </div>
            </div>
        </div>
    );
}
