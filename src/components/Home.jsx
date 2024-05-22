import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

export default function Home(props) {
    const darkmode = props.darkmode

    return (
        <>
            <main className={`${darkmode ? 'darkmode' : ''}`}>
                <div>
                    <section id="home">
                        <Intro darkmode={darkmode}/>
                    </section>
                    <section id="about">
                        <About />
                    </section>
                    <section id="projects">
                        <Projects darkmode={darkmode}/>
                    </section>
                    <section id="contact">
                        <Contact />
                    </section>
                </div>
            </main>
        </>
    );
}
