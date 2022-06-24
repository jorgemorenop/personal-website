import Experience from "../components/Experience";
import Skills from "../components/Skills";
import About from "../components/About";


import { Element } from 'react-scroll'
import Contact from "../components/Contact";


const IndexPage = () => (
    <main>
        <Element id='home' name='home'>
        </Element>

        <About />
        <Skills />
        <Experience/>
        <Contact/>
    </main>
)

export default IndexPage
