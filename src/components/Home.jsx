import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

export default function Home() {
    return (
        <main>
            <div>
                <Intro />
                <About />
                <Projects />
                <Contact />
            </div>
        </main>
    );
}
