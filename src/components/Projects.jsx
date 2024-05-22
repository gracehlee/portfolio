export default function Projects(props) {
    const darkmode = props.darkmode

    return (
        <div className="projects">
            <h1 style={{ fontWeight: 'bold', color: darkmode ? 'white' : '' }}>
                My Projects
            </h1>
        </div>
    );
}
