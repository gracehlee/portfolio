import code from '../images/code.png';
import python from '../images/python.png'
import js from '../images/js.png'
import sql from '../images/sql.png'
import html from '../images/html.png'
import css from '../images/css.png'
import django from '../images/django.png'
import fastapi from '../images/fastapi.png'
import nodejs from '../images/nodejs.png'
import postgresql from '../images/postgresql.png'
import react from '../images/react.png'
import bootstrap from '../images/bootstrap.png'
import tailwind from '../images/tailwind.png'
import docker from '../images/docker.png'
import git from '../images/git.png'
import cicd from '../images/cicd.png'
import aws from '../images/aws.png'
import heroku from '../images/heroku.png'

export default function About() {
    return (
        <div
            className="about-me"
            style={{
                backgroundImage: `url(${code})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundPositionY: 'fixed',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="div1">
                <h1 style={{fontWeight: 'bold'}}>About</h1>
                <div><br /></div>
                <p>Hello world! I'm <span style={{color: 'pink'}}>Grace</span>,
                a passionate <span style={{color: 'lightblue'}}>full-stack software engineer.</span></p>
                <p>
                    Back in the day, I started tinkering with
                    <span style={{color: 'lightblue'}}>custom CSS and HTML </span>
                    on my Tumblr pages, aiming to perfect the aesthetics of my art blog.
                    Those were the days of custom cursors,
                    emojis, and widgets - true hallmark of the early 2000's! 😂
                    Little did I know, this was just the beginning of my journey into the vast world of
                    <span style={{color: 'lightblue'}}> web design and development.</span>
                </p>
                <p>
                    As a <span style={{color: 'pink'}}>detail-oriented</span> and
                    <span style={{color: 'pink'}}> enthusiastic</span> thinker,
                    I thrive on learning new concepts,
                    engaging in critical analysis, and solving complex problems.
                    Each project presents its own set of
                    challenges, but I find immense satisfaction in overcoming them
                    through perseverance and thorough research.
                </p>
                <p>
                    During my downtime, you'll often find me immersed in designing and crafting
                    my own stickers to share with the kids at my local church on Sundays.
                    And when it's time to unwind, there's nothing quite like
                    a good old-fashioned D&D session with friends.
                </p>
            </div>
            <div className="div2" style={{textAlign: 'center'}}>
                <h2 style={{fontWeight: 'bold'}}>Skills</h2>
                <div><br /></div>
                <p style={{color: 'lightblue'}}>Languages</p>
                <div className="image-container">
                    <img src={python} alt="python" width='30px'/>
                    <span className="alt-text">Python</span>
                </div>
                <div className="image-container">
                    <img src={js} alt="js" width='30px' style={{borderRadius: '0.3rem'}}/>
                    <span className="alt-text">JavaScript</span>
                </div>
                <div className="image-container">
                    <img src={sql} alt="sql" width='30px'/>
                    <span className="alt-text">SQL</span>
                </div>
                <div className="image-container">
                    <img src={html} alt="html" width='30px'/>
                    <span className="alt-text">HTML</span>
                </div>
                <div className="image-container">
                    <img src={css} alt="css" width='30px'/>
                    <span className="alt-text">CSS</span>
                </div>
                <div><br /></div>
                <p style={{color: 'lightblue'}}>Backend</p>
                <div className="image-container">
                    <img src={django} alt="django" width='30px'/>
                    <span className="alt-text">Django</span>
                </div>
                <div className="image-container">
                    <img src={fastapi} alt="fastapi" width='30px'/>
                    <span className="alt-text">FastAPI</span>
                </div>
                <div className="image-container">
                    <img src={nodejs} alt="nodejs" width='30px'/>
                    <span className="alt-text">Node.js</span>
                </div>
                <div className="image-container">
                    <img src={postgresql} alt="postgresql" width='30px'/>
                    <span className="alt-text">PostgreSQL</span>
                </div>
                <div><br /></div>
                <p style={{color: 'lightblue'}}>Frontend</p>
                <div className="image-container">
                    <img src={react} alt="react" width='30px'/>
                    <span className="alt-text">React</span>
                </div>
                <div className="image-container">
                    <img src={bootstrap} alt="bootstrap" width='30px'/>
                    <span className="alt-text">Bootstrap</span>
                </div>
                <div className="image-container">
                    <img src={tailwind} alt="tailwind" width='30px'/>
                    <span className="alt-text">Tailwind</span>
                </div>
                <div><br /></div>
                <p style={{color: 'lightblue'}}>Devops and Deployment</p>
                <div className="image-container">
                    <img src={docker} alt="docker" width='30px'/>
                    <span className="alt-text">Docker</span>
                </div>
                <div className="image-container">
                    <img src={git} alt="git" width='30px'/>
                    <span className="alt-text">Git</span>
                </div>
                <div className="image-container">
                    <img src={cicd} alt="cicd" width='30px'/>
                    <span className="alt-text">CI/CD</span>
                </div>
                <div className="image-container">
                    <img src={aws} alt="aws" width='30px'/>
                    <span className="alt-text">AWS</span>
                </div>
                <div className="image-container">
                    <img src={heroku} alt="heroku" width='25px'/>
                    <span className="alt-text">Heroku</span>
                </div>
                <div><br /></div>
            </div>
        </div>
    );
}
