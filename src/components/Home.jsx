import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

export default function Home(props) {
    const darkmode = props.darkmode

    return (
        <>
            <header className={`${darkmode ? 'darkmode' : ''}`}></header>
            <main className={`${darkmode ? 'darkmode' : ''}`}>
                <div>
                    <Intro darkmode={darkmode}/>
                    <About />
                    <Projects darkmode={darkmode}/>
                    <Contact />
                </div>
            </main>
        </>
    );
}
