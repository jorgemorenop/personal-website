import Experience from "../components/Experience";
import Skills from "../components/Skills";
import About from "../components/About";


import { Element } from 'react-scroll'
import Contact from "../components/Contact";

const IndexPage = () => (
    <main>
        <Element id='home' name='home'>
            <About />
            <Skills />
            <Experience/>
            <Contact/>
        </Element>
    </main>
)

export default IndexPage
