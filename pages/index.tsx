import Experience from "../components/Experience";
import Skills from "../components/Skills";
import About from "../components/About";


import { Element } from 'react-scroll'
import Projects from "../components/Projects";
import Footer from "../components/Footer";


const IndexPage = () => (
    <main>
        <Element id='home' name='home'>
        </Element>

        <About />
        <Skills />
        <Experience/>
        <Projects/>
        <Footer/>
    </main>
)

export default IndexPage
