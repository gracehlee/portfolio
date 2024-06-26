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
                        title={title}
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
            video: 'Ry5ksXVhagw',
            liveLink: 'https://www.haeungracelee.com/',
            codeLink: 'https://gitlab.com/gracehlee/portfolio',
            title: 'Portfolio Site',
            description: 'A portfolio website application showcasing my recent and significant projects. Code was built using the React.js framework, using HTML, CSS, and Bootstrap to set up the main front-end graphical user interface. Navigation will snap to the desired section using DOM manipulation. Contact form with email capabilities was built using third-party API, EmailJS. Site was deployed through Netlify.',
            tags: ['React', 'Bootstrap', 'DOM', 'CSS', 'EmailJS', 'Netlify'],
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
            description: 'A full-stack web application that allows users to keep track of conferences, events, and attendees: dynamic front-end with React, JavaScript, and Bootstrap, back-end infrastructure using Django and Python, ensuring robustness and scalability, and third-party APIs with Pexels and Weather updates.',
            tags: ['React', 'JavaScript', 'Django', 'Python', 'JSX', 'Bootstrap', 'CSS', 'HTML', 'REST API']
        },
        {
            video: 'i6nX5Bb1AIU',
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee/pb-art-site',
            title: 'PB Art Site',
            description: 'An early Django-centric project of an art portfolio web application that allows users to upload image files to their portfolio, follow other users to view their artwork in the home dashboard, and explore all artworks in the Explore tab. Users can also search artworks by the artist name, artwork title, and by any associated tags.',
            tags: ['Python', 'Django', 'HTML', 'CSS', 'SQLite3', 'PowerShell']
        },
        {
            video: 'cSZKaBTFBj4',
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee/cute-cats',
            title: 'Cute Cats',
            description: 'An early Django-centric project of a 2000`s aesthetic website featuring popular meme cats. Users are able to log in, submit a form to add a new cat, and click on individual cats to view or edit information. Instances of cats are managed by SQLite3 database. Frontend business logic requires login to view locked content. My first website!',
            tags: ['Python', 'Django', 'CSS', 'HTML', 'SQLite3', 'Powershell']
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
