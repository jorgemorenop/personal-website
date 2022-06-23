import Experience from "../components/Experience";
import Skills from "../components/Skills";
import About from "../components/About";
import Resources from "../components/Resources";

import { Element } from 'react-scroll'

const IndexPage = () => (
    <main>
        <Element id='home' name='home'>
        </Element>
        <About />
        <Experience/>
        <Skills/>
        <Resources/>
    </main>
)

export default IndexPage
