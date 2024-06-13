export default function Projects(props) {
    const darkmode = props.darkmode;

    function ProjectCard({ video, liveLink, codeLink, title, description, tags }) {
        const buttonStyle = {
            backgroundColor: '#ADD8E6',
            fontWeight: 'bold',
            color: 'navy',
            border: 'navy',
            borderRadius: '5px',
            padding: '5px 10px',
            fontSize: '0.8rem',
        };

        const mediaStyle = {
            objectFit: 'fit',
            aspectRatio: '1.5 / 1',
            borderRadius: '0',
            width: '100%',

        }

        return (
            <div
                className="card mb-4"
                style={{
                    border: darkmode ? '1px solid white' : '1px solid',
                    backgroundColor: darkmode ? '#111000' : 'white',
                    color: darkmode ? 'white' : 'black',
                    borderRadius: '2px',
                }}
            >
                <div style={{ margin: '10px' }}>
                    <iframe
                        style={mediaStyle}
                        src={`https://www.youtube.com/embed/${video}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="card-body">
                    <div className="d-flex justify-content-between mb-3 align-items-center">
                        <h5 className="card-title">{title}</h5>
                        <div>
                            <a href={liveLink} className="btn btn-primary" style={buttonStyle}>🚀</a>
                            <span> </span>
                            <a href={codeLink} className="btn btn-primary" style={buttonStyle}>💻</a>
                        </div>
                    </div>
                    <p className="card-text">{description}</p>
                    <div>
                        {tags.map(tag => (
                            <span key={tag} className="badge me-1" style={{ backgroundColor: darkmode ? 'grey' : 'black' }}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    const topThree = [
        {
            video: 'AvjIVyriSso',
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee/portfolio',
            title: 'Portfolio Site',
            description: 'A portfolio website application showcasing my recent and significant projects. Code was built using the React.js framework, using HTML, CSS, and Bootstrap to set up the main front-end graphical user interface. Navigation will snap to the desired section using DOM manipulation. Contact form with email capabilities was built using third-party API, EmailJS. Site was deployed through Heroku.',
            tags: ['React', 'Bootstrap', 'CSS', 'EmailJS', 'Heroku'],
        },
        {
            video: 'IxjdZSEP9zI',
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee/pawsitive-vibes',
            title: 'Pawsitive Vibes',
            description: 'Originally a collaborative project built with three teammates in an agile environment. Codebase has been updated privately since then. Personal contributions include React.js routing, Postgresql database models / routers / queries, dark mode / light mode functionality through CSS elements, Community and Profile pages, and image uploading.',
            tags: ['React', 'RestAPIs', 'ViteJS', 'FastAPI', 'Postgresql', 'Bootstrap', 'CSS', 'HTML', 'Docker', 'JavaScript']
        },
        {
            video: 'TkOrpoaPzjs',
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee/project-beta',
            title: 'CarCar',
            description: 'Full-stack development of web application that maintains inventory, sales, and automobile services for a car dealership. A partner project with another teammate in an agile environment; codebase has been updated privately since then, with revisions to code cleanliness and readability. Personal contributions include related Services pages.',
            tags: ['React', 'Django', 'RestAPIs', 'Bootstrap', 'CSS', 'Docker', 'Python', 'JavaScript', 'Postgresql', 'Bootstrap']
        },
    ];

    const myProjects = [
        {
            video: 'PFLjDga1Egw',
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee/fearless-frontend',
            title: 'Conference GO',
            description: 'A full-stack web application that allows users to keep track of conferences, events, and attendees. Consists of a dynamic front-end interface with React, JavaScript, and Bootstrap design elements, back-end infrastructure using Django and Python, ensuring robustness and scalability, and third-party APIs with Pexels and Weather updates.',
            tags: ['React', 'Bootstrap', 'CSS']
        },
        {
            video: '',
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee',
            title: 'Test Project',
            description: 'Test test test. This is where my description goes. As a detail-oriented and enthusiastic thinker, I thrive on learning new concepts, engaging in critical analysis, and solving complex problems. Each project presents its own set of challenges, but I find immense satisfaction in overcoming them through perseverance and thorough research.',
            tags: ['React', 'Bootstrap', 'CSS']
        },
        {
            video: '',
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee',
            title: 'Test Project',
            description: 'Test test test. This is where my description goes. As a detail-oriented and enthusiastic thinker, I thrive on learning new concepts, engaging in critical analysis, and solving complex problems. Each project presents its own set of challenges, but I find immense satisfaction in overcoming them through perseverance and thorough research.',
            tags: ['React', 'Bootstrap', 'CSS']
        },
    ];

    return (
        <div className="projects">
            <h1 className="center" style={{ fontWeight: 'bold', color: darkmode ? 'white' : '' }}>
                My Projects
            </h1>
            <div><br /></div>
            <div><br /></div>
            <h3 className="center" style={{ fontWeight: 'bold', color: darkmode ? 'white' : '' }}>
                Top 3
            </h3>
            <br />
            <div className="container">
                <div className="row">
                    {topThree.map((project, index) => (
                        <div className="col-md-4" key={index}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
            <br />
            <br />
            <h3 className="center" style={{ fontWeight: 'bold', color: darkmode ? 'white' : '' }}>
                Other Projects
            </h3>
            <br />
            <div className="container">
                <div className="row">
                    {myProjects.map((project, index) => (
                        <div className="col-md-4" key={index}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
