import pv from '../images/projects/pv.png'

export default function Projects(props) {
    const darkmode = props.darkmode;

    function ProjectCard({ image, liveLink, codeLink, title, description, tags }) {
        const buttonStyle = {
            backgroundColor: '#ADD8E6',
            fontWeight: 'bold',
            color: 'navy',
            border: 'navy',
            borderRadius: '5px',
            padding: '5px 10px',
            fontSize: '0.8rem',
        };

        return (
            <div
                className="card mb-4"
                style={{
                    border: darkmode ? '1px solid white' : '1px solid',
                    borderRadius: '2px',
                    backgroundColor: darkmode ? '#111000' : 'white',
                    color: darkmode ? 'white' : 'black',
                }}
            >
                <div style={{ margin: '10px' }}>
                    <img
                        src={image}
                        className="card-img-top"
                        alt={title}
                        style={{ objectFit: 'fit', aspectRatio: '1.5 / 1', borderRadius: '0'}}
                    />
                </div>
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col text-start">
                            <a href={liveLink} className="btn" style={buttonStyle}>Live Application</a>
                        </div>
                        <div className="col text-end">
                            <a href={codeLink} className="btn" style={buttonStyle}>Code Repository</a>
                        </div>
                    </div>
                    <h5 className="card-title">{title}</h5>
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

    const my_projects = [
        {
            image: pv,
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee',
            title: 'Test Project',
            description: 'Test test test. This is where my description goes. As a detail-oriented and enthusiastic thinker, I thrive on learning new concepts, engaging in critical analysis, and solving complex problems. Each project presents its own set of challenges, but I find immense satisfaction in overcoming them through perseverance and thorough research.',
            tags: ['React', 'Bootstrap', 'CSS']
        },
        {
            image: pv,
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee',
            title: 'Test Project',
            description: 'Test test test. This is where my description goes. As a detail-oriented and enthusiastic thinker, I thrive on learning new concepts, engaging in critical analysis, and solving complex problems. Each project presents its own set of challenges, but I find immense satisfaction in overcoming them through perseverance and thorough research.',
            tags: ['React', 'Bootstrap', 'CSS']
        },
        {
            image: pv,
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee',
            title: 'Test Project',
            description: 'Test test test. This is where my description goes. As a detail-oriented and enthusiastic thinker, I thrive on learning new concepts, engaging in critical analysis, and solving complex problems. Each project presents its own set of challenges, but I find immense satisfaction in overcoming them through perseverance and thorough research.',
            tags: ['React', 'Bootstrap', 'CSS']
        },
        {
            image: pv,
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee',
            title: 'Test Project',
            description: 'Test test test. This is where my description goes. As a detail-oriented and enthusiastic thinker, I thrive on learning new concepts, engaging in critical analysis, and solving complex problems. Each project presents its own set of challenges, but I find immense satisfaction in overcoming them through perseverance and thorough research.',
            tags: ['React', 'Bootstrap', 'CSS']
        },
        {
            image: pv,
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee',
            title: 'Test Project',
            description: 'Test test test. This is where my description goes. As a detail-oriented and enthusiastic thinker, I thrive on learning new concepts, engaging in critical analysis, and solving complex problems. Each project presents its own set of challenges, but I find immense satisfaction in overcoming them through perseverance and thorough research.',
            tags: ['React', 'Bootstrap', 'CSS']
        },
        {
            image: pv,
            liveLink: 'test',
            codeLink: 'https://gitlab.com/gracehlee',
            title: 'Test Project',
            description: 'Test test test. This is where my description goes. As a detail-oriented and enthusiastic thinker, I thrive on learning new concepts, engaging in critical analysis, and solving complex problems. Each project presents its own set of challenges, but I find immense satisfaction in overcoming them through perseverance and thorough research.',
            tags: ['React', 'Bootstrap', 'CSS']
        },
    ];

    return (
        <div className="projects">
            <h1 style={{ fontWeight: 'bold', color: darkmode ? 'white' : '' }}>
                My Projects
            </h1>
            <div><br /></div>
            <div><br /></div>
            <div className="container">
                <div className="row">
                    {my_projects.map((project, index) => (
                        <div className="col-md-4" key={index}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
